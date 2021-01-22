<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductSubcriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_subcriptions', function (Blueprint $table) {
            $table->bigIncrements('prodsub_id');
            $table->bigInteger('prodsub_product_id');
            $table->bigInteger('prodsub_organization_id');
            $table->dateTime('prodsub_start_date')->nullable();
            $table->dateTime('prodsub_end_date')->nullable();
            $table->integer('prodsub_numberOfweeks')->nullable();
            $table->timestamp('prodsub_created_at', 0)->nullable();
            $table->timestamp('prodsub_updated_at', 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_subcriptions');
    }
}
