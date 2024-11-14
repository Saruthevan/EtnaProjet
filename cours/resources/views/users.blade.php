@extends ('layouts.default')

@section('main')

    @foreach ($users as $user)

        <h1>{{ $user }}</h1>
    @endforeach
@endsectiona