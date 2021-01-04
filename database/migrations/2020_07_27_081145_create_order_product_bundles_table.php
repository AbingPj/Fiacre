<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderProductBundlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_product_bundles', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('ordered_bundle_id')->unsigned();
            $table->bigInteger('product_id')->unsigned();

            $table->integer('quantity')->default(1);

            // $table->double('price', 24, 2)->nullable();
            // $table->double('member_price', 24, 2)->nullable();
            // $table->double('wholesale_price', 24, 2)->nullable();

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
        Schema::dropIfExists('order_product_bundles');
    }
}
