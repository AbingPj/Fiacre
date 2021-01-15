<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('org_name');
            $table->string('org_email')->unique(); // considers as login email acc.
            $table->bigInteger('org_optionc_id')->nullable(); // organizationalId/ParishId
            $table->bigInteger('org_type')->nullable(); // 1 - Parish, 2 -School
            $table->string('org_lat')->nullable();
            $table->string('org_lng')->nullable();
            $table->string('org_state')->nullable();
            $table->string('org_cityprov')->nullable();
            $table->string('org_street')->nullable();
            $table->string('org_zipcode')->nullable();
            $table->string('org_contact_land')->nullable();
            $table->string('org_contact_mobile')->nullable();
            $table->string('org_contact_title')->nullable();
            $table->string('org_contact_fname')->nullable();
            $table->string('org_contact_lname')->nullable();
            $table->string('org_contact_suffix')->nullable();
            $table->string('org_contact_email')->nullable();
            $table->string('org_diocese')->nullable();
            $table->text('org_website')->nullable();
            $table->text('org_logo')->nullable();
            $table->integer('org_status')->default(1);
            $table->boolean('org_is_active')->default(false);
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
        Schema::dropIfExists('organizations');
    }
}
