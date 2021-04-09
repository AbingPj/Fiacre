<?php

namespace App\Http\Controllers\Frontend\Auth;

use App\Events\Frontend\Auth\UserRegistered;
use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\Auth\RegisterRequest;
use App\Models\ReferralCode;
use App\Repositories\Frontend\Auth\UserRepository;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\DB;

/**
 * Class RegisterController.
 */
class RegisterController extends Controller
{
    use RegistersUsers;

    /**
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * RegisterController constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Where to redirect users after login.
     *
     * @return string
     */
    public function redirectPath()
    {
        return route(home_route());
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm()
    {
        abort_unless(config('access.registration'), 404);
        \App\Services\TotalViewService::getView("Sgn Up");

        return view('frontend.auth.register');
    }

    public function showRegistrationFormWithCode($code)
    {
        abort_unless(config('access.registration'), 404);
        \App\Services\TotalViewService::getView("Sgn Up");
        $referral_code = $code;
        $referral_code_is_valid = 0;
        if(ReferralCode::where(DB::raw('BINARY `code`'), $referral_code)->exists()){
            // dump("Is Valid");
            $referral_code_is_valid = 1;
        };
        // dd($referral_code_is_valid);
        return view('frontend.auth.register-with-referral-code',compact('referral_code','referral_code_is_valid'));
    }

    /**
     * @param RegisterRequest $request
     *
     * @throws \Throwable
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(RegisterRequest $request)
    {
        abort_unless(config('access.registration'), 404);
        // dd($request);
        // $user = $this->userRepository->create($request->only('first_name', 'last_name', 'email', 'password', 'contact_number', 'contact_number_type'));

        $user = $this->userRepository->create($request->only('first_name', 'last_name', 'email', 'password', 'contact_number', 'contact_number_type', 'referral_code'));

        // If the user must confirm their email or their account requires approval,
        // create the account but don't log them in.
        if (config('access.users.confirm_email')) {
            event(new UserRegistered($user));

            // return redirectPath('/register/success');
            return redirect()->guest('/register/success');

            // return redirect($this->redirectPath())->withFlashSuccess(
            //     config('access.users.requires_approval') ?
            //         __('exceptions.frontend.auth.confirmation.created_pending') :
            //         __('exceptions.frontend.auth.confirmation.created_confirm')
            // );
        }

        auth()->login($user);

        event(new UserRegistered($user));

        return redirect($this->redirectPath());
    }
}
