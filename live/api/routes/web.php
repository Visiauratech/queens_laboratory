<?php

use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'app' => 'Queens Laboratory API',
        'status' => 'ok',
    ]);
});

/*
| Fallback contact routes for subdirectory hosting (/api as public entry).
| Primary route remains POST /api/contact via routes/api.php
*/
Route::post('/contact', [ContactController::class, 'store']);
Route::options('/contact', function () {
    return response()->noContent();
});
