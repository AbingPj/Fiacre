<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionSunclubAdditionalChargesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscription_sunclub_additional_charges', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('user_id')->unsigned();

            $table->string('CC_or_ACH'); /// CC or ACH
            $table->double('amount', 24, 2); // the amount of subcsciption

            $table->string('Token')->nullable();

            $table->integer('TransRefID');
            $table->integer('FuzeID');
            $table->string('ApprovalCode');

            $table->double('ServiceFeeAmount', 24, 2)->nullable();
            $table->string('CVV_Response')->nullable();
            $table->string('AVS_Response')->nullable();

            // $table->bigInteger('subscription_sunclub_choice_id')->unsigned()->nullable();
            $table->bigInteger('subscription_sunclub_member_id')->unsigned()->nullable();
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
        Schema::dropIfExists('subscription_sunclub_additional_charges');
    }
}
