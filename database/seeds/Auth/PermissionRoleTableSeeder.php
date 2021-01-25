<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * Class PermissionRoleTableSeeder.
 */
class PermissionRoleTableSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seed.
     */
    public function run()
    {
        $this->disableForeignKeys();

        // Create Roles
        Role::create(['name' => config('access.users.admin_role')]);
        Role::create(['name' => config('access.users.default_role')]);
        Role::create(['name' => config('access.users.sunclub_user')]);
        Role::create(['name' => config('access.users.wholesale_user')]);
        $org_user_role = Role::create(['name' => config('access.users.org_user')]);
        Role::create(['name' => config('access.users.fiacre_customer_role')]);

        // Create Permissions
        Permission::create(['name' => 'view backend']);
        // Permission::create(['name' => 'view org backend']);

        // Assign Permissions to other Roles
        // Note: Admin (User 1) Has all permissions via a gate in the AuthServiceProvider
        // $user->givePermissionTo('view backend');

        $org_user_role->givePermissionTo('view backend');

        $this->enableForeignKeys();
    }
}
