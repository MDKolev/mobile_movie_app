<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;

class MovieAddedNotification extends Notification
{
    protected $movie;

    public function __construct($movie)
    {
        $this->movie = $movie;
        Log::info('MovieAddedNotification created with movie:', ['movie' => $movie]);
    }

    public function via($notifiable)
    {
        Log::info('Notification via method called for:', ['notifiable' => $notifiable]);
        return ['database'];
    }

    public function toArray($notifiable)
    {
        Log::info('Notification data toArray method called for:', ['notifiable' => $notifiable]);
        return [
            'movie_id' => $this->movie->id,
            'movie_name' => $this->movie->name,
        ];
    }
}
