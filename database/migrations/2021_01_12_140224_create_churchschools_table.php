<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChurchschoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('churchschools', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('option_c_id')->unsigned()->nullable();
            $table->string('contact_number')->nullable();
            $table->string('street_address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zipcode')->nullable();
            $table->string('email1')->nullable();
            $table->string('email2')->nullable();
            $table->boolean('is_active')->default(false);
            $table->boolean('is_school')->default(false);
            $table->boolean('is_parish')->default(false);
            $table->string('school_type')->nullable();
            $table->bigInteger('school_OrganizationID')->unsigned()->nullable();
            $table->bigInteger('school_dioceseID')->unsigned()->nullable();
            $table->string('school_principle_first_name')->nullable();
            $table->string('school_principle_last_name')->nullable();
            $table->bigInteger('parish_ARCH_ID')->unsigned()->nullable();
            $table->bigInteger('parish_ParishID')->unsigned()->nullable();
            $table->string('parish_DioName')->nullable();
            $table->string('parish_title')->nullable();
            $table->string('parish_pre')->nullable();
            $table->string('parish_fr_first_name')->nullable();
            $table->string('parish_fr_last_name')->nullable();
            $table->string('parish_suf')->nullable();
            $table->string('parish_website')->nullable();
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
        Schema::dropIfExists('churchschools');
    }
}
