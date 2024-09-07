<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoogleUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'google_id',
        'name',
        'email',
        'fcm_token',
    ];

    protected $table = 'google_users';
}
