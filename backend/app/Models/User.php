<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'google_id',
        'fcm_token',
        'password',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}

