<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRecurringSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_recurring_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->bigInteger('org_id');
            $table->integer('is_pickup')->default(1);
            $table->integer('stop_recurring')->default(0); // 1 stop, 0 not stop
            $table->integer('selected_every_week_schedule')->default(1); // 1 - every week, 2 - every 2 weeks,
            $table->integer('selected_day_of_week')->default(1); // 1 - Monday, 2 - ,
            $table->dateTime('incoming_date')->nullable();
            $table->dateTime('last_date')->nullable();
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
        Schema::dropIfExists('user_recurring_settings');
    }
}
