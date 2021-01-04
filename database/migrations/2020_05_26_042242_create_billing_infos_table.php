<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillingInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('billing_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            // $table->bigInteger('user_id')->unsigned()->unique();
            $table->bigInteger('user_id')->unsigned();
            $table->string('bankName_or_cardName')->nullable();
            // $table->integer('billing_token_type')->nullable(); // 1 for CC and 2 for ACH
            $table->string('CC_or_ACH'); /// CC or ACH
            $table->string('Token');
            $table->string('Token_SF')->nullable();
            $table->string('CVV')->nullable();
            $table->string('CVV_Response')->nullable();
            $table->string('CardType')->nullable();
            $table->string('Last4')->nullable();
            $table->string('ACHType')->nullable(); /// Values: 0= Checking, 1= Savings
            $table->string('ACHAccountHolderType')->nullable(); // 0=Personal, 1=Business
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
        Schema::dropIfExists('billing_infos');
    }
}
