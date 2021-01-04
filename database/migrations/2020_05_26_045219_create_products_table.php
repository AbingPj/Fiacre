<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('sku')->unique();
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->double('price', 24, 2)->nullable();
            $table->double('discount_price', 24, 2)->nullable();
            $table->double('member_price', 24, 2)->nullable();
            $table->double('wholesale_price', 24, 2)->nullable();
            $table->text('tags')->nullable();
            $table->integer('is_visible')->default(1);
            $table->string('unit')->nullable();
            $table->integer('minorder')->nullable();
            $table->integer('maxorder')->nullable();
            $table->text('image_path')->nullable();
            $table->string('season')->nullable();
            $table->bigInteger('category_id')->unsigned()->nullable();
            $table->bigInteger('store_id')->unsigned()->nullable();
            $table->bigInteger('created_by')->unsigned()->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
