<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ContactRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:30',
                'regex:/^[A-Za-z]+(?: [A-Za-z]+)*$/',
                'not_regex:/^\s/',
                'not_regex:/\s{2,}/',
            ],
            'email' => [
                'required',
                'email',
                'not_regex:/^\s/',
                'not_regex:/\s/',
            ],
            'number' => [
                'required',
                'digits:10',
                'regex:/^[0-9]{10}$/',
            ],
            'address' => [
                'required',
                'string',
                'min:5',
                'not_regex:/^\s/',
                'not_regex:/\s{2,}/',
            ],
            'description' => [
                'nullable',
                'string',
                'not_regex:/^\s/',
                'not_regex:/\s{2,}/',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Name is required',
            'name.regex' => 'Name allows alphabets only',
            'name.max' => 'Name allows 30 characters only',
            'email.required' => 'Email is required',
            'email.email' => 'Enter a valid email format',
            'number.required' => 'Number is required',
            'number.digits' => 'Number must be 10 digits',
            'address.required' => 'Address is required',
        ];
    }

    protected function failedValidation(Validator $validator): void
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => $validator->errors()->first(),
            'errors' => $validator->errors(),
        ], 422));
    }
}
