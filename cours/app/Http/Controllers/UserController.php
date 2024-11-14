<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($id)
    {
        $users = [
            "1" => "John",
            "2" => "Johnaaaa",
            "3" => "Johnaa",
        ];

        if (!array_key_exists($id, $users)) {
            return "L'user $id n'existe pas";
        }
        return view('user', [
            'name' => $users[$id],

        ]);
    }

    public function index()
    {
        return view('users', [
            'users' => [
                "John",
                "Johnaaaa",
                "Johnaa",
            ]
        ]);
    }
}




// <?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;


// class UserController extends Controller
// {
//     public function index()
//     {

//     }

//     public function show($id)
//     {

//     }

//     public function create()
//     {
//         return view('users.register');
//     }

//     public function store(Request $request)
//     {
//         // Validez les données du formulaire
//         $request->validate([
//             'First name' => 'required|string|max:255',
//             'lastname' => 'required|string|max:255',
//             'email' => 'required|email|unique:users',
//             'password' => 'required|string|min:8',
//         ]);

//         // Pour créer un nouvel utilisateur
//         $user = User::create([
//             'name' => $request->name,
//             'email' => $request->email,
//             'password' => Hash::make($request->password),
//         ]);

//         // Redirigez l'utilisateur vers la page appropriée (par exemple, la page de profil de l'utilisateur)
//         return redirect()->route('users.show', ['id' => $user->id]);
//     }

//     public function edit($id)
//     {

//     }

//     public function update(Request $request, $id)
//     {

//     }

//     public function destroy($id)
//     {

//     }
// }


