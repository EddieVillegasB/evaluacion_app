<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MoviesTest extends TestCase
{
    use WithFaker, RefreshDatabase; 
    
    /** @test */

    public function a_user_can_create_a_movie() {

        $this->withoutExceptionHandling();

        $attributes = factory('App\Models\Movie')->raw();

        $this->post('/v1/movies', $attributes);
        
        $this->assertDatabaseHas('movies', $attributes);
        
        $this->get('/v1/movies')->assertSee($attributes['name']);
    }
    
    /** @test */
    public function a_user_can_view_a_movie(){
        $movie = factory('App\Models\Movie')->create();
        $this->get($movie->path())
            ->assertSee($movie->name)
            //->assertSee($movie->published_at);
            ->assertSee($movie->status) 
            ->assertSee($movie->image);
    }

    /** @test */
    
    public function a_movie_requires_a_name(){

        $attributes = factory('App\Models\Movie')->raw(['name' => '']);

        $this->post('/v1/movies',$attributes)->assertSessionHasErrors('name');
    
    }

    /** @test */
    
    public function a_movie_requires_a_published_at(){

        $attributes = factory('App\Models\Movie')->raw(['published_at' => '']);

        $this->post('/v1/movies',$attributes)->assertSessionHasErrors('published_at');
    
    }

    /** @test */
    
    public function a_movie_requires_a_image(){

        $attributes = factory('App\Models\Movie')->raw(['image' => '']);

        $this->post('/v1/movies',$attributes)->assertSessionHasErrors('image');

    }

    /** @test */
    public function a_user_can_update_a_movie() {
        
        $movie = factory('App\Models\Movie')->create();
        
        $attributes = factory('App\Models\Movie')->raw(['status' => true]);
        
        $this->put($movie->path(), $attributes);
        
        $this->assertEquals($movie, $attributes);
    
    }

    /** @test */
    public function a_user_can_delete_a_movie(){
        
        $movie = factory('App\Models\Movie')->create();
        
        $this->delete($movie->path())->assertSee($movie->id);
    
    }
}
