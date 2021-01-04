<?php

use Illuminate\Database\Seeder;
use App\Models\Store;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Store::truncate();
        $this->store([
            'id' => 1,
            'user_id' => 1,
            'name' => "Sunfarmacy",
            'description' => "",
            'street_address' => "SUN FARMACY, 128 N. Wilmarth Road",
            'city' => "Pittsford",
            'state' => 1452,
            'zipcode' => "14534",
            'image_path' => "img/sunfarmacy/finallogo3.2x.png",
            'email' => "support@sunfarmacy.com",
            'phone' => "(585) 510-7100",
            'landing_header' => "Ultra-fresh, Locally Grown Produce",
            'landing_content' => "SunFarmacy is committed to making farming sustainable for both farm workers and consumers. So, we invite you to be a part of the food cycle that cares for people and the environment as SunFarmacy opens its membership for people who follow such high values. From farm to your table, let’s keep it local and grow better together!",
            'landing_about_header' => "Welcome to SunFarmacy!",
            'landing_about_content1' => "SunFarmacy is a community-supported agriculture mobile application owned and operated by High View Farms, providing a fast, easy and convenient way to connect farmers to consumers who want to keep it local.",
            'landing_about_content2' => "We are a team of modern farmers who work together to find ways to improve supply and eat sustainable. We grow our food using safe practices such as natural and organic farming which nurtures the quality of the soil with each crop.",
            'delivery_fee' => 5,
            'wholesaler_discount' => 15,
            'status' => 1,
            'wholesaler_minimum_order_amount' => 1000,
            'expected_delivery_days' => 7,
            'referral_coupon_name' => 'Refferal Coupon',
            'referral_coupon_desc' => '2% discount of total order amount',
            'referral_coupon_discount_amount' => 2,
            'referral_coupon_is_percentage' => 1,
            'wholesaler_signup_is_hide' => 1,
        ]);
    }

    private function store($data)
    {
        $storeObject = Store::find($data['id']);

        if (isset($storeObject)) {
            $storeObject->update($data);
        } else {
            Store::create($data);
        }
    }
}
