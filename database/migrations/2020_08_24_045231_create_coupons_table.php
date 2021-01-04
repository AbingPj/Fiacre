<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code')->unique();   // The voucher code
            $table->string('name'); // The human readable voucher code name
            $table->text('description')->nullable(); // The description of the voucher - Not necessary
            $table->double('discount_amount', 24, 2)->default(0); // The amount to discount by (in pennies) in this example.
            $table->boolean('is_percentage')->default(true); // Whether or not the voucher is a percentage or a fixed price.
            $table->timestamps();

            // // The number of uses currently
            // $table->integer('uses')->unsigned()->nullable();

            // // The max uses this voucher has
            // $table->integer('max_uses')->unsigned()->nullable();

            // // How many times a user can use this voucher.
            // $table->integer('max_uses_user')->unsigned()->nullable();

            // // When the voucher begins
            // $table->timestamp('starts_at');

            // // When the voucher ends
            // $table->timestamp('expires_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('coupons');
    }
}
