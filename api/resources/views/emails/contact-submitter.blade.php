<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Enquiry received — {{ $labName }}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f4;font-family:Segoe UI,Arial,Helvetica,sans-serif;color:#1a1f1c;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6f4;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4ebe4;">
          <tr>
            <td style="background:#0a0e0c;padding:22px 28px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#c8f000;font-weight:700;">{{ $labName }}</p>
              <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">Thank you for contacting us</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#334039;">
                Dear <strong style="color:#1a1f1c;">{{ $contact->name }}</strong>,
              </p>
              <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#334039;">
                We have received your enquiry and our Madurai care team will review it shortly. For urgent home collection or report support, you may also reach us on WhatsApp or phone.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e4ebe4;border-radius:10px;overflow:hidden;margin-bottom:20px;">
                <tr>
                  <td colspan="2" style="padding:12px 16px;background:#0a0e0c;color:#c8f000;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-weight:700;">
                    Your enquiry summary
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f7faf7;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6a7a6e;width:34%;">Email</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1f1c;">{{ $contact->email }}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f7faf7;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6a7a6e;border-top:1px solid #e4ebe4;">Phone</td>
                  <td style="padding:12px 16px;font-size:15px;color:#1a1f1c;border-top:1px solid #e4ebe4;">+91 {{ $contact->number }}</td>
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

              <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#1a1f1c;">Need faster assistance?</p>
              <p style="margin:0;font-size:14px;line-height:1.7;color:#334039;">
                Email: <a href="mailto:{{ $labEmail }}" style="color:#2f6b12;text-decoration:none;">{{ $labEmail }}</a><br />
                Phone: <a href="tel:+91{{ $labPhone }}" style="color:#2f6b12;text-decoration:none;">+91 {{ $labPhone }}</a><br />
                WhatsApp: <a href="https://wa.me/91{{ $labWhatsapp }}" style="color:#2f6b12;text-decoration:none;">+91 {{ $labWhatsapp }}</a><br />
                Visit: {{ $labAddress }}
              </p>

              <p style="margin:22px 0 0;font-size:15px;line-height:1.6;color:#334039;">
                Warm regards,<br />
                <strong style="color:#1a1f1c;">{{ $labName }}</strong><br />
                <span style="font-size:13px;color:#6a7a6e;">Premium diagnostics · Home collection 24×7</span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 22px;background:#f7faf7;border-top:1px solid #e4ebe4;">
              <p style="margin:0;font-size:12px;color:#6a7a6e;line-height:1.5;">
                This is an automated confirmation from
                <a href="{{ $siteUrl }}" style="color:#2f6b12;text-decoration:none;">{{ $siteUrl }}</a>.
                Please do not reply with sensitive medical attachments on unsecured channels.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
