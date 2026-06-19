import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Divider, GlobalStyles, Typography } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PickDateTime from "../components/PickDateTime";
import PlayerInfo from "../components/PlayerInfo";
import SelectStation from "../components/SelectStation";
import { API_BASE_URL } from "../apiConfig";
import AppDialog from "../components/AppDialog";
import { useLoading } from "../context/LoadingContext";
import { downloadReceipt } from "../utils/downloadReceipt";

const Booking = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [dialog, setDialog] = useState({ open: false, type: "success", message: "" });
  const showDialog = (type, message) => setDialog({ open: true, type, message });
  const closeDialog = () => setDialog((d) => ({ ...d, open: false }));
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const location = useLocation();
  const backTarget = location.state?.from || "/";
  const [bookingData, setBookingData] = useState({
    station: null,
    dateTime: null,
  });
  const [playerInfo, setPlayerInfo] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    vrPlay: "yes",
    players: 1,
  });

  const [stations, setStations] = useState([]);
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const stationType = location.state?.stationType;

  useEffect(() => {
    const fetchStations = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE_URL}/api/stations`);
        if (res.data.status === "success") {
          setStations(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch stations", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStations();
  }, [setLoading]);

  const filteredStations = stationType
    ? stations.filter((s) => s.type === stationType)
    : stations;

  const handleStationSelect = (station) => {
    setBookingData({ ...bookingData, station });
  };

  const handleDateTimeSelect = (dateTime) =>
    setBookingData({ ...bookingData, dateTime });

  const handlePlayerInfoChange = (data) => setPlayerInfo(data);

  const handleBookingSubmit = async (orderId) => {
    const token = localStorage.getItem("authToken");

    if (!bookingData.station || !bookingData.dateTime) {
      showDialog("error", "Please select a station and date/time.");
      return;
    }

    const date = bookingData.dateTime?.date;
    const time = bookingData.dateTime?.time?.replace(".", ":");
    const duration = bookingData.dateTime?.duration || null;

    setLoading(true);
    try {
      let firstBookingData = null;
      for (const player of playerInfo.playerDetails) {
        const payload = {
          nfc_card_number: null,
          customer_name: `${player.firstName} ${player.lastName}`,
          phone_number: player.contactNumber,
          email: player.email,
          station: bookingData.station.name,
          booking_date: date,
          start_time: time,
          duration,
          amount: totalAmount,
          vr_play: player.vrPlay,
          number_of_players: 1,
          payment_method: "PayHere",
          order_id: orderId,
        };

        const res = await axios.post(`${API_BASE_URL}/api/bookings`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!firstBookingData) {
          firstBookingData = {
            ...payload,
            id: res.data?.data?.id || res.data?.id || orderId,
          };
        }
      }

      if (firstBookingData) {
        setConfirmedBooking(firstBookingData);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      return true;
    } catch (err) {
      console.error(err);
      showDialog("error", "Failed to create bookings. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const calculateAmount = () => {
    if (!bookingData.station || !bookingData.dateTime) return 0;

    const selectedDuration =
      Number(
        bookingData.dateTime?.durationMinutes || bookingData.dateTime?.duration,
      ) || 0;
    if (!selectedDuration) return 0;

    const pricingArray = bookingData.station.pricing || [];
    const price30 = pricingArray.find((p) => Number(p.duration) === 30);
    const price60 = pricingArray.find((p) => Number(p.duration) === 60);

    if (!price30 && !price60) return 0;

    const rate60Normal = price60
      ? parseFloat(price60.price || 0)
      : parseFloat(price30.price || 0) * 2;
    const rate60VR = price60
      ? parseFloat(price60.vrPrice || price60.price || 0)
      : parseFloat(price30.vrPrice || price30.price || 0) * 2;
    const rate30Normal = price30
      ? parseFloat(price30.price || 0)
      : parseFloat(price60.price || 0) / 2;
    const rate30VR = price30
      ? parseFloat(price30.vrPrice || price30.price || 0)
      : parseFloat(price60.vrPrice || price60.price || 0) / 2;

    let total = 0;
    const hours = Math.floor(selectedDuration / 60);
    const remainingMinutes = selectedDuration % 60;

    playerInfo.playerDetails?.forEach((player) => {
      const isVR = player.vrPlay === "yes";
      if (hours > 0) total += hours * (isVR ? rate60VR : rate60Normal);
      if (remainingMinutes === 30) total += isVR ? rate30VR : rate30Normal;
    });

    return total;
  };

  const totalAmount = calculateAmount();

  return (
    <>
      {/* Global font registration */}
      <GlobalStyles
        styles={{
          "@font-face": {
            fontFamily: "Brushstrike",
            src: `url("/fonts/Brushstrike.ttf") format("truetype")`,
            fontWeight: "normal",
            fontStyle: "normal",
          },
        }}
      />

      <Box
        sx={{
          bgcolor: "#0A0D17",
          minHeight: "100vh",
          py: 6,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Back Button */}
        <Box sx={{ maxWidth: "1400px", mx: "auto", mb: 4 }}>
          <Button
            startIcon={<ArrowBackIcon sx={{ fontSize: "20px" }} />}
            onClick={() => navigate(backTarget)}
            sx={{
              color: "#A905BC",
              textTransform: "none",
              border: "2px solid #A905BC",
              borderRadius: "50%",
              minWidth: "40px",
              width: "40px",
              height: "40px",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(169, 5, 188, 0.1)",
                borderColor: "#A905BC",
              },
              "& .MuiButton-startIcon": {
                margin: 0,
              },
            }}
          ></Button>
        </Box>

        {/* ── RECEIPT CARD (shown after confirmed booking) ── */}
        {confirmedBooking && (
          <Box
            sx={{
              maxWidth: 480,
              mx: "auto",
              mb: 6,
              p: { xs: 2.5, sm: 4 },
              background: "rgba(255,255,255,0.06)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Success header */}
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <CheckCircleOutlineIcon
                sx={{ fontSize: 56, color: "#33B2F7", filter: "drop-shadow(0 0 10px #33B2F7)" }}
              />
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "22px",
                  fontWeight: 700,
                  background: "linear-gradient(90deg,#CF36E1,#33B2F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Booking Confirmed!
              </Typography>
              <Typography sx={{ color: "#9CA3AF", fontSize: 13, mt: 0.5 }}>
                Ref: #{String(confirmedBooking.order_id || confirmedBooking.id || "").padStart(6, "0")}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2.5 }} />

            {/* Details rows */}
            {[
              ["Customer Name", confirmedBooking.customer_name],
              ["Phone Number",  confirmedBooking.phone_number],
              ["Station",       confirmedBooking.station],
              ["VR Play",       confirmedBooking.vr_play === "yes" ? "Yes" : "No"],
              ["Date",          confirmedBooking.booking_date ? dayjs(confirmedBooking.booking_date).format("DD/MM/YYYY") : "-"],
              ["Start Time",    confirmedBooking.start_time],
              ["Duration",      confirmedBooking.duration],
            ].map(([label, value]) => (
              <Box key={label} sx={{ display: "flex", justifyContent: "space-between", mb: 1.4 }}>
                <Typography sx={{ color: "#9CA3AF", fontSize: 14 }}>{label}</Typography>
                <Typography sx={{ color: "#fff", fontSize: 14 }}>{value || "-"}</Typography>
              </Box>
            ))}

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography sx={{ color: "#9CA3AF", fontSize: 14 }}>Payment</Typography>
              <Typography sx={{ color: "#C084FC", fontSize: 15, fontWeight: 700 }}>
                LKR {Number(confirmedBooking.amount || 0).toFixed(2)}
              </Typography>
            </Box>

            {/* Download Receipt button */}
            <Button
              fullWidth
              startIcon={<DownloadIcon />}
              onClick={() => downloadReceipt(confirmedBooking)}
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                textTransform: "none",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 999,
                py: 1.2,
                border: "1px solid rgba(255,255,255,0.7)",
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor: "#16A34A",
                  border: "1px solid #16A34A",
                },
              }}
            >
              Download Receipt
            </Button>
          </Box>
        )}

        {/* Booking form — hidden once booking is confirmed */}
        {!confirmedBooking && (
          <>
            {/* Main Header */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Brushstrike, sans-serif",
                  fontSize: { xs: "24px", sm: "55px", md: "84px" },
                  fontWeight: 400,
                  fontStyle: "normal",
                  background: "linear-gradient(to right, #A033FF, #D100FF, #00C3FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 3,
                  lineHeight: { xs: "30px", sm: "60px", md: "80px" },
                  letterSpacing: "0.03em",
                }}
              >
                BOOK YOUR GAMING SESSION
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "8px", sm: "15px", md: "18px" },
                  color: "#FFFFFF",
                  maxWidth: "1200px",
                  mx: "auto",
                  lineHeight: 1.3,
                }}
              >
                Get ready to battle it out! Join our exciting events and competitive
                tournaments featuring top games, epic challenges, and massive
                rewards. Whether you're a casual player or a pro, there's always a
                stage for you to shine.
              </Typography>
            </Box>

            <SelectStation
              stations={filteredStations}
              onNext={handleStationSelect}
              selectedStation={bookingData.station}
            />

            <PickDateTime
              onNext={handleDateTimeSelect}
              selectedStation={bookingData.station}
              selectedDateTime={bookingData.dateTime}
            />

            <PlayerInfo
              selectedStation={bookingData.station}
              selectedDateTime={bookingData.dateTime}
              onPlayerInfoChange={handlePlayerInfoChange}
              amount={totalAmount}
              onBookingSubmit={handleBookingSubmit}
              stationType={stationType}
            />

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "flex-end" }, gap: 2 }} />
          </>
        )}
      </Box>
      <AppDialog open={dialog.open} onClose={closeDialog} type={dialog.type} message={dialog.message} />
    </>
  );
};

export default Booking;
