<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembershipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('memberships');
        Schema::create('memberships', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company',255);
            $table->string('nit', 255)->nullable();
            $table->string('industry', 255)->nullable();
            $table->string('city', 255)->nullable();
            $table->string('name', 255)->nullable();
            $table->string('email', 255)->nullable();
            $table->string('cellphone', 255)->nullable();
            $table->string('phone', 255)->nullable();
            $table->string('twitter', 255)->nullable();
            $table->text('request', 2500)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memberships');
    }
}
