<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#06080F;font-family:Arial,Helvetica,sans-serif;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#06080F;padding:40px 20px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="max-width:560px;background-color:#0F111F;border-radius:16px;border:1px solid #1E1B33;overflow:hidden;">

          <!-- Top accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(to right,#CF36E1,#33B2F7);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td align="center" style="padding:36px 40px 20px;">
              <p style="margin:0;font-size:28px;font-weight:800;letter-spacing:3px;color:#CF36E1;text-transform:uppercase;">
                GAMEVERSE
              </p>
              <p style="margin:8px 0 0;font-size:13px;color:#5C5E7A;letter-spacing:1px;text-transform:uppercase;">
                New Contact Message
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="height:1px;background-color:#1E1B33;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro text -->
          <tr>
            <td align="center" style="padding:28px 40px 0;">
              <p style="margin:0;font-size:15px;color:#A0A3C0;line-height:1.7;">
                A visitor has submitted a message through the contact form.<br/>
                Here are their details.
              </p>
            </td>
          </tr>

          <!-- Fields box -->
          <tr>
            <td style="padding:24px 40px;">
              <table cellpadding="0" cellspacing="0" border="0"
                style="background-color:#17192E;border-radius:12px;border:1px solid #2E2B4A;width:100%;">
                <tr>
                  <td style="padding:28px 28px 8px;">

                    <!-- Full Name -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#5C5E7A;">
                            Full Name
                          </p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">
                            {{ $contactData['first_name'] }} {{ $contactData['last_name'] }}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                      <tr>
                        <td style="height:1px;background-color:#2E2B4A;font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                    </table>

                    <!-- Email Address -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#5C5E7A;">
                            Email Address
                          </p>
                          <p style="margin:0;font-size:15px;font-weight:600;">
                            <a href="mailto:{{ $contactData['email'] }}"
                              style="color:#33B2F7;text-decoration:none;">
                              {{ $contactData['email'] }}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                      <tr>
                        <td style="height:1px;background-color:#2E2B4A;font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                    </table>

                    <!-- Phone -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:8px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#5C5E7A;">
                            Phone
                          </p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">
                            {{ !empty($contactData['phone']) ? $contactData['phone'] : '—' }}
                          </p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message box -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table cellpadding="0" cellspacing="0" border="0"
                style="background-color:#17192E;border-radius:12px;border:1px solid #2E2B4A;width:100%;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#5C5E7A;">
                      Message
                    </p>
                    <p style="margin:0;font-size:14px;color:#A0A3C0;line-height:1.9;white-space:pre-wrap;">{{ $contactData['message'] }}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Warning / note -->
          <tr>
            <td style="padding:0 40px 28px;">
              <table cellpadding="0" cellspacing="0" border="0"
                style="background-color:#1A0E20;border-radius:8px;border:1px solid #3B1A42;width:100%;">
                <tr>
                  <td style="padding:14px 18px;">
                    <p style="margin:0;font-size:13px;color:#C084DC;line-height:1.6;">
                      &#9993;&nbsp; Reply directly to <strong style="color:#ffffff;">{{ $contactData['email'] }}</strong> to respond to this visitor.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer divider -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="height:1px;background-color:#1E1B33;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:24px 40px 36px;">
              <p style="margin:0;font-size:12px;color:#3A3C58;line-height:1.7;">
                &copy; {{ date('Y') }} Gameverse. All rights reserved.<br/>
                This is an automated message from the Gameverse contact form &mdash; please do not reply directly.
              </p>
            </td>
          </tr>

          <!-- Bottom accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(to right,#33B2F7,#CF36E1);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>

</body>
</html>
