<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\FcmTokenController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GoogleUserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/movies', [MovieController::class, 'index']);

Route::get('movies/{id}', [MovieController::class, 'show']);

Route::post('/addmovie', [MovieController::class, 'store']);

Route::post('/send-notification', [NotificationController::class, 'sendNotification']);

Route::post('/save-token', [FcmTokenController::class, 'store']);

Route::get('/test', function() {
    return response()->json(['message' => 'Test route working!']);
});

Route::post('/users', [UserController::class, 'store']);


Route::post('/google-users', [GoogleUserController::class, 'store']);


