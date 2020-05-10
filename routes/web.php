<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::prefix('v1')->group(function () { 
    Route::apiResources([
        'movies' => 'API\MovieController',
        'turns' => 'API\TurnController'
    ]);
});

Route::view('/{any}', 'welcome')->where('any', '.*')->middleware('auth');