<?php

use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function () { 
    Route::apiResources([
        'movies' => 'API\MovieController',
        'turns' => 'API\TurnController'
    ]);
});

Route::view('/{any}', 'welcome')->where('any', '.*');

Auth::routes();
