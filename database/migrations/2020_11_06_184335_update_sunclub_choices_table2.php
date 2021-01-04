<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSunclubChoicesTable2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('subscription_sunclub_choices', function (Blueprint $table) {
            $table->double('membership_fee', 24, 2)->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('subscription_sunclub_choices', function (Blueprint $table) {
            $table->dropColumn('membership_fee');
        });
    }
}
