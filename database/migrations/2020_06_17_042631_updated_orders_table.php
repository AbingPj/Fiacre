<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatedOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            // $table->double('discount_price', 24, 2)->default(0);
            $table->double('discount_percentage', 24, 2)->default(0);
            $table->double('delivery_fee', 24, 2)->default(0);
            $table->double('additional_charge', 24, 2)->nullable()->default(0);
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
            // $table->dropColumn('discount_price');
            $table->dropColumn('discount_percentage');
            $table->dropColumn('delivery_fee');
            $table->dropColumn('additional_charge');
        });
    }
}
