import { Box, Divider, GlobalStyles, Typography } from "@mui/material";

const sections = [
  {
    title: "Introduction",
    body: "At Gameverse Gaming Lounge, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or make a booking. By using our website, you consent to the practices described in this policy.",
  },
  {
    title: "Information We Collect",
    body: "When you visit our website or make a booking, we may collect the following information: Personal identification information such as your name, email address, and phone number, provided voluntarily during registration or the booking/checkout process; Payment and billing information necessary to process your bookings, which is securely handled by our trusted third-party payment processor (PayHere); Browsing information such as your IP address, browser type, and device information, collected automatically using cookies and similar technologies.",
  },
  {
    title: "How We Use Your Information",
    body: "We may use the collected information for the following purposes: To process and confirm your gaming session bookings; To communicate with you regarding your bookings, provide customer support, and respond to inquiries; To personalize your experience and send relevant promotions or updates (you may opt out at any time); To improve our website, services, and operations based on your feedback and browsing patterns; To detect and prevent fraud, unauthorized activities, and misuse of our website.",
  },
  {
    title: "Information Sharing",
    body: "We respect your privacy and do not sell, trade, or transfer your personal information to third parties without your consent, except in the following circumstances: Trusted service providers — We may share your information with third-party service providers (such as PayHere for payment processing) who assist us in operating our website and processing payments. These providers are contractually obligated to handle your data securely and confidentially; Legal requirements — We may disclose your information if required to do so by law or in response to valid legal requests or court orders.",
  },
  {
    title: "Payment Security",
    body: "All payment transactions are processed securely through PayHere, a trusted third-party payment gateway. We do not store or have direct access to your full credit/debit card details. PayHere complies with PCI-DSS standards to ensure your payment data is handled securely.",
  },
  {
    title: "Data Security",
    body: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
  },
  {
    title: "Cookies and Tracking Technologies",
    body: "We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand your preferences. You may disable cookies through your browser settings; however, doing so may limit certain features and functionality of our website.",
  },
  {
    title: "Data Retention",
    body: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. Booking records may be retained for a reasonable period for accounting and legal compliance purposes.",
  },
  {
    title: "Your Rights",
    body: "You have the right to request access to the personal information we hold about you, request corrections to inaccurate data, and request deletion of your personal data where applicable. To exercise these rights, please contact us at info@gameverse.lk.",
  },
  {
    title: "Changes to This Policy",
    body: "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us at info@gameverse.lk or visit us at Gameverse Gaming Lounge.",
  },
];

const Privacy = () => {
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
          PRIVACY POLICY
        </Typography>

        <Typography
          sx={{ textAlign: "center", color: "#6B7280", fontSize: "13px", mb: 6 }}
        >
          Last updated: June 2025
        </Typography>

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

export default Privacy;
