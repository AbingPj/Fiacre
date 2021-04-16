<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrgRecurringSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('org_recurring_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('selected_delivery_day_schedule')->default('1')->nullable();
            $table->string('selected_pickup_day_schedule')->default('1')->nullable();
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
        Schema::dropIfExists('org_recurring_settings');
    }
}
