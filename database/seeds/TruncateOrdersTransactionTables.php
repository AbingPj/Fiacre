<?php

use App\Models\FiacreCustomerPaymentRecord;
use App\Models\Order;
use App\Models\OrderedProductWeek;
use App\Models\OrderProduct;
use App\Models\OrderProductBundle;
use App\Models\ProductSubscriptionOrdered;
use Illuminate\Database\Seeder;

class TruncateOrdersTransactionTables extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Order::truncate();
        OrderProduct::truncate();
        OrderProductBundle::truncate();
        OrderedProductWeek::truncate();
        FiacreCustomerPaymentRecord::truncate();
        ProductSubscriptionOrdered::truncate();
    }
}
