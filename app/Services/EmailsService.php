<?php

namespace App\Services;

use App\Models\Product;
use App\Models\Store;
use App\Services\ImagePathService;
use Carbon\Carbon;
use App\Models\Auth\User;
use App\Models\City;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\ReferralCode;
use App\Models\Retailer;
use App\Models\State;
use stdClass;
use PDF;



class EmailsService
{


    public function __construct()
    {
        $this->beautymail = app()->make(\Snowfire\Beautymail\Beautymail::class);
        $store = Store::first();
        $this->storeName = $store->name;
        // $this->storeAddress = $store->street_address;
        $this->storeAddress = $store->full_address;
        // $this->storeLogo =  url('/' . $store->image_link);
        $this->storeLogo =  $store->landing->img_link_logo;
        $this->storeEmail = $store->email;
    }

    public function email_confirmation($user, $link)
    {
        $storeName = $this->storeName;

        $data = [
            'firstname' => $user->first_name,
            'store_logo' => $this->storeLogo,
            'store_name' => $storeName,
            'store_address' =>  $this->storeAddress,
            'link' => $link,
        ];

        $this->beautymail->send(
            'frontend.mail.confirmation_email',
            $data,
            function ($message) use ($user, $storeName) {
                $message
                    ->from('support@oheavenly.com')
                    ->to($user->email)
                    ->subject($storeName . ' Email Confirmation');
            }
        );
    }

    public function updateOrderConfirm(
        $user,
        $total_amount,
        $products,
        $order_date,
        $order_number,
        $discount_percentage,
        $delivery_fee
    ) {
        $date = new Carbon($order_date);
        $date_label =  $date->format('F, d, Y');

        $storeName = $this->storeName;
        $storeEmail = $this->storeEmail;

        // get discount
        $discount = $total_amount * ($discount_percentage /  100);

        // total amount - discounnt
        $overalltotal = $total_amount - $discount;

        // total amount + delivery fee
        $overalltotal = $overalltotal + $delivery_fee;


        $order = Order::findOrFail($order_number);

        $data = [
            'store_logo' => $this->storeLogo,
            'online_store_name' => $storeName,
            'online_store_address' =>  $this->storeAddress,
            'online_store_email' =>  $this->storeEmail,


            'total_amount' =>  number_format($total_amount, 2),
            'discount_percentage' =>  $discount_percentage,
            'discount' =>  number_format($discount, 2),
            'delivery_fee' =>  number_format($delivery_fee, 2),
            'overalltotal' =>  number_format($overalltotal, 2),

            'products' =>  $products,
            'order_number' =>  $order_number,
            'order_date' =>  $date_label,
            'customer_name' => $user->full_name,
            'order' => $order
        ];

        $this->beautymail->send(
            'frontend.mail.orderconfirmation_cutstomer',
            $data,
            function ($message) use ($user, $storeName,  $storeEmail, $order_number) {
                $message
                    ->from($storeEmail)
                    ->to($user->email)
                    ->subject($storeName . ': Order #' . $order_number . ' Confirmation');
            }
        );
    }

    public function orderReceipt(
        $user,
        $total_amount,
        $products,
        $order_date,
        $order_number,
        $discount_percentage,
        $delivery_fee
    ) {

        $date = new Carbon($order_date);
        $date_label =  $date->format('F, d, Y');

        $storeName = $this->storeName;
        $storeEmail = $this->storeEmail;

        // get discount
        $discount = $total_amount * ($discount_percentage /  100);

        // total amount - discounnt
        $overalltotal = $total_amount - $discount;

        // total amount + delivery fee
        $overalltotal = $overalltotal + $delivery_fee;



        // $pdf = PDF::loadView('emails.groupspayout.pdf', compact('groupPayout'))->setPaper('a6', 'portrait');
        $class = $this->order($order_number);
        $pdf = PDF::loadView(
            'backend.pdf.reports-orders-by-customers.pdf-order',
            compact('class')
        )->setPaper('a4', 'portrait');

        $order = Order::findOrFail($order_number);


        $data = [
            'store_logo' => $this->storeLogo,
            'online_store_name' => $storeName,
            'online_store_address' =>  $this->storeAddress,
            'online_store_email' =>  $this->storeEmail,


            'total_amount' =>  number_format($total_amount, 2),
            'discount_percentage' =>  $discount_percentage,
            'discount' =>  number_format($discount, 2),
            'delivery_fee' =>  number_format($delivery_fee, 2),
            'overalltotal' =>  number_format($overalltotal, 2),

            'products' =>  $products,
            'order_number' =>  $order_number,
            'order_date' =>  $date_label,
            'customer_name' => $user->full_name,

            'order' => $order
        ];

        $this->beautymail->send(
            'frontend.mail.order_receipt',
            $data,
            function ($message) use ($user, $storeName,  $storeEmail, $order_number, $pdf) {
                $message
                    ->from($storeEmail)
                    ->cc('leopoldo.a@ideahubsolutionsinc.com')
                    ->to($user->email)
                    ->subject($storeName . ': Order #' . $order_number . ' Confirmation')
                    ->attachData($pdf->output(), "orderReceipt.pdf");
            }
        );
    }

    public function orderReceipt2(
        $user,
        $total_amount,
        $overall_total_amount,
        $products,
        $order_date,
        $order_number,
        $billing_method_price,
        $billing_type
    ) {
        // dd($order_date);
        $date = new Carbon($order_date);
        $date_label =  $date->format('F, d, Y');

        $storeName = $this->storeName;
        $storeEmail = $this->storeEmail;

        $order = Order::findOrFail($order_number);

        // dump($billing_method_price);

        $data = [
            'store_logo' => $this->storeLogo,
            'online_store_name' => $storeName,
            'online_store_address' =>  $this->storeAddress,
            'online_store_email' =>  $this->storeEmail,

            'total_amount' =>  number_format($total_amount, 2),
            'overalltotal' =>  number_format($overall_total_amount, 2),

            'products' =>  $products,
            'order_number' =>  $order_number,
            'order_date' =>  $date_label,
            'customer_name' => $user->full_name,

            'billing_method_price' => $billing_method_price,
            'billing_type' => $billing_type,

            'order' => $order
        ];

        $this->beautymail->send(
            'frontend.mail.order_receipt2',
            $data,
            function ($message) use ($user, $storeName,  $storeEmail, $order_number) {
                $message
                    ->from($storeEmail)
                    ->to($user->email)
                    ->subject($storeName . ': Order #' . $order_number . ' Confirmation');
            }
        );
    }

    public function orderReceipt3(
        $user,
        $products,
        $order_number
    ) {

        $storeName = $this->storeName;
        $storeEmail = $this->storeEmail;

        $order = Order::findOrFail($order_number);

        $data = [
            'store_logo' => $this->storeLogo,
            'online_store_name' => $this->storeEmail,
            'online_store_address' =>  $this->storeAddress,
            'online_store_email' =>  $this->storeEmail,

            'total_amount' =>  $order->atr_subscription_total_amount_f,
            'overalltotal' =>  $order->atr_subscription_overall_total_amount_f,

            'products' =>  $products,
            'order_number' =>  $order_number,
            'order_date' =>  $order->atr_date_label2,
            'customer_name' => $user->full_name,

            // 'billing_method_price' => $billing_method_price,
            'billing_method_price' => $order->atr_billing_amount_f,
            'billing_type' => $order->billing_type,
            'order' => $order
        ];

        $this->beautymail->send(
            'frontend.mail.order_receipt3',
            $data,
            function ($message) use ($user, $storeName,  $storeEmail, $order_number) {
                $message
                    ->from($storeEmail)
                    ->to($user->email)
                    ->cc('support@oheavenly.com')
                    ->bcc('carllapp@yahoo.com')
                    ->subject($storeName . ': Order #' . $order_number . ' Confirmation');
            }
        );
    }

    public function sendExpirationWarning($user, $expiration_date)
    {


        $storeName = $this->storeName;
        $storeEmail = $this->storeEmail;

        $data = [
            'store_logo' => $this->storeLogo,
            'online_store_name' => $storeName,
            'online_store_address' =>  $this->storeAddress,
            'online_store_email' =>  $this->storeEmail,

            'customer_name' => $user->full_name,
            'expiration_date' => $expiration_date,
        ];

        $this->beautymail->send(
            'frontend.mail.expiration-warning',
            $data,
            function ($message) use ($user, $storeName,  $storeEmail) {
                $message
                    ->from($storeEmail)
                    ->to($user->email)
                    ->subject($storeName . ': Sunclub Membership Expirtaion');
            }
        );
    }


    public function test($date)
    {


        $storeName = $this->storeName;
        $storeEmail = $this->storeEmail;

        $data = [
            'store_logo' => $this->storeLogo,
            'online_store_name' => $storeName,
            'online_store_address' =>  $this->storeAddress,
            'online_store_email' =>  $this->storeEmail,

            'customer_name' => 'Abing leopolds',
            'expiration_date' => $date,
        ];

        $this->beautymail->send(
            'frontend.mail.expiration-warning',
            $data,
            function ($message) use ($storeName,  $storeEmail) {
                $message
                    ->from($storeEmail)
                    ->to('abing.pj@gmail.com')
                    ->subject($storeName . ': Sunclub Membership Expirtaion');
            }
        );
    }


    public function order($order_id)
    {
        $order = Order::findOrFail($order_id);

        $date = new Carbon($order->date);
        $order->date_label =  $date->format('m/d/Y');

        $user = User::find($order->order_by);

        if ($order->order_by == 0) {
            $user = Retailer::find($order->retailer_id);
            $user->image_path = "/img/no-user.jpg";

            // dd($user);
            // $city = City::find($user->city)->name;
            $state = State::find($user->state)->name;
            // $user->city = $city;
            $user->state = $state;
        } else {
            $user = User::find($order->order_by);
            // $city = City::find($user->city)->name;
            $state = State::find($user->state)->name;
            // $user->city = $city;
            $user->state = $state;
        }

        $ordered_products = OrderProduct::where('order_id', $order->id)->with('product')->get();
        $products = $ordered_products;
        $totalamount = 0;
        foreach ($products as $key => $value) {
            // $value->image_link = public_path('storage/' . ImagePathService::setPath($value->product->image_path));
            if (!empty($value->product->image_path)) {
                $value->image_link = public_path('storage/' . ImagePathService::setPath($value->product->image_path));
            } else {
                $value->image_link  = $value->is_bundle == 1 ? public_path('img/bundle.png') : public_path('img/no-product-image.png');
            }

            $subtotal = $value->updated_quantity * $value->price;
            $value->subtotal = number_format($subtotal, 2);
            $totalamount = $totalamount + $subtotal;
        }


        $class = new stdClass;
        $class->products = $products;
        $class->user = $user;
        $class->order = $order;
        $class->totalamount = number_format($totalamount, 2);
        $class->printed = Carbon::now()->format('F d, Y');

        return $class;
    }


    public function sendEmailCustomer($email, $subject, $content)
    {
        $storeName = $this->storeName;

        $data = [
            'store_logo' => $this->storeLogo,
            'store_name' => $storeName,
            'store_address' =>  $this->storeAddress,
            'content' => $content
        ];

        $this->beautymail->send(
            'frontend.mail.send_email_customer',
            $data,
            function ($message) use ($email, $storeName, $subject) {
                $message
                    ->from('publicrelations@optionc.com')
                    ->to($email)
                    ->subject($storeName . ': ' . $subject);
            }
        );
    }

    public function sendInvite($email, $name = null)
    {

        $user = auth()->user();
        $referral_code = ReferralCode::where('user_id', $user->id)->first();
        $code = null;
        if (!empty($referral_code)) {
            $code = $referral_code->code;
        }


        $storeName = $this->storeName;

        $link = url('/register');

        $data = [
            'store_logo' => $this->storeLogo,
            'store_name' => $storeName,
            'store_address' =>  $this->storeAddress,
            'name' => $name,
            'user_name' => $user->full_name,
            'code' => $code,
            'link' => $link,
        ];

        $this->beautymail->send(
            'frontend.mail.send-invite',
            $data,
            function ($message) use ($email, $storeName) {
                $message
                    ->from('publicrelations@optionc.com')
                    ->to($email)
                    ->subject($storeName . ': Referral Email');
            }
        );
    }


    public function sendPromotion($email, $customer, $subject, $content, $products)
    {
        $link = url('/products');


        $first_name = $customer->first_neme;

        $data = [
            'store_logo' => $this->storeLogo,
            'store_name' =>  $this->storeName,
            'store_address' =>  $this->storeAddress,
            'customer' =>  $customer,
            'content' =>  $content,
            'products' =>  $products,
            'link' =>  $link,
            'link' =>  $link,
            'first_name' => $first_name
        ];



        $this->beautymail->send(
            'frontend.mail.promotions',
            $data,
            function ($message) use ($email, $subject) {
                $message
                    ->from('publicrelations@optionc.com')
                    ->to($email)
                    ->subject($subject);
            }
        );
    }
}
