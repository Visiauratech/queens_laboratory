<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    public function store(ContactRequest $request): JsonResponse
    {
        try {
            $contact = Contact::create($request->validated());

            return response()->json([
                'success' => true,
                'message' => 'Form submitted successfully',
                'data' => $contact,
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Unable to save enquiry. Please try again.',
            ], 500);
        }
    }
}
