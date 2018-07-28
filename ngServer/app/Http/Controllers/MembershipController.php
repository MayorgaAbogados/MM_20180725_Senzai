<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Membership;

class MembershipController extends Controller
{
   public function add(){
    $mf = new Membership;

    $mf->company = Input::get('company');
    $mf->nit = Input::get('nit');
    $mf->industry = Input::get('industry');
    $mf->city = Input::get('city');
    $mf->name = Input::get('name');
    $mf->email = Input::get('email');
    $mf->cellphone = Input::get('cellphone');
    $mf->phone = Input::get('phone');
    $mf->twitter = Input::get('twitter');
    $mf->request = Input::get('request');

    $mf->save();
   }

   public function all(){
    $mf = DB::table('memberships')->get();
    return  $mf;
   }
}
