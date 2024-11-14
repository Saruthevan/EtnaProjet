@extends('layouts.default')

@section('main')

<div class="hbody">
    <div class="pageTitle">
        <h1><center>Tea Juan<center><h1>
    </div>
    <div class="top">
        <div class="choice">
            <div class="element">
                <div class="titleChoice">
                    <p class="pChoice">Size</p>
                </div>
                <div class="buttonChoiceParent">
                    <button class="buttonChoice sizeChoice" type="button" value="">Small</button>
                    <button class="buttonChoice sizeChoice" type="button" value="">Medium</button>
                    <button class="buttonChoice sizeChoice" type="button" value="">Maxi</button>
                </div>
            </div>
            <div class="element">
                <div class="titleChoice">
                    <p class="pChoice">Base</p>
                </div>
                <div class="buttonChoiceParent">
                    <button class="buttonChoice baseChoice" type="button" value="">Water</button>
                    <button class="buttonChoice baseChoice" type="button" value="">Cow Milk</button>
                    <button class="buttonChoice baseChoice" type="button" value="">Vegetable Milk</button>
                </div>
            </div>
            <div class="element">
                <div class="titleChoice">
                    <p class="pChoice">Sugar</p>
                </div>
                <div class="buttonChoiceParent">
                    <button class="buttonChoice sugarChoice" type="button" value="">Low Sugar</button>
                    <button class="buttonChoice sugarChoice" type="button" value="">Sugar</button>
                    <button class="buttonChoice sugarChoice" type="button" value="">Hight Sugar</button>
                </div>
            </div>
        </div>
        <div class="imageJuan">
            <img src="img/imgteaJuan.png" alt="bubble tea juan"/>
        </div>
    </div>

    <div class="down">
        <div class="element">
            <div class="titleDown">
                <p class="pChoice">Poppings</p>
            </div>
            <div class="buttonChoiceParent">
                <button class="buttonChoice poppingsChoice" type="button" value="">Tapioca pearls</button>
                <button class="buttonChoice poppingsChoice" type="button" value="">Brown sugar</button>
                <button class="buttonChoice poppingsChoice" type="button" value="">Mango</button>
                <button class="buttonChoice poppingsChoice" type="button" value="">Lulo</button>
                <button class="buttonChoice poppingsChoice" type="button" value="">Nothings</button>
            </div>
        </div>

        <div class="element">
            <div class="titleDown">
                <p class="pChoice">Supplements</p>
            </div>
            <div class="buttonChoiceParent">
                <button class="buttonChoice supplementsChoice" type="button" value="">Tapioca pearls <small>+0,75$</small></button>
                <button class="buttonChoice supplementsChoice" type="button" value="">Brown sugar <small>+1,75$</small></button>
                <button class="buttonChoice supplementsChoice" type="button" value="">Mango <small>+2,75$</small></button>
                <button class="buttonChoice supplementsChoice" type="button" value="">Lulo <small>+4,75$</small></button>
                <button class="buttonChoice supplementsChoice" type="button" value="">Lychee <small>+2,75$</small></button>
            </div>
        </div>
    </div>
    </div>
    <center><button class="checkout-">Validate</button></center>
</div>
@endsection