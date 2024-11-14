<?php
use \App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// Route::get('/greeting', function () {
//     return 'Hello World';
// });

// Route::post('/demonstration', function () {
//     return 'OUI';
// })->name('demo');

// Route::get('user/{id}', function ($id) {
//     return $id;
// });

Route::get('/', function () {
    return view('greeting');
});

// Route::get('/demo', function () {
//     return view('demo');
// });

Route::get('/user/{id}', [UserController::class, 'show']);

Route::get('/users', [UserController::class, 'index']);

Route::resource('post', PostController::class);