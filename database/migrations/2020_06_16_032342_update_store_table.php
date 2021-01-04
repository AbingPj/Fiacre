<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateStoreTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('stores', function (Blueprint $table) {
            $table->bigInteger('user_id')->unsigned()->nullable()->change();
            $table->string('name')->change();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('landing_header')->nullable();
            $table->text('landing_content')->nullable();
            $table->string('landing_about_header')->nullable();
            $table->text('landing_about_content')->nullable();
            $table->double('delivery_fee', 24, 2)->default(0);
            $table->double('wholesaler_discount', 24, 2)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('stores', function (Blueprint $table) {
            $table->dropColumn('email');
            $table->dropColumn('phone');
            $table->dropColumn('landing_header');
            $table->dropColumn('landing_content');
            $table->dropColumn('landing_about_header');
            $table->dropColumn('landing_about_content');
            $table->dropColumn('delivery_fee');
            $table->dropColumn('wholesaler_discount');
        });
    }
}
