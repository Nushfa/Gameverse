import jsPDF from "jspdf";
import dayjs from "dayjs";

export function downloadReceipt(booking) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = 210;
  const margin = 25;
  const contentW = pageW - margin * 2;

  // ── Page background ──────────────────────────────
  doc.setFillColor(8, 14, 26);
  doc.rect(0, 0, pageW, 297, "F");

  // Cyan top bar
  doc.setFillColor(12, 215, 255);
  doc.rect(0, 0, pageW, 2.5, "F");

  // Dark header section
  doc.setFillColor(13, 23, 45);
  doc.rect(0, 2.5, pageW, 52, "F");

  // GAMEVERSE
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(12, 215, 255);
  doc.text("GAMEVERSE", pageW / 2, 20, { align: "center" });

  // GAMING LOUNGE
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text("GAMING LOUNGE", pageW / 2, 27, { align: "center" });

  // Thin separator
  doc.setDrawColor(30, 50, 80);
  doc.setLineWidth(0.3);
  doc.line(margin + 20, 31, pageW - margin - 20, 31);

  // PAYMENT RECEIPT
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(229, 231, 235);
  doc.text("PAYMENT RECEIPT", pageW / 2, 39, { align: "center" });

  // Ref number
  const refId = String(booking.order_id || booking.id || "").padStart(6, "0");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text(`Ref: #${refId}`, pageW / 2, 47, { align: "center" });

  // Cyan accent line
  doc.setDrawColor(12, 215, 255);
  doc.setLineWidth(0.4);
  doc.line(0, 54.5, pageW, 54.5);

  // ── Info rows ────────────────────────────────────
  const rows = [
    ["Customer Name", booking.customer_name || "-"],
    ["Phone Number",  booking.phone_number  || "-"],
    ["Station",       booking.station        || "-"],
    ["VR Play",       booking.vr_play === "yes" ? "Yes" : booking.vr_play === "no" ? "No" : (booking.vr_play || "-")],
    ["Date",          booking.booking_date ? dayjs(booking.booking_date).format("DD/MM/YYYY") : "-"],
    ["Start Time",    booking.start_time    || "-"],
    ["Duration",      booking.duration      || "-"],
    ["Extended Time", "00:00"],
  ];

  let y = 68;
  rows.forEach(([label, value], idx) => {
    if (idx % 2 === 0) {
      doc.setFillColor(16, 26, 46);
      doc.rect(margin, y - 5.5, contentW, 11, "F");
    }
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(100, 116, 139);
    doc.text(label, margin + 4, y);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(229, 231, 235);
    doc.text(String(value), pageW - margin - 4, y, { align: "right" });
    y += 13;
  });

  // ── Dashed divider ───────────────────────────────
  y += 4;
  doc.setDrawColor(30, 60, 100);
  doc.setLineWidth(0.3);
  doc.setLineDashPattern([2, 2], 0);
  doc.line(margin, y, pageW - margin, y);
  doc.setLineDashPattern([], 0);

  // ── PAYMENT SUMMARY ──────────────────────────────
  y += 12;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text("PAYMENT SUMMARY", pageW / 2, y, { align: "center" });

  y += 8;

  // Booking Amount row
  doc.setFillColor(16, 26, 46);
  doc.rect(margin, y - 5.5, contentW, 11, "F");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 116, 139);
  doc.text("Booking Amount", margin + 4, y);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(229, 231, 235);
  doc.text(
    `LKR ${Number(booking.amount || 0).toFixed(2)}`,
    pageW - margin - 4, y, { align: "right" },
  );
  y += 13;

  // Extended Time Charge row
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 116, 139);
  doc.text("Extended Time Charge", margin + 4, y);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(253, 196, 0);
  doc.text("LKR 0.00", pageW - margin - 4, y, { align: "right" });
  y += 8;

  // ── Total box ────────────────────────────────────
  const boxW = 100, boxX = (pageW - boxW) / 2;
  doc.setFillColor(10, 22, 42);
  doc.setDrawColor(12, 215, 255);
  doc.setLineWidth(0.6);
  doc.roundedRect(boxX, y, boxW, 24, 3, 3, "FD");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text("TOTAL TO COLLECT", pageW / 2, y + 8, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(12, 215, 255);
  doc.text(
    `LKR ${Number(booking.amount || 0).toFixed(2)}`,
    pageW / 2, y + 19, { align: "center" },
  );

  // ── Footer ───────────────────────────────────────
  doc.setDrawColor(20, 35, 60);
  doc.setLineWidth(0.3);
  doc.line(margin, 272, pageW - margin, 272);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(55, 65, 81);
  doc.text("Thank you for choosing Gameverse Gaming Lounge!", pageW / 2, 279, { align: "center" });
  doc.text("We hope to see you again soon.", pageW / 2, 285, { align: "center" });

  // Cyan bottom bar
  doc.setFillColor(12, 215, 255);
  doc.rect(0, 294.5, pageW, 2.5, "F");

  doc.save(`Receipt_${booking.customer_name}_${booking.order_id || booking.id}.pdf`);
}
