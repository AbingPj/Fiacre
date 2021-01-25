<?php

namespace App\Models\Auth\Traits\Method;

/**
 * Trait RoleMethod.
 */
trait RoleMethod
{
    /**
     * @return mixed
     */
    public function isAdmin()
    {
        return $this->name === config('access.users.admin_role');
    }

    public function isOrganization()
    {
        return $this->name === config('access.users.org_user');
    }
    public function isDefaultRole()
    {
        return $this->name === config('access.users.default_role');
    }
    public function isFiacreCustomerRole()
    {
        return $this->name === config('access.users.fiacre_customer_role');
    }
}
