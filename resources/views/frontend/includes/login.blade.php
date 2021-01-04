<!-- Modal -->
<div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="modalLogin" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="modalLogin">Sign In</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">



            {{ html()->form('POST', route('frontend.auth.login.post'))->id('login')->open() }}
                <div class="row">
                    <div class="col">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" style="background-color: none;">
                                    <i class="fas fa-envelope fa-fw"></i>
                                </span>
                            </div>

                            {{ html()->email('email')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.frontend.email'))
                                ->attribute('maxlength', 191)
                                ->required() }}
                        </div><!--form-group-->
                    </div><!--col-->
                </div><!--row-->

                <div class="row">
                    <div class="col">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" style="background-color: none;">
                                    <i class="fas fa-lock fa-fw"></i>
                                </span>
                            </div>

                            {{ html()->password('password')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.frontend.password'))
                                ->required() }}
                        </div><!--form-group-->
                    </div><!--col-->
                </div><!--row-->

                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="checkbox">
                                {{ html()->label(html()->checkbox('remember', true, 1) . ' ' . __('labels.frontend.auth.remember_me'))->for('remember') }}
                            </div>
                        </div><!--form-group-->
                    </div><!--col-->
                    <div class="col">
                        <div class="form-group text-right">
                            <a href="{{ route('frontend.auth.password.reset') }}">@lang('labels.frontend.passwords.forgot_password')</a>
                        </div><!--form-group-->
                    </div><!--col-->
                </div><!--row-->


                @if ($errors->has('email'))
                    @if($errors->first('email') != 'The email has already been taken.')
                        <div class="row">
                            <div class="col">
                                <div class="text-center text-danger">
                                    <h6>{{$errors->first('email')}}</h6>
                                </div>
                            </div>
                        </div>
                    @endif
                 @endif

                <div class="row">
                    <div class="col">
                        <div class="form-group clearfix">
                            @if(config('access.captcha.login'))
                              <button type="submit" class="btn btn-success btn-block">SIGN IN</button>
                            @else
                              <button id="loginSubmit" type="submit" class="btn btn-success btn-block">SIGN IN</button>
                            @endif
                        </div><!--form-group-->
                        <p class="text-center">Or</p>
                        <div class="form-group clearfix">
                            <a href="{{route('frontend.auth.register')}}" class="btn btn-info btn-block text-white">SIGN UP</a>
                        </div><!--form-group-->
                    </div><!--col-->
                </div><!--row-->

                @if(config('access.captcha.login'))
                    <div class="row">
                        <div class="col">
                            @captchaHTML
                            {{-- @captcha --}}
                            {{ html()->hidden('captcha_status', 'true') }}
                        </div><!--col-->
                    </div><!--row-->
                @endif

            {{ html()->form()->close() }}
        </div>
    </div>
  </div>
</div>



@push('after-scripts')
 <script>

    document.getElementById("loginSubmit").onclick = function(){
        LoadingOverlay();
        var form = document.getElementById("login");
        if (form.checkValidity()) {
            console.log("valid");
        } else {
            console.log("not valid");
            LoadingOverlayHide();
        }
    };
</script>

    @if($errors->has('email'))
        @if($errors->first('email') != 'The email has already been taken.')
            <script>
            $(function() {
                $('#modalLogin').modal({
                    show: true
                });
            });
            </script>
         @endif
    @endif

@endpush





