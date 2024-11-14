<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\OrderDetails;


class Sizes extends Model
{
    use HasFactory;

    protected $fillable = [
        'size',
        'price',
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class);
    }
}
