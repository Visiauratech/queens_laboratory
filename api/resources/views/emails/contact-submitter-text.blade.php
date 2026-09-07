Thank you for contacting {{ $labName }}

Dear {{ $contact->name }},

We have received your enquiry and our Madurai care team will review it shortly.

Your enquiry summary
Email: {{ $contact->email }}
Phone: +91 {{ $contact->number }}
Address: {{ $contact->address }}
Message:
{{ $contact->description ?: '—' }}

Need faster assistance?
Email: {{ $labEmail }}
Phone: +91 {{ $labPhone }}
WhatsApp: +91 {{ $labWhatsapp }}
Visit: {{ $labAddress }}

Warm regards,
{{ $labName }}
Premium diagnostics · Home collection 24×7

{{ $siteUrl }}
