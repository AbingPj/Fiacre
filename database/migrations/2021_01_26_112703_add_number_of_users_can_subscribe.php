<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNumberOfUsersCanSubscribe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_subcriptions', function (Blueprint $table) {
            $table->integer('limit_of_subscription')->default(5)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_subcriptions', function (Blueprint $table) {
            $table->dropColumn('limit_of_subscription');
        });
    }
}
