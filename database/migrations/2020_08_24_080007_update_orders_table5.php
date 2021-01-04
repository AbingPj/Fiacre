<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateOrdersTable5 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->boolean('has_coupon')->default(false);
            $table->double('coupon_discount_amount', 24, 2)->default(0);
            $table->boolean('coupon_is_percentage')->default(true);
            $table->bigInteger('coupon_id')->unsigned()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('has_coupon');
            $table->dropColumn('coupon_discount_amount');
            $table->dropColumn('coupon_is_percentage');
            $table->dropColumn('coupon_id');
        });
    }
}
