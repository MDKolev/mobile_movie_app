<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\User;
use App\Notifications\MovieAddedNotification;
use Illuminate\Support\Facades\Notification;

class MovieController extends Controller
{
    // Method to show all movies
    public function index()
    {
        $movies = Movie::all()->map(function ($movie) {
            $movie->cover_photo_url = url('storage/covers/' . $movie->cover_photo);
            return $movie;
        });

        return response()->json($movies);
    }

    // Method to show a single movie by ID
    public function show($id)
    {
        $movie = Movie::find($id);

        if (!$movie) {
            return response()->json(['error' => 'Movie not found'], 404);
        }

        $movie->cover_photo_url = url('storage/covers/' . $movie->cover_photo);

        return response()->json($movie);
    }

    // Method to store a new movie
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'year' => 'required|integer',
            'genre' => 'required|string|max:255',
            'cover_photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resume' => 'required|string',
        ]);

        // Store the uploaded file in the storage/covers directory
        $coverPhotoPath = $request->file('cover_photo')->store('covers', 'public');

        // Extract the filename from the path
        $coverPhotoFilename = basename($coverPhotoPath);

        // Create a new movie record in the database
        $movie = Movie::create([
            'name' => $request->name,
            'year' => $request->year,
            'genre' => $request->genre,
            'cover_photo' => $coverPhotoFilename, // Save only the filename
            'resume' => $request->resume,
        ]);

        // Send push notification
        $users = User::all(); // Adjust this as needed to target specific users
        foreach ($users as $user) {
            $this->notificationService->sendPushNotification(
                $user->expo_push_token,
                'New Movie Added',
                'A new movie has been added: ' . $movie->name
            );
        }

        return response()->json([
            'message' => 'Movie added successfully!',
            'movie' => $movie,
        ]);
    }
}
