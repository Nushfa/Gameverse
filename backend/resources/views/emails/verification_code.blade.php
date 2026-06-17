<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset Code</title>
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
                Password Reset
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

          <!-- Body text -->
          <tr>
            <td align="center" style="padding:32px 40px 0;">
              <p style="margin:0;font-size:16px;color:#A0A3C0;line-height:1.7;">
                You requested a password reset for your Gameverse account.<br/>
                Use the code below to continue. It expires in <strong style="color:#fff;">15 minutes</strong>.
              </p>
            </td>
          </tr>

          <!-- Code box -->
          <tr>
            <td align="center" style="padding:32px 40px;">
              <table cellpadding="0" cellspacing="0" border="0"
                style="background-color:#17192E;border-radius:12px;border:1px solid #2E2B4A;width:100%;">
                <tr>
                  <td align="center" style="padding:28px 20px;">
                    <p style="margin:0 0 16px;font-size:11px;letter-spacing:2px;color:#5C5E7A;text-transform:uppercase;">
                      Verification Code
                    </p>

                    <!-- Individual digit boxes -->
                    <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                      <tr>
                        @php $digits = str_split((string) $code); @endphp
                        @foreach($digits as $digit)
                        <td style="padding:0 4px;">
                          <div style="
                            width:44px;
                            height:54px;
                            line-height:54px;
                            text-align:center;
                            background-color:#0F111F;
                            border:1px solid #3A3760;
                            border-radius:8px;
                            font-size:26px;
                            font-weight:800;
                            color:#ffffff;
                          ">{{ $digit }}</div>
                        </td>
                        @endforeach
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Warning -->
          <tr>
            <td align="center" style="padding:0 40px 28px;">
              <table cellpadding="0" cellspacing="0" border="0"
                style="background-color:#1A0E20;border-radius:8px;border:1px solid #3B1A42;width:100%;">
                <tr>
                  <td style="padding:14px 18px;">
                    <p style="margin:0;font-size:13px;color:#C084DC;line-height:1.6;">
                      &#9888;&nbsp; If you did not request this, please ignore this email. Your password will not change.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="height:1px;background-color:#1E1B33;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:24px 40px 36px;">
              <p style="margin:0;font-size:12px;color:#3A3C58;line-height:1.7;">
                &copy; {{ date('Y') }} Gameverse. All rights reserved.<br/>
                This is an automated message — please do not reply.
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
