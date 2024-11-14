@extends('layouts.default')

@section('main')

    <form action="{{ route('post.store')}}" method="POST">
        @csrf
        @method('PUT')
        <input type="text" placeholder="Le nom" name="name">
    
        <input type="text" placeholder="L'auteur" name="author">
    
        <textarea name="content" cols="30" rows="10"></textarea>

        <button>Creer</button>
    </form>
@endsection