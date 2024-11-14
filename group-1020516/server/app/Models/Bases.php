<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\OrderDetails;

class Bases extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class);
    }
}
