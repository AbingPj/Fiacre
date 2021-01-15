<?php

use App\Models\Auth\User;
use Illuminate\Database\Seeder;

class AddAdminSeeder extends Seeder
{
    use DisableForeignKeys;

    public function run()
    {
        $this->disableForeignKeys();

        $user =  User::create([
            'first_name' => 'Fiacre',
            'last_name' => 'Admin',
            'email' => 'admin@fiacrefoods.com',
            'password' => 'password@secret',
            'confirmation_code' => md5(uniqid(mt_rand(), true)),
            'confirmed' => true,
            'is_billing_updated' => 1,
            'customer_role' => 0,
        ]);

        User::find($user->id)->assignRole(config('access.users.admin_role'));

        $this->enableForeignKeys();
    }
}
