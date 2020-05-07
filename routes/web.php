<?php

use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () { 
    Route::apiResources([
        'movies' => 'API\MovieController'
    ]);
});

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();
