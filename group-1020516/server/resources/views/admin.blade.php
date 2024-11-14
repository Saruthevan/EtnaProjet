@extends('layouts.defaultStart')

@section('main')

<div class="adminMain">
    <div class="adminMenu">
        <p class="titleMain">Select to add</p>
        <div class="toCreate">
            <div class="pressToChange">
                <p>BubbleTea</p>
                <div class="parentForMore">
                    <img src="img/moreIcon.png" alt="signe plus">
                </div>
            </div>
            <div class=" displayNone none">
                <input type="text" placeholder="Name" name="nameDrink">
                <input type="text" placeholder="Flavor" name="flavorDrink">
                <input type="file" name="imgPopping" id="imgDrink">
                <button type="submit">Submit</button>
            </div>
        </div>

        <div class="toCreate">
            <div class="pressToChange">
                <p>Toppings</p>
                <div class="parentForMore">
                    <img src="img/moreIcon.png" alt="signe plus">
                </div>
            </div>
            <div class="displayNone none">
                <input type="text" placeholder="Name" name="nameToppings">
                <input type="text" placeholder="Flavor" name="flavorTopping">
                <button type="submit">Submit</button>
            </div>
        </div>

        <div class="toCreate">
            <div class="pressToChange">
                <p>Bases</p>
                <div class="parentForMore">
                    <img src="img/moreIcon.png" alt="signe plus">
                </div>
            </div>
            <div class=" displayNone none">
                <input type="text" placeholder="Name" name="nameBases">
                <input type="text" placeholder="Flavor" name="flavorBases">
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
    <div class="allProducts">
        <div class="adminBubbleTea all">
            <div class="titleAdminBlock">
                <h1>BubbleTea</h1>
            </div>
            <div class="allBubbleTea">
                <div class="cardAdminUpdate">
                    <div class="parentImgAdmin">
                        <img src="img/imgteaJuan.png" alt="image su bubble tea">
                    </div>
                    <div class="descAdmin">
                        <p>name</p>
                        <p>flavor</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="adminToppings all">

        </div>
        <div class="Bases all">

        </div>
    </div>
</div>

@endsection
