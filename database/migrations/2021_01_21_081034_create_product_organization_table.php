<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductOrganizationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_organization', function (Blueprint $table) {
            $table->bigIncrements('prodorg_id');
            $table->bigInteger('prodorg_product_id');
            $table->bigInteger('prodorg_organization_id');
            // $table->timestamps();
            $table->timestamp('prodorg_created_at', 0)->nullable();
            $table->timestamp('prodorg_updated_at', 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_organization');
    }
}
