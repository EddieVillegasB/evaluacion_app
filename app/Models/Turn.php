<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Turn extends Model {
    
    protected $fillable = ['time','status','movie_id'];
    
    public function movies(){
        return $this->hasBelongsToMany('App\Models\Movie');
    }
}
