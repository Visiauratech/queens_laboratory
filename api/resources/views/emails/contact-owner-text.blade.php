New contact enquiry — {{ $labName }}

A visitor submitted the Contact Us form on your website.

Name: {{ $contact->name }}
Email: {{ $contact->email }}
Phone: +91 {{ $contact->number }}
Address: {{ $contact->address }}
Message:
{{ $contact->description ?: '—' }}

Submitted via {{ $siteUrl }}
{{ now()->timezone('Asia/Kolkata')->format('d M Y, h:i A') }} IST

Reply directly to this email to contact the customer.
