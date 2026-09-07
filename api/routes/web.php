<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'app' => 'Queens Laboratory Contact API',
        'status' => 'ok',
        'endpoint' => 'POST /contact',
    ]);
});
