<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MovieTest extends TestCase{

    use RefreshDatabase;

    /** @test */

    public function it_has_a_path(){
        $movie = factory('App\Models\Movie')->create();
        $this->assertEquals("/v1/movies/{$movie->id}" , $movie->path());
    }
    
}
