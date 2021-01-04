<?php

namespace App\Http\Controllers\Frontend\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\User\UpdatePasswordRequest;
use App\Repositories\Frontend\Auth\UserRepository;
use App\Models\Auth\User;
use App\Events\Frontend\Auth\UserLoggedIn;
use Illuminate\Support\Facades\Auth;

/**
 * Class UpdatePasswordController.
 */
class UpdatePasswordController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * ChangePasswordController constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param UpdatePasswordRequest $request
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function update(UpdatePasswordRequest $request)
    {
        $user = User::find(auth()->id());

        $this->userRepository->updatePassword($request->only('old_password', 'password'));

        // event(new UserLoggedIn($user));
        auth()->login($user);

        // return redirect()->route('/account')->withFlashSuccess(__('strings.frontend.user.password_updated'));
        return redirect()->back()->withFlashSuccess(__('strings.frontend.user.password_updated'));
    }
}
