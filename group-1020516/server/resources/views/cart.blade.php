@extends('layouts.default')

@section('main')

<header class="head">
    <h1>Your Cart</h1><br>
</header>
<main class="container-c">
<div class="cart-container">
    <div class="cart-item">
        <div class="item-details">
            <h2>Product 1</h2>
            <p>$19.99</p>
            <div class="quantity">
                <label for="quantity1">Quantity:</label>
                <input type="number" id="quantity1" name="quantity1" value="1" min="1">
            </div>
            <p class="subtotal">Subtotal: $19.99</p>
        </div>
        <button class="remove-btn">Delete</button>
    </div>

    <div class="cart-item">
        <div class="item-details">
            <h2>Product 2</h2>
            <p>$24.99</p>
            <div class="quantity">
                <label for="quantity2">Quantity:</label>
                <input type="number" id="quantity2" name="quantity2" value="1" min="1">
            </div>
            <p class="subtotal">Subtotal: $24.99</p>
        </div>
        <button class="remove-btn">Delete</button>
    </div>
    <div class="cart-total">
        <p>Total: $44.98</p>
        <button class="checkout-btn">Proceed to payment</button>
    </div>
</div>
</main>

@endsection