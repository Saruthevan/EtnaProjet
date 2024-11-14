<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\OrderDetails;


class Drinks extends Model
{
    use HasFactory;

    protected $fillable = [
        'nameDrink',
        'flavorDrink',
        'image_path',
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class);
    }
}
