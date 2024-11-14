<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Bubble Tea</title>

    <link href="{{ asset('css/defaults.css')}}" rel="stylesheet" />
</head>
<body>
    <header>
        <div class="logo">
             <p>MyBubbleTea </p>
             <div class="logoImg">
                 <img src="img/logoBlack.png" alt="bubble tea"/>
             </div>
        </div>
        <div class="link">
            <ul>
                <li><a class="linkNav" href="/">Home</a></li>
                <li><a class="linkNav" href="/profile">Account</a></li>
                <li><a class="linkNav" href="/cart">Cart</a></li>
                <li><a class="linkNav" href="/about">About</a></li>
            </ul>
        </div>
    </header>
    <main>
       @yield('main')
    </main>
    <footer class="footer">&copy;<span id="year"> </span><span> My Bubble Tea. All rights reserved.</span></footer>
    <script src="js/app.js"></script>
</body>
</html>