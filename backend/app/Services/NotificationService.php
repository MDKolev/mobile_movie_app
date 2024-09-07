<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class NotificationService
{
    /**
     * Send a push notification using the Expo Push API.
     *
     * @param string $expoPushToken The Expo push token of the recipient.
     * @param string $title The title of the notification.
     * @param string $body The body text of the notification.
     * @param array $data Additional data to include with the notification.
     * @return void
     */
    public function sendPushNotification(string $expoPushToken, string $title, string $body, array $data = []): void
    {
        try {
            $response = Http::post('https://exp.host/--/api/v2/push/send', [
                'to' => $expoPushToken,
                'sound' => 'default',
                'title' => $title,
                'body' => $body,
                'data' => $data,
            ]);

            if ($response->failed()) {
                Log::error('Failed to send notification', [
                    'response' => $response->body(),
                    'status' => $response->status(),
                    'expoPushToken' => $expoPushToken,
                ]);
            }
        } catch (\Exception $e) {
            Log::error('Exception while sending notification', [
                'message' => $e->getMessage(),
                'expoPushToken' => $expoPushToken,
                'title' => $title,
                'body' => $body,
                'data' => $data,
            ]);
        }
    }
}
