<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplements extends Model
{
    use HasFactory;

    protected $fillable = [
        'namePopping',
        'flavorPopping',
        'price',
    ];
}
