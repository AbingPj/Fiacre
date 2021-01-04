<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

/**
 * Class Kernel.
 */
class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('epawn:confiscate')
        //     ->dailyAt('00:01')
        //     ->timezone('Asia/Manila')
        //     ->appendOutputTo('epawn-confiscate.log');

        // $schedule->command('sunfarmacy:warning-expiration-email')
        //     ->dailyAt('00:01')
        //     ->appendOutputTo('epawn-confiscate.log');

        $schedule->command('sunfarmacy:warning-expiration-email')
            ->dailyAt('00:01')
            ->appendOutputTo('storage/logs/sunfarmacy-warning-expiration-email.log');;
    }

    /**
     * Register the commands for the application.
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
