<?php

namespace App\Services;

use App\Models\User;
use App\Services\ImagePathService;
use Illuminate\Support\Facades\Hash;


class PaceFuzePaymentApiService
{
    private  $fuzeAccountID_Sunfarmacy =  "";
    private  $PublicKey = "";
    private  $PrivateKey = "";
    private  $base_url = "";
    private  $InsightTag = "";

    public function __construct()
    {
        $this->fuzeAccountID_Sunfarmacy = config('pace.access.account_id');
        $this->PublicKey = config('pace.access.public_key');
        $this->PrivateKey = config('pace.access.private_key');
        $this->base_url = config('pace.access.url');
        $this->InsightTag = "T0250605-0010000-00000000";
    }

    public function CreateCCToken($data)
    {

        if (isset($data)) {
            $data['Fuze_Account_ID'] = $this->fuzeAccountID_Sunfarmacy;
            $data['Fuze_PUBLIC_API_Key'] = $this->PublicKey;
            $payload = json_encode($data);
            $ch = curl_init($this->base_url . '/CreateCCToken');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLINFO_HEADER_OUT, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
            curl_setopt(
                $ch,
                CURLOPT_HTTPHEADER,
                array(
                    'Content-Type: application/json',
                    'Accept: application/json',
                )
            );

            $response_data = curl_exec($ch);
            // dd(curl_getinfo($ch));
            curl_close($ch);
            return $response_data;
        }
    }

    public function ProcessCCTokenSale($card_type, $token, $amount, $cvv = null, $tag, $email = null, $tokenSf)
    {
        $data = array(
            'Fuze_Account_ID' => $this->fuzeAccountID_Sunfarmacy,
            'Fuze_PRIVATE_API_Key' => $this->PrivateKey,
            'CardType' => $card_type,
            'Token' => $token,
            'Token_SF' => $tokenSf,
            'Amount' => $amount,
            'InsightTag' => $this->InsightTag,
            'PurchaseCardCustomerID' => '',
            'PurchaseCardTaxAmount' => 0,
            'PurchaseCardTaxExempt' => '',
            //optional
            'CVV' => $cvv,
            // 'ExpirationMonth' => '05',
            // 'ExpirationYear' => '2021',
            // 'Custom1' => 'customize 1',
            // 'Custom2' => 'customize 2',
            // 'Custom3' => 'customize 3',
            // 'Custom4' => 'customize 4',
            // 'ReferenceNumber' => '112233',
            'EmailAddress' => $email,
            // 'Consumer_IPAddress' => '',
        );
        $payload = json_encode($data);
        $ch = curl_init($this->base_url . '/ProcessCCTokenSale');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Accept: application/json',
            )
        );
        $response_data = curl_exec($ch);
        curl_close($ch);
        return $response_data;
    }

    public function CreateACHToken($data)
    {
        if (isset($data)) {
            $data['Fuze_Account_ID'] = $this->fuzeAccountID_Sunfarmacy;
            $data['Fuze_PUBLIC_API_Key'] = $this->PublicKey;
            $payload = json_encode($data);
            $ch = curl_init($this->base_url . '/CreateACHToken');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLINFO_HEADER_OUT, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
            curl_setopt(
                $ch,
                CURLOPT_HTTPHEADER,
                array(
                    'Content-Type: application/json',
                    'Accept: application/json',
                )
            );
            $response_data = curl_exec($ch);
            curl_close($ch);
            return $response_data;
        }
    }

    public function ProcessACHTokenSale($token, $amount, $email, $tokenSf)
    {


        $data = array(
            'Fuze_Account_ID' => $this->fuzeAccountID_Sunfarmacy,
            'Fuze_PRIVATE_API_Key' => $this->PrivateKey,
            'Token' => $token,
            'Token_SF' => $tokenSf,
            'Amount' => $amount,
            'InsightTag' => 'T0250605-0010000-00000000',

            //optional
            // 'Custom1' => 'customize 1',
            // 'Custom2' => 'customize 2',
            // 'Custom3' => 'customize 3',
            // 'Custom4' => 'customize 4',
            // 'ReferenceNumber' => '112233',
            'EmailAddress' => $email,
            // 'Consumer_IPAddress' => '',
        );
        $payload = json_encode($data);
        $ch = curl_init($this->base_url . '/ProcessACHTokenSale');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Accept: application/json',
                // 'Content-Length: ' . strlen($payload)
            )
        );
        $response_data = curl_exec($ch);
        // dd(curl_getinfo($ch));
        curl_close($ch);
        return $response_data;
    }


    public function ProcessCCTokenReturn($Token, $TransRefID, $FuzeID, $Amount, $email)
    {

        $data = array(
            'Fuze_Account_ID' => $this->fuzeAccountID_Sunfarmacy,
            'Fuze_PRIVATE_API_Key' => $this->PrivateKey,
            'Token' => $Token,
            'TransRefID' => $TransRefID,
            'FuzeID' => $FuzeID,
            'Amount' => $Amount,
            'InsightTag' => 'T0250605-0010000-00000000',
            ///optional
            // 'Custom1' => '',
            // 'Custom2' => '',
            // 'Custom3' => '',
            // 'Custom4' => '',
            'EmailAddress' => $email,
        );
        $payload = json_encode($data);
        $ch = curl_init($this->base_url . '/ProcessCCTokenReturn');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Accept: application/json',
                // 'Content-Length: ' . strlen($payload)
            )
        );

        $response_data = curl_exec($ch);
        // dd(curl_getinfo($ch));
        curl_close($ch);
        return $response_data;
    }


    public function ProcessCCSale(
        $card_type,
        $card_number,
        $ExpirationMonth,
        $ExpirationYear,
        $Amount,
        $cvv,
        $firstName,
        $lastName,
        $street,
        $city,
        $state,
        $zip,
        $email
    ) {

        $data = array(
            'Fuze_Account_ID' => $this->fuzeAccountID_Sunfarmacy,
            'Fuze_PRIVATE_API_Key' => $this->PrivateKey,
            'CardType' => $card_type,
            'CardNumber' => $card_number,
            'ExpirationMonth' => $ExpirationMonth,
            'ExpirationYear' => $ExpirationYear,
            'Amount' => $Amount,
            'CVV' => $cvv,
            'InsightTag' => 'T0250605-0010000-00000000',
            'PurchaseCardCustomerID' => '',
            'PurchaseCardTaxAmount' => 0,
            'PurchaseCardTaxExempt' => '',


            'FirstName' => $firstName,
            'Last Name' => $lastName,
            'StreetAddress' => $street,
            'City' => $city,
            'State' => $state,
            'Zip' => $zip,
            'EmailAddress' => $email,

        );
        $payload = json_encode($data);
        $ch = curl_init($this->base_url . '/ProcessCCSale');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Accept: application/json',
                // 'Content-Length: ' . strlen($payload)
            )
        );

        $response_data = curl_exec($ch);
        // dd(curl_getinfo($ch));
        curl_close($ch);
        return $response_data;
    }



    public function ProcessACHSale(
        $ACHType,
        $ACHAccountHolderType,
        $ACHAccount,
        $ACHRouting,
        $FirstName,
        $LastName,
        $StreetAddress,
        $City,
        $State,
        $Zip,
        $Amount,
        $EmailAddress
    ) {

        $data = array(
            'Fuze_Account_ID' => $this->fuzeAccountID_Sunfarmacy,
            'Fuze_PRIVATE_API_Key' => $this->PrivateKey,
            'ACHType' => $ACHType,
            'ACHAccountHolderType' => $ACHAccountHolderType,
            'ACHAccount' => $ACHAccount,
            'ACHRouting' => $ACHRouting,

            'Amount' => $Amount,

            'InsightTag' => 'T0250605-0010000-00000000',

            'FirstName' => $FirstName,
            'Last Name' => $LastName,
            'StreetAddress' => $StreetAddress,
            'City' => $City,
            'State' => $State,
            'Zip' => $Zip,
            'EmailAddress' => $EmailAddress,

        );
        $payload = json_encode($data);
        $ch = curl_init($this->base_url . '/ProcessACHSale');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Accept: application/json',
                // 'Content-Length: ' . strlen($payload)
            )
        );

        $response_data = curl_exec($ch);
        // dd(curl_getinfo($ch));
        curl_close($ch);
        return $response_data;
    }




    public function UpdateCCToken(
        $token,
        $ExpirationMonth = null,
        $ExpirationYear = null,
        $firstName,
        $lastName,
        $street,
        $city,
        $state,
        $zip,
        $email
    ) {

        $data = array(
            'Fuze_Account_ID' =>  $this->fuzeAccountID_Sunfarmacy,
            'Fuze_PRIVATE_API_Key' =>  $this->PrivateKey,
            'Token' => $token,
            'Token_SF' => null,
            //optional
            'FirstName' => $firstName,
            'LastName' => $lastName,
            'StreetAddress' =>$street,
            'City' => $city,
            'State' => $state,
            'Zip' => $zip,
            'EmailAddress' => $email,
        );

        if ($ExpirationMonth != null) {
            $data['ExpirationMonth'] =  $ExpirationMonth;
        }

        if ($ExpirationYear != null) {
            $data['ExpirationYear'] = $ExpirationYear;
        }

        $payload = json_encode($data);
        $ch = curl_init($this->base_url . '/UpdateCCToken');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Accept: application/json',
                // 'Content-Length: ' . strlen($payload)
            )
        );

        $response_data = curl_exec($ch);
        // dd(curl_getinfo($ch));
        curl_close($ch);
        return $response_data;
    }


    public function UpdateACHToken(
        $token,
        $firstName,
        $lastName,
        $street,
        $city,
        $state,
        $zip,
        $email
    ) {

        $data = array(
            'Fuze_Account_ID' =>  $this->fuzeAccountID_Sunfarmacy,
            'Fuze_PRIVATE_API_Key' =>  $this->PrivateKey,
            'Token' => $token,
            'Token_SF' => null,
            //optional
            'FirstName' => $firstName,
            'LastName' => $lastName,
            'StreetAddress' =>$street,
            'City' => $city,
            'State' => $state,
            'Zip' => $zip,
            'EmailAddress' => $email,
        );

        $payload = json_encode($data);
        $ch = curl_init($this->base_url . '/UpdateACHToken');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Accept: application/json',
                // 'Content-Length: ' . strlen($payload)
            )
        );

        $response_data = curl_exec($ch);
        // dd(curl_getinfo($ch));
        curl_close($ch);
        return $response_data;
    }
}
