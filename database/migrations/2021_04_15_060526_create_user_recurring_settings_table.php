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
            $table->bigInteger('org_id')->nullable();
            $table->integer('is_pickup')->default(1);
            $table->integer('stop_recurring')->default(0); // 1 stop, 0 not stop
            $table->integer('selected_schedule')->default(1); // 1 - every week, 2 - every 2 weeks,
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
