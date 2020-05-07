<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMovieRequest;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $movies = Movie::all();
        return response()->json(['movies' => $movies, 'message' => 'OK','error' => false], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMovieRequest $request) {
        $movie = Movie::create($request->validated());
        return response()->json(['movie' => $movie, 'message' => 'OK', 'error' => false], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie){
        return response()->json(['movie' => $movie, 'message' => 'OK', 'error' => false], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie){
        $movie->update($request->all());
        return response()->json(['movie' => $movie, 'message' => 'OK', 'error' => false], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie){
        $movie->delete();
        return response()->json(['movie' => $movie, 'message' => 'OK', 'error' => false], 200);
    }
}
