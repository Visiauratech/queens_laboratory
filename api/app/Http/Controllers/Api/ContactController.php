<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Mail\ContactOwnerNotification;
use App\Mail\ContactSubmitterConfirmation;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Throwable;

class ContactController extends Controller
{
    public function store(ContactRequest $request): JsonResponse
    {
        try {
            $contact = Contact::create($request->validated());

            $ownerEmail = config('lab.owner_email');

            Mail::to($ownerEmail)->send(new ContactOwnerNotification($contact));
            Mail::to($contact->email)->send(new ContactSubmitterConfirmation($contact));

            return response()->json([
                'success' => true,
                'message' => 'Form submitted successfully',
                'data' => [
                    'id' => $contact->id,
                    'name' => $contact->name,
                    'email' => $contact->email,
                ],
            ], 201);
        } catch (Throwable $e) {
            report($e);

            return response()->json([
                'success' => false,
                'message' => 'Unable to send your enquiry email. Please try again or reach us on WhatsApp.',
            ], 500);
        }
    }
}
