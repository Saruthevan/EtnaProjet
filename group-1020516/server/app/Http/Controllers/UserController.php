<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\EloquentUserProvide;
use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Contracts\Auth\Authenticatable;





class UserController extends Controller
{
    public function register(Request $request)
    {


        // Validez les données du formulaire
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);


        // Créez un nouvel utilisateur
        $user = new User();
        $user->firstname = $request->input('firstname');
        $user->lastname = $request->input('lastname');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();


        //  Redirigez l'utilisateur vers la page appropriée (par exemple, la page de profil de l'utilisateur)
        return redirect('/login')->with('status', 'Votre compte a été crée avec succès !');
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $request->input('email'))->first();
        if ($user) {
            if (Hash::check($request->input('password'), $user->password)) {
                $request->session()->put('user', $user);
                return redirect('/');
            } else {
                return back()->with('status', 'identifiant ou mot de passe invalide !');
            }

        } else {
            return back()->with('status', 'Désolé ! Vous n\'avez pas de compte avec cet email.');
        }

    }

    public function logout(Request $request)
    {
        $request->session()->forget('user');
        return redirect('/login')->with('status', 'Vous avez été deconnecté !');
    }

    public function profile()
    {
        $user = auth()->user();
        return view('/profile', ['user' => $user]);
    }
}

