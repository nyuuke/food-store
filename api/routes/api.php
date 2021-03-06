<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Delta\BrandController;
use App\Http\Controllers\Delta\CatalogController;
use App\Http\Controllers\Delta\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// catalog
Route::get('/catalog', [CatalogController::class, 'index']);
Route::post('/catalog', [CatalogController::class, 'store']);
Route::get('/catalog/{id}', [CatalogController::class, 'show']);
Route::patch('/catalog/{id}', [CatalogController::class,'update']);
Route::delete('/catalog/{id}', [CatalogController::class, 'destroy']);
Route::get('/catalog=first', [CatalogController::class, 'getOnlyCatalog']);

// brand
Route::get('/brand', [BrandController::class, 'index']);
Route::post('/brand', [BrandController::class, 'store']);
Route::get('/brand/{id}', [BrandController::class, 'show']);
Route::patch('/brand/{id}', [BrandController::class, 'update']);
Route::delete('/brand/{id}', [BrandController::class, 'destroy']);

// product
Route::get('/product', [ProductController::class, 'index']);
Route::post('/product', [ProductController::class, 'store']);
Route::get('product/{id}',[ProductController::class, 'show']);
Route::delete('/product/{id}', [ProductController::class, 'destroy']);