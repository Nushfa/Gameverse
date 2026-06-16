<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name'  => 'required',
            'email'      => 'required|email',
            'phone'      => 'nullable',
            'message'    => 'required',
        ]);

        Mail::to(config('mail.admin_email'))
            ->send(new ContactMail($request->only(['first_name', 'last_name', 'email', 'phone', 'message'])));

        return response()->json([
            'message' => 'Message sent successfully'
        ]);
    }
}
