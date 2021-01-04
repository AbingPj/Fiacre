<?php

use App\Models\BillingInfo;
use App\Models\ChatMessage;
use App\Models\Coupon;
use App\Models\CouponUser;
use App\Models\DeliveryZone;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\OrderProductBundle;
use App\Models\PickupZone;
use App\Models\ProductBundle;
use App\Models\ProductSubCategory;
use App\Models\PromotionsLogs;
use App\Models\Retailer;
use App\Models\SubscriptionSunclubAdditionalCharge;
use App\Models\SubscriptionSunclubFailRenew;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use App\Models\SubscriptionWholesaleMember;
use App\Models\SubscriptionWholesaleRecord;
use App\Models\TotalView;
use App\ProductInStock;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Seed the application's database.
     */
    public function run()
    {
        Model::unguard();

        $this->truncateMultiple([
            'cache',
            'failed_jobs',
            'ledgers',
            'jobs',
            'sessions',
        ]);

        $this->call(AuthTableSeeder::class);

        Model::reguard();

        // StoreAboutus::truncate();
        BillingInfo::truncate();
        ChatMessage::truncate();
        Coupon::truncate();
        CouponUser::truncate();
        DeliveryZone::truncate();
        Order::truncate();
        OrderProduct::truncate();
        OrderProductBundle::truncate();
        PickupZone::truncate();
        // ProductBundle::truncate();
        ProductInStock::truncate();
        // ProductSubCategory::truncate();
        PromotionsLogs::truncate();
        Retailer::truncate();
        SubscriptionSunclubAdditionalCharge::truncate();
        SubscriptionSunclubFailRenew::truncate();
        SubscriptionSunclubMember::truncate();
        SubscriptionSunclubRecord::truncate();
        SubscriptionWholesaleMember::truncate();
        SubscriptionWholesaleRecord::truncate();
        TotalView::truncate();


        $this->call(CitiesSeeder::class);
        $this->call(StatesSeeder::class);
        $this->call(SunClubChoicesSeeder::class);
        // $this->call(ProductCategoriesSeeder::class);
        // $this->call(ProductsSeeder::class);
        $this->call(StoreSeeder::class);


        $this->call(ReferralCodesSeeder::class);
        $this->call(ContentsSeeder::class);
    }
}
