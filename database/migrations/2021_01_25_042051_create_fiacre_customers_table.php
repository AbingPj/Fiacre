<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFiacreCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fiacre_customers', function (Blueprint $table) {
            $table->bigIncrements('fc_id');
            $table->bigInteger('fc_user_id');
            $table->bigInteger('fc_selected_organization')->nullable();
            // $table->string('fc_state')->nullable();
            // $table->string('fc_cityprov')->nullable();
            // $table->string('fc_street')->nullable();
            // $table->string('fc_zipcode')->nullable();
            // $table->string('fc_contact_number')->nullable();
            // $table->string('fc_contact_number_type')->nullable();
            $table->timestamp('fc_created_at', 0)->nullable();
            $table->timestamp('fc_updated_at', 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fiacre_customers');
    }
}
