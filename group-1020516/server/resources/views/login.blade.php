@extends('layouts.defaultStart')

@section('main')
<div class="centrale">
    <div class="image">
        <img src="img/imagelog.png" alt="bubble tea"/>
    </div>
    <div class="form">
        <form class="formLog" action="{{route("login")}}" method="post">
            @csrf
            <div class="part">
                <h1>Login</h1>
                <input class="field" type="text" id="email" name="email" required placeholder="Email"><br>
                    
                <input class="field" type="password" id="password" name="password" required placeholder="Password">
                <p>Don't have an account ? <a class="linkAccount" href="register">Register here</a></p>
            </div>
            <div class="parentButton">
                <input class="button" type="submit" value="Login">
            </div> 
        </form>
    </div>
</div>

@endsection