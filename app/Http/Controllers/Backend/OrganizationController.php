<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    public function __construct()
    {
        // $this->PacePayment = new PaceFuzePaymentApiService;
        // $this->EmailsService = new EmailsService;
    }

    public function index()
    {
        return view('backend.organization.index');
    }
    public function show()
    {
        return view('backend.organization.show');
    }
    public function add()
    {
        return view('backend.organization.add');
    }
}
