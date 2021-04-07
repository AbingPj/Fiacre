<?php

use App\Models\Auth\User;
use App\Models\ReferralCode;
use App\Models\ReferralCodeSubmitted;
use Illuminate\Database\Seeder;

class ReferralCodesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    // public $code = 0;

    public function run()
    {
        ReferralCodeSubmitted::truncate();
        ReferralCode::truncate();
        // $users = User::where('customer_role', '!=', '1')->where('customer_role', '!=', '0')->get();
        $users = User::where('is_fiacre_customer', 1)->get();

        foreach ($users as $key => $user) {
            if (!$this->userExists($user->id)) {
                $code = $this->generateRandomString(8);
                $reffercode = new ReferralCode;
                $reffercode->user_id = $user->id;
                $reffercode->code = 'F'.$user->id .'F'. $code;
                $reffercode->save();
            }
        }
    }

    function generateRandomString($length = 20)
    {
        $characters = '0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
        // $characters = '01';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        if ($this->codeExists($randomString)) {
            // dump($randomString);
            // $this->code = $this->code + 1;
            // $randomString = 'oye' . $this->code;
            return generateRandomString();
        }

        return $randomString;
    }

    function codeExists($code)
    {
        return ReferralCode::where('code','F'.$code)->exists();
    }

    function userExists($user_id)
    {
        return ReferralCode::where('user_id', $user_id)->exists();
    }
}
