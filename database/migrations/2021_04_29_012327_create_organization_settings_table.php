<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('org_id');
            // $table->integer('selected_day_of_delivery')->default(1); // 1 - Monday, 2 - ,
            $table->integer('selected_day_of_pickup')->default(1); // 1 - Monday, 2 - ,
            // $table->double('delivery_fee_base_amount', 24, 2)->default(5);
            // $table->double('delivery_fee_base_distance', 24, 2)->default(1);
            // $table->double('delivery_fee_excess_amount', 24, 2)->default(0);
            // $table->boolean('delivery_fee_in_miles')->default(1);
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
        Schema::dropIfExists('organization_settings');
    }
}
