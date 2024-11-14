<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->integer('sugar_quantity');
            $table->boolean('isHot');
            $table->timestamps();
            
            // Ajouter une colonne de clé étrangère
            $table->unsignedBigInteger('order_id');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');

            // Ajouter une colonne de clé étrangère
            $table->unsignedBigInteger('drink_id');
            $table->foreign('drink_id')->references('id')->on('drinks')->onDelete('cascade');

            // Ajouter une colonne de clé étrangère
            $table->unsignedBigInteger('popping_id');
            $table->foreign('popping_id')->references('id')->on('poppings')->onDelete('cascade');

            // Ajouter une colonne de clé étrangère
            $table->unsignedBigInteger('size_id');
            $table->foreign('size_id')->references('id')->on('sizes')->onDelete('cascade');

            // Ajouter une colonne de clé étrangère
            $table->unsignedBigInteger('base_id');
            $table->foreign('base_id')->references('id')->on('bases')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};
