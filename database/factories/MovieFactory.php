<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Movie;
use Faker\Generator as Faker;

$factory->define(Movie::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'published_at' => $faker->dateTime,
        'status' => $faker->boolean,
        'image' => $faker->image(), 
    ];
});
