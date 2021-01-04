<?php

use App\Models\SubscriptionSunclubChoice;
use Illuminate\Database\Seeder;

class SunClubChoicesSeeder extends Seeder
{
    public function run()
    {

        SubscriptionSunclubChoice::truncate();

        $this->store([
            'id' => '1',
            'name' => 'Level 1',
            'price' => 1000,
            'discount' => 5,
            'membership_fee' => 5,
        ]);

        $this->store([
            'id' => '2',
            'name' => 'Level 2',
            'price' => 1500,
            'discount' => 8,
            'membership_fee' => 5,
        ]);

        $this->store([
            'id' => '3',
            'name' => 'Level 3',
            'price' => 2000,
            'discount' => 10,
            'membership_fee' => 5,
        ]);
    }
    private function store($data)
    {
        SubscriptionSunclubChoice::create($data);

        // $user = SubscriptionSunclubChoice::find($data['id']);

        // if (isset($user)) {
        //     $user->update($data);
        // } else {
        //     SubscriptionSunclubChoice::create($data);
        // }
    }
}
