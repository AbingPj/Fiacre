<?php

namespace App\Http\Composers;

use Illuminate\View\View;
use App\Models\Store;

/**
 * Class GlobalComposer.
 */
class GlobalComposer
{
    /**
     * Bind data to the view.
     *
     * @param View $view
     */
    public function compose(View $view)
    {
        $settings = Store::with('landing')->find(1);

        $view->with('logged_in_user', auth()->user());
        $view->with('store_settings', $settings);
    }
}
