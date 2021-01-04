<?php

use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class ProductCategoriesSeeder extends Seeder
{
    public function run()
    {

        ProductCategory::truncate();
        // $table->string('name')->nullable();
        // $table->string('description')->nullable();
        // $table->integer('status')->default(1);
        // $table->bigInteger('store_id')->unsigned()->nullable();
        // $table->bigInteger('created_by')->unsigned()->nullable();
        //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb,
        // 7 - tree, 8 - animal, , 9 - prepared food, 10 - service, 11 - wood, 12 - cbd

        $productsCategory =  [
            ['id' => 1, 'name' => 'Bakery', 'store_id' => 1,],
            ['id' => 2, 'name' => 'Beef', 'store_id' => 1,],
            ['id' => 3, 'name' => 'Beverages', 'store_id' => 1,],
            ['id' => 4, 'name' => 'CSA', 'store_id' => 1,],
            ['id' => 5, 'name' => 'Coffee', 'store_id' => 1,],
            ['id' => 6, 'name' => 'Dairy and Eggs', 'store_id' => 1,],
            ['id' => 7, 'name' => 'Events', 'store_id' => 1,],
            ['id' => 8, 'name' => 'Fiber', 'store_id' => 1,],
            ['id' => 9, 'name' => 'Fruit', 'store_id' => 1,],
            ['id' => 10, 'name' => 'Garden', 'store_id' => 1,],
            ['id' => 11, 'name' => 'Goat', 'store_id' => 1,],
            ['id' => 12, 'name' => 'Lamb', 'store_id' => 1,],
            ['id' => 13, 'name' => 'Livestock', 'store_id' => 1,],
            ['id' => 14, 'name' => 'Meat (Other)', 'store_id' => 1,],
            ['id' => 15, 'name' => 'Mushrooms', 'store_id' => 1,],
            ['id' => 16, 'name' => 'Non-food Items', 'store_id' => 1,],
            ['id' => 17, 'name' => 'Pantry', 'store_id' => 1,],
            ['id' => 18, 'name' => 'Pork', 'store_id' => 1,],
            ['id' => 19, 'name' => 'Poultry', 'store_id' => 1,],
            ['id' => 20, 'name' => 'Seafood', 'store_id' => 1,],
            ['id' => 21, 'name' => 'Spices and Powders', 'store_id' => 1,],
            ['id' => 22, 'name' => 'Subscriptions', 'store_id' => 1,],
            ['id' => 23, 'name' => 'Vegetables', 'store_id' => 1,],
        ];

        foreach ($productsCategory as $category) {
            ProductCategory::create($category);
        }

    }
}
