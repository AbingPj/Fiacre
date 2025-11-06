<?php

use App\Models\Auth\User;
use Illuminate\Database\Seeder;

/**
 * Class UserTableSeeder.
 */
class UserTableSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seed.
     */
    public function run()
    {
        $this->disableForeignKeys();

        // Add the master administrator, user id of 1
        User::create([
            'first_name' => 'Fiacre Foods',
            'last_name' => 'Admin',
            'email' => 'support@sunfarmacy.com',
            'password' => '$unF@rmacy@2020',
            'confirmation_code' => md5(uniqid(mt_rand(), true)),
            'confirmed' => true,
            'is_billing_updated' => 1,
            'customer_role' => 0,
        ]);

        User::create([
            'first_name' => 'Sunfarmacy',
            'last_name' => 'Tester',
            'email' => 'pj.abing@gmail.com',
            'password' => 'secret123',
            'confirmation_code' => md5(uniqid(mt_rand(), true)),
            'confirmed' => true,
        ]);

        User::create([
            'first_name' => 'Fiacre Foods',
            'last_name' => 'Admin 2',
            'email' => 'support@fiacre.com',
            'password' => 'F!@cre@2021',
            'confirmation_code' => md5(uniqid(mt_rand(), true)),
            'confirmed' => true,
            'is_billing_updated' => 1,
            'customer_role' => 0,
        ]);

        User::create([
            'first_name' => 'Fiacre Foods',
            'last_name' => 'Admin 3',
            'email' => 'admin@admin.com',
            'password' => 'admin_123',
            'confirmation_code' => md5(uniqid(mt_rand(), true)),
            'confirmed' => true,
            'is_billing_updated' => 1,
            'customer_role' => 0,
        ]);

        $this->enableForeignKeys();
    }
}
