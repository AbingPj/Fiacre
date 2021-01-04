@extends('frontend.layouts.app')

@section('title', app_name())

@section('content')
<div class="row justify-content-center align-items-center">
    <div class="col col-sm-8 align-self-center">
        <div class="card">
            <div class="card-header">
                <strong>
                    @lang('labels.frontend.auth.register_box_title')
                </strong>
            </div><!--card-header-->

            <div class="card-body">


                <form action="/submitfisnishsignup" method="post" enctype="multipart/form-data" >
                    {{ csrf_field() }}

                    {{-- <input type="text" name="email" placeholder="email">
                    <input type="password" name="password" placeholder="password">
                    <input type="text" name="first_name" placeholder="first_name">
                    <input type="text" name="last_name" placeholder="last_name">
                    <input type="text" name="contact_number" placeholder="contact_number"> --}}
                    <br>
                    <br>
                    user image
                    <input type="file" name="image_file" placeholder="image_file">
                    <input type="text" name="street_address" placeholder="street_address">
                    <input type="number" name="state" placeholder="state">
                    <input type="number" name="city" placeholder="city">
                    <input type="text" name="zipcode" placeholder="zipcode">

                    <br>
                    <h3>Billing information</h3>
                    <label for="">1 - CC or 2 - ACH</label>
                    <input type="text" name="billing_token_type" placeholder="billing_token_type">
                    <br>
                    <h6>IF CC </h6>
                    <label for="">Values: 1=American Express, 2=Discover, 3= MasterCard, 4=Visa</label>
                    <br>
                    <input type="text" name="card_type" placeholder="card_type">
                    <br>
                    <br>
                    <input type="text" name="card_number" placeholder="card_number">
                    <input type="text" name="exp_month" placeholder="exp_month">
                    <input type="text" name="exp_year" placeholder="exp_year">
                    <br>
                    <h6>IF ACH</h6>
                    <label for=""> 1 - savings and 0 - Checking</label>
                    <input type="text" name="ach_type" placeholder="ach_type">
                    <br>
                    <label for=""> 0=Personal, 1=Business</label>
                    <input type="text" name="ach_acc_holder_type" placeholder="ach_acc_holder_type">
                    <br>
                    <input type="text" name="ach_account_number" placeholder="ach_account_number">
                    <input type="text" name="ach_routing" placeholder="ach_routing">
                    <br>
                    <br>
                    <br>
                    <h3>Subcription </h3>

                    <label for=""> 1 - Sun Club, 2 - WholeSaler</label><input type="text" name="subscription" placeholder="subscription">

                    <br>
                    <br>
                    <h4>Sun Club</h4>
                    <label for=""> 1 - 1000, 2 - 1500, 3 - 2000</label><input type="text" name="subscription_sunclub_choice_id" placeholder="subscription_sunclub_choice_id">
                    <br>
                    <br>
                    <br>
                    <br>
                    <h4>WholeSaler</h4>
                    <input type="text" name="business_designation" placeholder="business_designation">
                    <input type="text" name="business_name" placeholder="business_name">
                    <input type="text" name="business_street_address" placeholder="business_street_address">
                    <input type="number" name="business_city" placeholder="business_city">
                    <input type="number" name="business_state" placeholder="business_state">
                    <input type="text" name="business_zipcode" placeholder="business_zipcode">

                    <input type="file" name="business_image_file" placeholder="business_image_file">
                    <br>
                    <br>
                    <br>
                    <br>
                    <input type="submit" value="submit">
                </form>

            </div><!-- card-body -->
        </div><!-- card -->
    </div><!-- col-md-8 -->
</div><!-- row -->

@endsection
