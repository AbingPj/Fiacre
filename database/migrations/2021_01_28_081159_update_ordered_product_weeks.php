<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateOrderedProductWeeks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ordered_product_weeks', function (Blueprint $table) {
            $table->dateTime('actual_pickup_day')->nullable();
            $table->string('pick_up_by')->nullable();
            $table->bigInteger('product_subscription_ordered_id')->unsigned()->nullable();
            $table->bigInteger('order_id')->unsigned()->change();
            $table->bigInteger('order_product_id')->unsigned()->change();
            $table->bigInteger('organization_id')->unsigned()->change();
            $table->bigInteger('order_by')->unsigned()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ordered_product_weeks', function (Blueprint $table) {
            $table->dropColumn('actual_pickup_day');
            $table->dropColumn('pick_up_by');
            $table->dropColumn('product_subscription_ordered_id');
        });
    }
}
