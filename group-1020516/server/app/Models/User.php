<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Orders;
use Illuminate\Notifications\Notifiable;

class User extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'firstName',
        'lastName',
        'email',
        'password',
    ];

    public function orders()
    {
        return $this->hasMany(Orders::class);
    }
}
