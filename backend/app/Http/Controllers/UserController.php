<?php

namespace App\Http\Controllers;

use App\Models\GoogleUser;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'googleUser' => 'required|array',
        'fcmToken' => 'required|string',
    ]);

    $googleUser = $validatedData['googleUser'];
    $fcmToken = $validatedData['fcmToken'];

    GoogleUser::updateOrCreate(
        ['google_id' => $googleUser['id']],
        [
            'name' => $googleUser['name'],
            'email' => $googleUser['email'],
            'fcm_token' => $fcmToken,
        ]
    );

    return response()->json(['message' => 'User data saved successfully'], 200);
}

}
