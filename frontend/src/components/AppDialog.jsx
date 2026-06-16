import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function AppDialog({ open, onClose, type = "success", message = "" }) {
  const isSuccess = type === "success";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "#070F1E",
          color: "white",
          width: "380px",
          padding: "20px",
          borderRadius: "12px",
          border: `2px solid ${isSuccess ? "#0aaffb59" : "#f5365c59"}`,
          textAlign: "center",
        },
      }}
    >
      <DialogTitle sx={{ pb: 0 }}>
        <Box sx={{ mb: 1 }}>
          {isSuccess ? (
            <CheckCircleOutlineIcon
              sx={{ fontSize: 72, color: "#0aaffb" }}
            />
          ) : (
            <ErrorOutlineIcon
              sx={{ fontSize: 72, color: "#f5365c" }}
            />
          )}
        </Box>
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "22px",
            background: isSuccess
              ? "linear-gradient(to right, #1963f6, #e428ed)"
              : "linear-gradient(to right, #f5365c, #f7aa12)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {isSuccess ? "Success!" : "Something went wrong"}
        </Box>
      </DialogTitle>

      {message && (
        <DialogContent>
          <Box
            sx={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "14px",
              mt: 0.5,
              lineHeight: 1.6,
            }}
          >
            {message}
          </Box>
        </DialogContent>
      )}

      <DialogActions sx={{ justifyContent: "center", pt: message ? 1 : 2, pb: 1 }}>
        <Button
          onClick={onClose}
          sx={{
            background: isSuccess
              ? "linear-gradient(to right, #2287a3, #8a38f5)"
              : "linear-gradient(to right, #f5365c, #8a38f5)",
            color: "#fff",
            width: "140px",
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { opacity: 0.85 },
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
