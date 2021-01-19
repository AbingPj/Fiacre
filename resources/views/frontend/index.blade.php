@extends('frontend.layouts.landing')

@section('title', app_name())
@section('meta_description', 'Fiacre Foods is a new and innovative way for Catholic schools and parishes to raise substantial amounts of revenue by capitalizing on the everyday purchasing power of their families. Families simply sign up for grocery items through the Fiacre website that they already purchase on a regular basis at their local big box stores. Fiacre then shares the revenue with the schools and parishes.')
@section('meta')
    <meta property="og:title" content="Fiacre Foods" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('img/fiacre/fiacre.jpg') }}" />
    <meta property="og:image:alt" content="Fiacre Foods" />
    <meta property="og:description" content="Fiacre Foods is a new and innovative way for Catholic schools and parishes to raise substantial amounts of revenue by capitalizing on the everyday purchasing power of their families. Families simply sign up for grocery items through the Fiacre website that they already purchase on a regular basis at their local big box stores. Fiacre then shares the revenue with the schools and parishes." />
@endsection

@section('content')
    <div>
        <landing-page :store_settings="{{ json_encode($store_settings) }}"></landing-page>
    </div>
@endsection
