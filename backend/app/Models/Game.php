<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'title', 'location', 'method', 'price', 'packages', 'team_game', 'description', 'thumbnail'
    ];

    protected $casts = [
        'packages' => 'array',
        'price' => 'float',
        'team_game' => 'boolean',
    ];

    protected $appends = ['thumbnail_url'];

    public function getThumbnailUrlAttribute()
    {
        if (!$this->thumbnail) {
            return null;
        }
        $adminBaseUrl = rtrim(config('app.admin_base_url'), '/');
        return $adminBaseUrl . '/storage/' . $this->thumbnail;
    }
}
