import { Box, Divider, GlobalStyles, Typography } from "@mui/material";

const sections = [
  {
    title: "Acceptance of Terms",
    body: "Welcome to Gameverse Gaming Lounge. These Terms and Conditions govern your use of our website and the booking and use of our gaming services. By accessing our website or making a booking, you agree to comply with and be bound by these terms. Please read them carefully before proceeding.",
  },
  {
    title: "Use of the Website",
    body: "You must be at least 13 years old to use our website. Users under the age of 18 must have parental or guardian consent to make bookings. You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate and current information during the registration and booking process. You may not use our website for any unlawful, fraudulent, or unauthorized purposes.",
  },
  {
    title: "Booking and Session Information",
    body: "We strive to provide accurate information regarding session availability, pricing, and gaming options. However, we do not guarantee the accuracy or completeness of all information at all times. Session prices are subject to change without prior notice. Promotional pricing and discounts are valid for a limited time and may be subject to additional terms and conditions.",
  },
  {
    title: "Orders and Payments",
    body: "By placing a booking on our website, you are making an offer to purchase gaming session time. We reserve the right to refuse or cancel any booking for any reason, including but not limited to session unavailability, pricing errors, or suspected fraudulent activity. You agree to provide valid and up-to-date payment information and authorize us to charge the total booking amount, including applicable fees, to your chosen payment method. We use PayHere, a trusted third-party payment processor, to handle your payment information securely. We do not store or have access to your full payment details.",
  },
  {
    title: "Session Rules and Conduct",
    body: "All customers are expected to follow the in-lounge rules and conduct guidelines while on the Gameverse premises. Misuse, damage, or mistreatment of gaming equipment may result in immediate termination of the session without refund and potential liability for repair or replacement costs. Gameverse reserves the right to refuse service or terminate a session for inappropriate conduct, intoxication, or any behavior that may harm other customers or staff.",
  },
  {
    title: "Cancellations, Rescheduling, and Refunds",
    body: "Our Cancellation and Refund Policy governs the process and conditions for cancelling or rescheduling sessions and seeking refunds. Please refer to our Refund Policy page on our website for full details.",
  },
  {
    title: "Intellectual Property",
    body: "All content and materials on our website, including but not limited to text, images, logos, graphics, and design elements, are protected by intellectual property rights and are the property of Gameverse Gaming Lounge or its licensors. You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.",
  },
  {
    title: "Limitation of Liability",
    body: "Gameverse Gaming Lounge, its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or gaming services. We make no warranties or representations, express or implied, regarding the uninterrupted availability of our services or gaming equipment at any given time.",
  },
  {
    title: "Third-Party Services",
    body: "Our website may contain links to third-party websites or services. Gameverse is not responsible for the content, privacy practices, or terms of any third-party website. We encourage you to review the terms and privacy policies of any third-party service you access.",
  },
  {
    title: "Amendments",
    body: "We reserve the right to modify, update, or revise these Terms and Conditions at any time without prior notice. Updated terms will be posted on this page with a revised effective date. Your continued use of our website after any changes constitutes your acceptance of the new terms. It is your responsibility to review these terms periodically.",
  },
  {
    title: "Governing Law",
    body: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions or concerns regarding these Terms and Conditions, please contact us at info@gameverse.lk or visit Gameverse Gaming Lounge in person.",
  },
];

const Terms = () => {
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
          TERMS & CONDITIONS
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

export default Terms;
