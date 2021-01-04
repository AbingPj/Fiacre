<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoreLandingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('store_landings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('store_id')->unsigned();
            $table->string('title')->nullable();
            $table->text('header')->nullable();
            $table->text('content')->nullable();
            $table->text('content_2')->nullable();
            $table->boolean('content_2_is_hide')->default(true);
            $table->boolean('feature_products_is_random')->default(true);
            $table->text('feature_products_ids')->nullable();
            $table->text('logo')->nullable();
            $table->text('slider1')->nullable();
            $table->text('slider2')->nullable();
            $table->text('slider3')->nullable();
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
        Schema::dropIfExists('store_landings');
    }
}
