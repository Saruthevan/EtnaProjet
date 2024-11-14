<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\OrderDetails;
use App\Models\Users;


class Orders extends Model
{
    use HasFactory;

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class);
    }

    public function users()
    {
        return $this->belongsTo(Users::class);
    }
}
