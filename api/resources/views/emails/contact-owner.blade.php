<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New enquiry — {{ $labName }}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f4;font-family:Segoe UI,Arial,Helvetica,sans-serif;color:#1a1f1c;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6f4;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4ebe4;">
          <tr>
            <td style="background:#0a0e0c;padding:22px 28px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#c8f000;font-weight:700;">{{ $labName }}</p>
              <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">New contact enquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#334039;">
                A visitor submitted the Contact Us form on your website. Reply directly to this email to respond to the customer.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e4ebe4;border-radius:10px;overflow:hidden;">
                <tr>
                  <td style="padding:12px 16px;background:#f7faf7;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6a7a6e;width:34%;">Name</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1f1c;font-weight:600;">{{ $contact->name }}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f7faf7;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6a7a6e;border-top:1px solid #e4ebe4;">Email</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1f1c;border-top:1px solid #e4ebe4;">
                    <a href="mailto:{{ $contact->email }}" style="color:#2f6b12;text-decoration:none;">{{ $contact->email }}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f7faf7;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6a7a6e;border-top:1px solid #e4ebe4;">Phone</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1f1c;border-top:1px solid #e4ebe4;">
                    <a href="tel:+91{{ $contact->number }}" style="color:#2f6b12;text-decoration:none;">+91 {{ $contact->number }}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f7faf7;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6a7a6e;border-top:1px solid #e4ebe4;">Address</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1f1c;border-top:1px solid #e4ebe4;">{{ $contact->address }}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f7faf7;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6a7a6e;border-top:1px solid #e4ebe4;vertical-align:top;">Message</td>
                  <td style="padding:12px 16px;font-size:15px;line-height:1.6;color:#1a1f1c;border-top:1px solid #e4ebe4;white-space:pre-line;">{{ $contact->description ?: '—' }}</td>
                </tr>
              </table>

              <p style="margin:22px 0 0;font-size:13px;color:#6a7a6e;line-height:1.5;">
                Submitted via {{ $siteUrl }} · {{ now()->timezone('Asia/Kolkata')->format('d M Y, h:i A') }} IST
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 22px;background:#f7faf7;border-top:1px solid #e4ebe4;">
              <p style="margin:0;font-size:12px;color:#6a7a6e;line-height:1.5;">
                This notification was sent automatically by {{ $labName }}. Phone: +91 {{ $labPhone }}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
