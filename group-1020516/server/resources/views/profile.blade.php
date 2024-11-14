@extends('layouts.default')

@section('main')

<div class="container">
    <form action="">
        @csrf
        <h1>Account Information</h1>
        <div class="inputToUpdate">
            <label for="">First name</label>
            <input type="text" placeholder="First name">
        </div>
        <div class="inputToUpdate">
            <label for="">Last name</label>
            <input type="text" placeholder="Last name">
        </div>
        <div class="inputToUpdate">
            <label for="">Email</label>
            <input type="text" placeholder="Email">
        </div>
        <div class="inputToUpdate">
            <label for="">Password</label>
            <input type="password" value="Password">
        </div><br>
        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
        <h1>Order History</h1>
        <section id="historique">
            <!-- Les commandes seront ajoutées ici  -->
        </section>
    </form>
</div>

@endsection