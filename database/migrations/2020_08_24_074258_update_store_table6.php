<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateStoreTable6 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('stores', function (Blueprint $table) {
            $table->string('referral_coupon_name')->default('Refferal Coupon');
            $table->text('referral_coupon_desc')->nullable();
            $table->double('referral_coupon_discount_amount', 24, 2)->default(2);
            $table->boolean('referral_coupon_is_percentage')->default(true);
        });
    }

    /**
     * Reverse the migrations.

     * @return void
     */
    public function down()
    {
        Schema::table('stores', function (Blueprint $table) {
            $table->dropColumn('referral_coupon_name');
            $table->dropColumn('referral_coupon_desc');
            $table->dropColumn('referral_coupon_discount_amount');
            $table->dropColumn('referral_coupon_is_percentage');
        });
    }
}
