<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f2f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f2f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          {{-- Top accent line --}}
          <tr>
            <td style="height:3px;background:linear-gradient(to right,#7C3AED,#A855F7,#38BDF8);border-radius:3px 3px 0 0;"></td>
          </tr>

          {{-- Card --}}
          <tr>
            <td style="background-color:#ffffff;padding:40px 44px 32px;border-left:1px solid #e8eaf0;border-right:1px solid #e8eaf0;">

              {{-- Logo / brand --}}
              <p style="margin:0 0 2px;font-size:18px;font-weight:800;letter-spacing:4px;color:#7C3AED;">GAMEVERSE</p>
              <p style="margin:0 0 32px;font-size:11px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;">Contact Form</p>

              {{-- Intro --}}
              <p style="margin:0 0 28px;font-size:14px;color:#64748b;line-height:1.7;">
                A visitor has submitted a message through the contact form. Here are their details.
              </p>

              {{-- Fields --}}
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">Full Name</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1e293b;">{{ $contactData['first_name'] }} {{ $contactData['last_name'] }}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">Email Address</p>
                    <p style="margin:0;font-size:15px;font-weight:600;">
                      <a href="mailto:{{ $contactData['email'] }}" style="color:#7C3AED;text-decoration:none;">{{ $contactData['email'] }}</a>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:28px;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">Phone</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1e293b;">{{ !empty($contactData['phone']) ? $contactData['phone'] : '—' }}</p>
                  </td>
                </tr>

                {{-- Divider --}}
                <tr>
                  <td style="padding-bottom:24px;">
                    <div style="height:1px;background-color:#f1f5f9;"></div>
                  </td>
                </tr>

                {{-- Message --}}
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">Message</p>
                    <p style="margin:0;font-size:14px;color:#334155;line-height:1.9;white-space:pre-wrap;">{{ $contactData['message'] }}</p>
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          {{-- Footer --}}
          <tr>
            <td style="background-color:#fafafa;padding:18px 44px;border:1px solid #e8eaf0;border-top:none;">
              <p style="margin:0;font-size:11px;color:#b0bac8;line-height:1.6;">
                Sent automatically from the Gameverse contact form &mdash; please do not reply to this email.
              </p>
            </td>
          </tr>

          {{-- Bottom accent line --}}
          <tr>
            <td style="height:3px;background:linear-gradient(to right,#7C3AED,#A855F7,#38BDF8);border-radius:0 0 3px 3px;"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
