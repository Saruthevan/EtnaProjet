<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\OrderDetails;


class Poppings extends Model
{
    use HasFactory;

    protected $fillable = [
        'namePopping',
        'flavorPopping',
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class);
    }
}
