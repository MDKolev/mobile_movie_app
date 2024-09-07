<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FcmToken;
use Illuminate\Support\Facades\Auth;

class FcmTokenController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'token' => 'required|string',
            'user_id' => 'required|integer|exists:users,id',
        ]);

        // Save or update the token
        FcmToken::updateOrCreate(
            ['user_id' => $request->user_id],
            ['fcm_token' => $request->token]
        );

        return response()->json(['message' => 'Token saved successfully'], 200);
    }
}
