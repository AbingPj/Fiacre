<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFiacreCustomerPaymentRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fiacre_customer_payment_records', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('order_id')->unsigned();
            $table->bigInteger('billing_infos_id')->unsigned();
            $table->string('CC_or_ACH'); /// CC or ACH
            $table->double('amount', 24, 2);  // the amount of subcsciption
            $table->string('Token')->nullable();
            $table->string('Token_SF')->nullable();
            $table->integer('TransRefID');
            $table->integer('FuzeID');
            $table->string('ApprovalCode');
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
        Schema::dropIfExists('fiacre_customer_payment_records');
    }
}
