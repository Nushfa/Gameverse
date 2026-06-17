import { Box, Divider, GlobalStyles, Typography } from "@mui/material";

const sections = [
  {
    title: "Overview",
    body: "Thank you for choosing Gameverse Gaming Lounge. All bookings made through our website or in-lounge are strictly non-refundable. However, if you are unable to attend your session, we offer a rescheduling option — allowing you to move your booking to another available slot at no extra charge.",
  },
  {
    title: "No Refund Policy",
    body: "All payments made for gaming sessions, station bookings, VR add-ons, or any other services at Gameverse Gaming Lounge are strictly non-refundable. No cash refund will be issued under any circumstances once a booking is confirmed and payment is received.",
  },
  {
    title: "Rescheduling Policy",
    body: "If your booked session was not used (i.e., you did not attend), you may request to reschedule to a different available time slot. The rescheduling request must be made within 3 days (72 hours) from the original booking date by contacting our team at info@gameverse.lk. Rescheduling requests made after the 3-day window will not be accommodated. Rescheduling is subject to slot availability and is offered once per booking.",
  },
  {
    title: "Technical Issues & Service Disruptions",
    body: "In the rare event that a session cannot be completed due to a technical failure or service disruption caused entirely by Gameverse (e.g., equipment failure with no available alternative), the affected customer will be offered a complimentary rescheduled session at no additional cost.",
  },
  {
    title: "Refund Method",
    body: "Gameverse does not issue refunds. However, in the extremely rare event of a billing error or duplicate charge, any amount returned will be credited back to the payment-initiated media itself — the exact same card, bank account, or payment method that was originally used to make the payment. No amount will be returned as cash or transferred to a different account.",
  },
  {
    title: "Contact Us",
    body: "To request a rescheduling or for any questions regarding this policy, please contact our team at info@gameverse.lk within 3 days of your booking date. We are happy to assist and find a suitable alternative slot for you.",
  },
];

const Refund = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          "@font-face": {
            fontFamily: "BRUSHSTRIKE",
            src: `url("/fonts/Brushstrike.ttf") format("truetype")`,
          },
        }}
      />

      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #06080F, #0A0D17)",
          pt: { xs: 5, md: 7 },
          pb: 10,
          px: { xs: 3, sm: 6, md: 18, lg: 28 },
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "34px", sm: "48px", md: "64px" },
            fontFamily: "BRUSHSTRIKE",
            textAlign: "center",
            background: "linear-gradient(to right, #CF36E1, #15A2EF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          RETURN / REFUND POLICY
        </Typography>

        <Typography
          sx={{ textAlign: "center", color: "#6B7280", fontSize: "13px", mb: 4 }}
        >
          Last updated: June 2025
        </Typography>

        {/* Key notice box */}
        <Box
          sx={{
            mb: 5,
            p: { xs: 2.5, md: 3 },
            borderRadius: "12px",
            background: "rgba(207, 54, 225, 0.08)",
            border: "1px solid rgba(207, 54, 225, 0.35)",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "13px", md: "14px" }, color: "#E9D5FF", lineHeight: 1.8 }}
          >
            <strong style={{ color: "#CF36E1" }}>Please Note:</strong> All bookings are{" "}
            <strong>strictly non-refundable</strong>. If your session was not used, you may
            request a reschedule to another available slot by contacting our team at
            info@gameverse.lk <strong>within 3 days of the booking date</strong>. No refunds will
            be issued — only rescheduling. In the rare case of a billing error, any amount
            returned will be credited back to the{" "}
            <strong>payment-initiated media itself</strong>.
          </Typography>
        </Box>

        <Box
          sx={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            p: { xs: 3, md: 5 },
          }}
        >
          {sections.map((section, i) => (
            <Box key={i}>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "17px" },
                  fontWeight: 700,
                  color: "#CF36E1",
                  mb: 1,
                  mt: i === 0 ? 0 : 3,
                }}
              >
                {i + 1}. {section.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#D1D5DB",
                  lineHeight: 1.8,
                }}
              >
                {section.body}
              </Typography>
              {i < sections.length - 1 && (
                <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mt: 3 }} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Refund;
