<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::get('/login', function () {
    return view('login');
});
Route::get('/register', function () {
    return view('register');
});
Route::get('/', function () {
    return view('home');
});
Route::get('/product', function () {
    return view('product');
});
Route::get('/profile', function () {
    return view('profile');
});
Route::get('/cart', function () {
    return view('cart');
});
Route::get('/about', function () {
    return view('about');
});
Route::get('/admin', function () {
    return view('admin');
});

Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::get('/users/register', [UserController::class, 'register']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}/edit', [UserController::class, 'edit']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
Route::get('/users/{id}', [UserController::class, 'show'])->name('users.show');
Route::post('/users', [UserController::class, 'store'])->name('users.store');
Route::post('/register', [UserController::class, 'register'])->name('register');
Route::get('/profile', [UserController::class, 'profile'])->name('profile');
// Route::get('/login', [UserController::class, 'login'])->name('login');
Route::post('/login', [UserController::class, 'login'])->name('login');
Route::post('/profile', [UserController::class, 'profile'])->name('profile');

