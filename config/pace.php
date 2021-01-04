<?php

return [
    // Application captcha specific settings
    'access' => [
        // Whether the registration captcha is on or off
        'account_id' => env('PACEFUZE_ACC'),
        'public_key' => env('PACEFUZE_PUBLIC_KEY'),
        'private_key' => env('PACEFUZE_PRIVATE_KEY'),
        'url' => env('PACEFUZE_URL'),
        'insight_tag' => env('PACEFUZE_INSIGHT_TAG'),
    ],
];
