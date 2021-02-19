<?php

use App\Models\Auth\User;
use App\Models\Organization;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class OrgsRochesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Organization::truncate();
        $json = File::get("database/data/rochester_organization.csv.json");
        $data = json_decode($json);
        foreach ($data as $obj) {
                $user = User::where('email',$obj->org_email)->first();
                if (isset($user)) {
                    $org = Organization::where('org_email',$obj->org_email)->first();
                    if(isset($org)){
                        $user->first_name = $obj->org_contact_fname;
                        $user->last_name =  $obj->org_contact_lname;
                        $user->save();
                        $org->user_id = $user->id;
                        $org->org_name = $obj->org_name;
                        $org->org_email = $user->email;
                        $org->org_optionc_id = $obj->org_optionc_id;
                        $org->org_type = $obj->org_type;
                        $org->org_lat = $obj->org_lat;
                        $org->org_lng = $obj->org_lng;
                        $org->org_state = $obj->org_state;
                        $org->org_cityprov = $obj->org_cityprov;
                        $org->org_street = $obj->org_street;
                        $org->org_zipcode = $obj->org_zipcode;
                        $org->org_contact_land = $obj->org_contact_land;
                        $org->org_contact_mobile = $obj->org_contact_mobile;
                        $org->org_contact_title = $obj->org_contact_title;
                        $org->org_contact_fname = $obj->org_contact_fname;
                        $org->org_contact_lname = $obj->org_contact_lname;
                        $org->org_contact_suffix = $obj->org_contact_suffix;
                        $org->org_contact_email= $obj->org_contact_email;
                        $org->org_diocese = $obj->org_diocese;
                        $org->org_website = $obj->org_website;
                        $org->save();
                    }
                } else {
                   $this->createOrganzation($obj);
                }
        }
    }

    public function createOrganzation($obj){
        $user =  User::create([
            'first_name' => $obj->org_contact_fname,
            'last_name' => $obj->org_contact_lname,
            'email' => $obj->org_email,
            'password' => 'secret@123',
            'confirmation_code' => md5(uniqid(mt_rand(), true)),
            'confirmed' => true,
            'is_billing_updated' => 1,
            'customer_role' => 0,
            'is_org' => 1,
        ]);
        $user->assignRole(config('access.users.org_user'));
        $data = new Organization;
        $data->user_id = $user->id;
        $data->org_name = $obj->org_name;
        $data->org_email = $user->email;
        $data->org_optionc_id = $obj->org_optionc_id;
        $data->org_type = $obj->org_type;
        $data->org_lat = $obj->org_lat;
        $data->org_lng = $obj->org_lng;
        $data->org_state = $obj->org_state;
        $data->org_cityprov = $obj->org_cityprov;
        $data->org_street = $obj->org_street;
        $data->org_zipcode = $obj->org_zipcode;
        $data->org_contact_land = $obj->org_contact_land;
        $data->org_contact_mobile = $obj->org_contact_mobile;
        $data->org_contact_title = $obj->org_contact_title;
        $data->org_contact_fname = $obj->org_contact_fname;
        $data->org_contact_lname = $obj->org_contact_lname;
        $data->org_contact_suffix = $obj->org_contact_suffix;
        $data->org_contact_email= $obj->org_contact_email;
        $data->org_diocese = $obj->org_diocese;
        $data->org_website = $obj->org_website;
        $data->save();

    }
}
