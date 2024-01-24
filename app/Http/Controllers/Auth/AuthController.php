<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request){
        $data= $request->validated();

        $user= User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token= $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request){
        $credentials= $request->validated();
        $remember= $credentials['remember'] ?? false;

        if(!Auth::check($credentials, $remember)){
            return response([
                'error' => 'The provided credentials are not correct.'
            ], 422);
        }

        $user= Auth::user();
        $token= $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request){
        $user= Auth::user();

        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}
