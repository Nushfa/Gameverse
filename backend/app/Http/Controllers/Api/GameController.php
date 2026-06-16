<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Game;

class GameController extends Controller
{
    public function index()
    {
        try {
            $games = Game::orderBy('id', 'asc')->get();
            return response()->json([
                'status' => 'success',
                'data' => $games
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch games',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
