<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactSubmitterConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Contact $contact)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'We received your enquiry — Queens Laboratory',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-submitter',
            text: 'emails.contact-submitter-text',
            with: [
                'contact' => $this->contact,
                'labName' => config('lab.name'),
                'labEmail' => config('lab.email'),
                'labPhone' => config('lab.phone_1'),
                'labWhatsapp' => config('lab.whatsapp'),
                'labAddress' => config('lab.address'),
                'siteUrl' => config('lab.frontend_url'),
            ],
        );
    }
}
