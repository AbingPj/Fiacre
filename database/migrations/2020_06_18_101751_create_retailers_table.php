<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRetailersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('retailers', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->string('email');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('street_address')->nullable();
            $table->string('zipcode')->nullable();


            $table->string('CC_or_ACH')->nullable();; /// CC or ACH
            $table->string('CardType')->nullable();
            $table->string('CardName')->nullable();
            $table->string('Last4')->nullable();
            $table->string('CVV')->nullable();

            // $table->string('Token')->nullable();
            // $table->string('Token_SF')->nullable();


            $table->string('ACHType')->nullable(); /// Values: 0= Checking, 1= Savings
            $table->string('ACHAccountHolderType')->nullable(); // 0=Personal, 1=Business


            $table->double('amount', 24, 2)->nullable();;  // the amount of payment

            $table->integer('TransRefID')->nullable();;
            $table->integer('FuzeID')->nullable();;
            $table->string('ApprovalCode')->nullable();;

            $table->double('ServiceFeeAmount', 24, 2)->nullable();
            $table->string('CVV_Response')->nullable();
            $table->string('AVS_Response')->nullable();


            $table->integer('status')->default(1);

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
        Schema::dropIfExists('retailers');
    }
}
