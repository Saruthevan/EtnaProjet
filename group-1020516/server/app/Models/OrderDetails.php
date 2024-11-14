<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use App\Models\Orders;
use App\Models\Drinks;
use App\Models\Poppings;
use App\Models\Sizes;
use App\Models\Bases;

class OrderDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'sugar_quantity',
        'isHot',
    ];

    public function order()
    {
        return $this->belongsTo(Orders::class);
    }

    public function drinks()
    {
        return $this->belongsTo(Drinks::class);
    }

    public function poppings()
    {
        return $this->belongsTo(Poppings::class);
    }

    public function sizes()
    {
        return $this->belongsTo(Sizes::class);
    }

    public function bases()
    {
        return $this->belongsTo(Bases::class);
    }

}
