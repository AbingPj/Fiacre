@extends('frontend.layouts.app')

@section('title', app_name() . ' | Checkout Page')

@section('content')
    {{-- <h1>Products</h1> --}}

    <div class="container mt-5 mb-5">

        <h4>Placing Order:</h4>
        {{-- products.placeorder.guest
        /placeorder/guest --}}

        <form id="guestPlaceOrderForm" action="/placeorder/guest" method="post" enctype="multipart/form-data" >
            {{ csrf_field() }}


                @if(config('access.captcha.guestorder'))
                        <div class="row">
                            <div class="col">
                                    @captchaHTML
                                    {{ html()->hidden('captcha_status', 'true') }}
                            </div>
                        </div>
                @endif


            <div class="row">
            <div class="col-md-12" style=" border: 2px solid lightgray !important; min-height: 500px;">

                <div class="row mt-3">
                    <div class="col-md-4"></div>
                    <div class="col-md-8">
                         @if(Session::has('update_status'))
                            <div class="alert alert-danger" role="alert">
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="alert"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                {{ Session::get('update_status') }}
                            </div>
                         @endif
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <checkout-page-billing-info
                        delivery_fee="{{ $delivery_fee }}"
                        :pickup="{{ $pickup }}"
                        :propproducts="{{json_encode($products)}}"
                        :propscities="{{json_encode($cities)}}"
                        :propsstates="{{json_encode($states)}}"
                        ></checkout-page-billing-info-page>
                    </div>
                </div>


                    <div class="row">
                        <div class="col-md-12">
                            <div class="p-5 text-right">
                                {{-- <button id="guestsubmitplaceorder" onclick="LoadingOverlay()" type="submit" class="btn btn-success">Submit & Place Order</button> --}}
                                <button id="guestsubmitplaceorder" type="submit" class="btn btn-success ld-over">
                                {{-- <button id="guestsubmitplaceorder" type="submit" class="btn btn-success ld-ext-right running"> --}}
                                    Submit & Place Order
                                    {{-- <div class="ld ld-ball ld-broadcast"></div> --}}
                                    <div class="text-danger ld ld-hourglass ld-spin"></div>
                                </button>
                            </div>
                        </div>
                    </div>

            </div>


            </div>
        </form>

      </div>




@endsection


{{-- @push('after-scripts')
    <script>
        _beforeSubmit = function(e) {
            console.log('submit button clicked.');
            // do other things before captcha validation
            // e represents reference to original form submit event
            // return true if you want to continue triggering captcha validation, otherwise return false
            return false;
        }
    </script>
@endpush --}}
