<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSubscriptionSunclubMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('subscription_sunclub_members', function (Blueprint $table) {
            $table->bigInteger('current_sunclub_record_id')->unsigned()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('subscription_sunclub_members', function (Blueprint $table) {
            $table->dropColumn('current_sunclub_record_id');
        });
    }
}
