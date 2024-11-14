@extends('layouts.defaultStart')

@section('main')
    <div class="centrale">
        <div class="form">
            <form action="" method="post">
                @csrf
                <h1>Register</h1>
                <input class="field fieldReg" type="text" id="firstname" name="firstname" required placeholder="First name"><br>
                    
                <input class="field fieldReg" type="text" id="lastname" name="lastname" required placeholder="Last name"><br>
                    
                <input class="field fieldReg" type="text" id="email" name="email" required placeholder="Email"><br>
                    
                <input class="field fieldReg" type="password" id="password" name="password" required placeholder="Password"><br>
                    
                {{-- <input class="field fieldReg" type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm Password"> --}}
                <p>Have an account ? <a class="linkAccount" href="login">Login here</a></p>
                
                <input class="button" type="submit" value="Register">
               
            </form>
        </div>
        <div class="image">
            <img src="img/imagereg.png" alt="bubble tea"/>
        </div>
    </div>
@endsection