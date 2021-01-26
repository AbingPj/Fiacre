<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateOrderProductsTable3 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('order_products', function (Blueprint $table) {
            $table->bigInteger('organization_id')->unsigned()->nullable();
            $table->boolean('is_subscription')->default(false)->nullable();
            $table->double('subscription_price', 24, 2)->default(0)->nullable();
            $table->integer('subscription_weeks')->default(0)->nullable();
            $table->string('subscription_day')->default('1')->nullable();
            $table->text('product_details')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('order_products', function (Blueprint $table) {
            $table->dropColumn('organization_id');
            $table->dropColumn('is_subscription');
            $table->dropColumn('subscription_price');
            $table->dropColumn('subscription_weeks');
            $table->dropColumn('subscription_day');
            $table->dropColumn('product_details');

        });
    }
}
