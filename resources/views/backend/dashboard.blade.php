@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))

@section('content')
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    Dashboard
                </div><!--card-header-->
                <div class="card-body">


                    {{-- {!! __('strings.backend.welcome') !!} --}}
                    {{-- 'totalviews','productssold','totalearnings' --}}
                    {{-- :totalviews="{{json_encode($totalviews)}}" --}}


                    <admin-dashboard-page
                        :productssold="{{json_encode($total_product_sold)}}"
                        :totalearnings="{{json_encode($total_earnings)}}"
                        :products="{{json_encode($products)}}"
                        {{-- :topfive_products="{{json_encode($topfive_products)}}" --}}
                        low="{{$low}}"
                        out="{{$out}}"
                        :months_labels="{{json_encode($months_labels)}}"
                        :total_product_sold_per_month="{{json_encode($total_product_sold_per_month)}}"
                        :total_views_per_month="{{json_encode($total_views_per_month)}}"
                        from="{{$fromLabel}}"
                        to="{{$toLabel}}"
                        :views="{{$views}}"
                        newmembers="{{$newmembers}}"
                        :prev_total_product_sold="{{$prev_total_product_sold}}"
                        :prev_total_earnings="{{$prev_total_earnings}}"
                        :prev_views="{{$prev_views}}"
                        :total_orders="{{$total_orders}}"
                    ></admin-dashboard-page>

                </div><!--card-body-->
            </div><!--card-->
        </div><!--col-->
    </div><!--row-->
@endsection
