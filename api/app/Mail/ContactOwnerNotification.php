<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactOwnerNotification extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Contact $contact)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New website enquiry from '.$this->contact->name.' — Queens Laboratory',
            replyTo: [
                new Address($this->contact->email, $this->contact->name),
            ],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-owner',
            text: 'emails.contact-owner-text',
            with: [
                'contact' => $this->contact,
                'labName' => config('lab.name'),
                'labPhone' => config('lab.phone_1'),
                'siteUrl' => config('lab.frontend_url'),
            ],
        );
    }
}
