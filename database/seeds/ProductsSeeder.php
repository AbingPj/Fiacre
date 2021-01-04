<?php

use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        // Product::truncate();
        $products =  [
            [
                'id' => '1',
                'name' => 'Apples',
                'description' => "Apples are rich in fiber, vitamins, and minerals, all of which benefit health. They also provide an array of antioxidants. These substances help neutralize free radicals.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "fruits",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/1.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 9, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10001, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                // 'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '2',
                'name' => 'Arugula',
                'description' => "This delicious green is a nutrient-dense food that is high in fiber and phytochemicals. Arugula is low in sugar, calories, carbohydrates, and fat. It’s high in several vital nutrients.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/2.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10002, // stock-keeping unit
                'season' => 'Spring,Fall', // Winter, Spring, Summer, Fall
                // 'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '3',
                'name' => 'Beets',
                'description' => "Beets are loaded with vitamins and minerals and low in calories and fat. They also contain inorganic nitrates and pigments, both of which have a number of health benefits.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/3.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10003, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                // 'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '4',
                'name' => 'Bread',
                'description' => "Sourced by Flour City Bread.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "bread, food",
                'unit' => "pc",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/4.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 1, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal, 9 - Prepared Food
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10004, // stock-keeping unit
                'season' => 'Winter,Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                // 'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '5',
                'name' => 'Brussel Sprouts',
                'description' => "Brussels sprouts are low in calories but high in many nutrients, especially fiber, vitamin K and vitamin C.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/5.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10005, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '6',
                'name' => 'Cabbage',
                'description' => "Cabbage is a low-calorie vegetable that is rich in vitamins, minerals and antioxidants.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/6.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10006, // stock-keeping unit
                'season' => 'Spring,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '7',
                'name' => 'Carrots',
                'description' => "Carrots’ water content ranges from 86–95%, and the edible portion consists of around 10% carbs. Carrots are about 10% carbs, consisting of starch, fiber, and simple sugars. They are extremely low in fat and protein.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/7.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10007, // stock-keeping unit
                'season' => 'Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '8',
                'name' => 'Cherries',
                'description' => "Cherries are a good source of vitamin C, potassium, fiber, and other nutrients that your body needs to function optimally.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "fruits",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/8.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 9, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10008, // stock-keeping unit
                'season' => 'Spring', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '9',
                'name' => 'Chinese Greens',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/9.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10009, // stock-keeping unit
                'season' => 'Spring,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '10',
                'name' => 'Christmas Tree',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "tree",
                'unit' => "pc",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/10.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 10, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10010, // stock-keeping unit
                'season' => 'Winter', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '11',
                'name' => 'Collards',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/11.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10011, // stock-keeping unit
                'season' => 'Spring,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '12',
                'name' => 'Corn on the cob',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "pc",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/12.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10012, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '13',
                'name' => 'Cucumber',
                'description' => "Cucumbers are low in calories but high in water and several important vitamins and minerals. Eating cucumbers with the peel provides the maximum amount of nutrients.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/13.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10013, // stock-keeping unit
                'season' => 'Spring,Summer', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '14',
                'name' => 'Eggs',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "eggs,dairy",
                'unit' => "pc",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/14.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 6, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10014, // stock-keeping unit
                'season' => 'Winter,Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '15',
                'name' => 'Dried Flowers',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "flowers",
                'unit' => "pc",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/15.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 10, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10015, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '16',
                'name' => 'Fresh Flowers',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "flowers",
                'unit' => "pc",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/16.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 10, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10016, // stock-keeping unit
                'season' => 'Spring,Summer', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '17',
                'name' => 'Garlic',
                'description' => "Lower blood pressure and cholesterol, an anti-inflammatory effect, a reduced risk of cancer, and a stronger immune system.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/17.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10017, // stock-keeping unit
                'season' => 'Winter,Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '18',
                'name' => 'Ginger',
                'description' => "Ginger is a popular spice. It is high in gingerol, a substance with powerful anti-inflammatory and antioxidant properties.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables,herb",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/18.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 21, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10018, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '19',
                'name' => 'Green Beans',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/19.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10019, // stock-keeping unit
                'season' => 'Spring,Summer', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '20',
                'name' => 'Green Onions',
                'description' => "By fresh weight, they’re 89% water and pack 2.6 grams of fiber, 7.3 grams of carbs and tiny amounts of protein and fat per 100 grams.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/20.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10020, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '21',
                'name' => 'Herbs',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/21.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 21, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10021, // stock-keeping unit
                'season' => 'Winter,Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '22',
                'name' => 'Honey',
                'description' => "Sourced by Brighton Honey",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "honey",
                'unit' => "btl",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/22.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 6, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10022, // stock-keeping unit
                'season' => 'Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '23',
                'name' => 'Horse Backride',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "services",
                'unit' => "hr",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/23.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 22, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal, 9 - prepared food, 10 - service
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10023, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '24',
                'name' => 'Hot Peppers',
                'description' => "Common hot peppers — like jalapenos, serrano peppers, and red or green chilies — are good sources of vitamin C, vitamin A, and potassium.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/24.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 21, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10024, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '25',
                'name' => 'Kale',
                'description' => "Kale is very high in nutrients and very low in calories, making it one of the most nutrient-dense foods on the planet.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/25.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10025, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '26',
                'name' => 'Leeks',
                'description' => "Leeks are low in calories but high in nutrients, particularly magnesium and vitamins A, C, and K. They boast small amounts of fiber, copper, vitamin B6, iron, and folate.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/26.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10026, // stock-keeping unit
                'season' => 'Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '27',
                'name' => 'Lettuce',
                'description' => "The folate and vitamin K contents of crisphead lettuce are particularly noteworthy.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/27.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10027, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '28',
                'name' => 'Microgreens',
                'description' => "Microgreens are packed with nutrients. While their nutrient contents vary slightly, most varieties tend to be rich in potassium, iron, zinc, magnesium and copper (2, 3 ). Microgreens are also a great source of beneficial plant compounds like antioxidants.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/28.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10028, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '29',
                'name' => 'Mushroom',
                'description' => "They’re fat-free, low-sodium, low-calorie, and cholesterol-free. They’re also packed with fiber, vitamins, and minerals.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/29.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 15, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10029, // stock-keeping unit
                'season' => 'Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '30',
                'name' => 'Mustard Greens',
                'description' => "Mustard greens are low in calories yet high in fiber and many essential vitamins and minerals. In particular, they’re an excellent source of vitamins C and K.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/30.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10030, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '31',
                'name' => 'Onions',
                'description' => "Onions are low in calories yet high in nutrients, including vitamin C, B vitamins and potassium.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/31.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10031, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '32',
                'name' => 'Pasta',
                'description' => "Supllied by Flour City Pasta",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "pasta,food",
                'unit' => "box",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/32.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 8, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10032, // stock-keeping unit
                'season' => 'Winter,Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '33',
                'name' => 'Peaches',
                'description' => "Peaches are high in fiber, vitamins, and minerals. They also contain beneficial plant compounds like antioxidants, which can help protect your body from aging and disease.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "fruits",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/33.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 9, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10033, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '34',
                'name' => 'Peas',
                'description' => "Green peas are fairly low in calories and contain several vitamins, minerals and antioxidants. They're also high in fiber and protein.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/34.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10034, // stock-keeping unit
                'season' => 'Spring', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '35',
                'name' => 'Potatoes',
                'description' => "Potatoes are a good source of several vitamins and minerals, including potassium, folate, and vitamins C and B6.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/35.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10035, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '52',
                'name' => 'Pumpkins',
                'description' => "Pumpkin is high in vitamins and minerals while being low in calories. It’s also a great source of beta-carotene, a carotenoid that your body converts into vitamin A.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/52.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10052, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '36',
                'name' => 'Radishes',
                'description' => "Radishes are a good source of vitamin C. Just 1/2 cup offers about 14 percent of your recommended daily allowance. Vitamin C is an antioxidant that helps battle free radicals in your body and helps prevent cell damage caused by aging, an unhealthy lifestyle, and environmental toxins. Vitamin C also plays a key role in collagen production, which supports healthy skin and blood vessels.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/36.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10036, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '37',
                'name' => 'Salad Greens',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/37.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10037, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '38',
                'name' => 'Salad Mix',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/38.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10038, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '39',
                'name' => 'Shallots',
                'description' => "Shallots are a more concentrated source of protein, fiber, and micronutrients, including calcium, iron, magnesium, phosphorus, potassium, zinc, copper, folate, B vitamins, and vitamins A and C",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/39.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10039, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '40',
                'name' => 'Spinach',
                'description' => "Spinach is low in carbs but high in insoluble fiber. This type of fiber may benefit your digestion.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/40.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10040, // stock-keeping unit
                'season' => 'Spring', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '41',
                'name' => 'Summer Squash',
                'description' => "Summer squash contains vitamin C as well as beta-carotene, folate, and fiber.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/41.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10041, // stock-keeping unit
                'season' => 'Spring,Summer', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '42',
                'name' => 'Sweet Peppers',
                'description' => "If you need a boost of vitamin C, bell peppers are a great choice. One green pepper contains moreTrusted Source vitamin C than an orange.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/42.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10042, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '43',
                'name' => 'Swiss Chard',
                'description' => "Swiss chard is a nutritional powerhouse -- an excellent source of vitamins K, A, and C, as well as a good source of magnesium, potassium, iron, and dietary fiber.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/43.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10043, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '44',
                'name' => 'Syrup',
                'description' => "Sourced by Flower City Maple Syrup",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "btl",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/44.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 6, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10044, // stock-keeping unit
                'season' => 'Winter', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '45',
                'name' => 'Tomatillos',
                'description' => "They contain antioxidants and can help you sneak some extra fiber into your diet without adding in too many extra calories.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/45.jpeg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10045, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '46',
                'name' => 'Tomatoes',
                'description' => "Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer. They are also a great source of vitamin C, potassium, folate, and vitamin K.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/46.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10046, // stock-keeping unit
                'season' => 'Spring,Summer', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '47',
                'name' => 'Turnips',
                'description' => "Turnips are loaded with fiber and vitamins K, A, C, E, B1, B3, B5, B6, B2 and folate (one of the B vitamins), as well as minerals like manganese, potassium, magnesium, iron, calcium and copper. They are also a good source of phosphorus, omega-3 fatty acids and protein.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/47.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10047, // stock-keeping unit
                'season' => 'Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '48',
                'name' => 'Winter Squash',
                'description' => "Winter squash have a hard skin and flesh (this includes acorn, buttercup, butternut, calabaza, delicate, Hubbard, spaghetti, sweet dumpling, and Turban, as well as pumpkin).",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/48.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10048, // stock-keeping unit
                'season' => 'Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '49',
                'name' => 'Wood Products',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "wood",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/49.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 16, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal, 9 - prepared food, 10 - service, 11 - wood
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10049, // stock-keeping unit
                'season' => 'Winter,Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '50',
                'name' => 'Zucchini',
                'description' => "Zucchini contains a variety of vitamins, minerals, and beneficial plant compounds. Cooked zucchini is particularly high in vitamin A, though raw zucchini contains slightly less.",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "vegetables",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/50.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10050, // stock-keeping unit
                'season' => 'Spring,Summer', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ],
            [
                'id' => '51',
                'name' => 'Moringa Powder Plants',
                'description' => "",
                'price' => 110.00,
                'discount_price' => 100.00,
                'member_price' => 105.00,
                'wholesale_price' => 90.00,
                'tags' => "plants",
                'unit' => "kg",
                'minorder' => 1,
                'maxorder' => 50,
                'image_path' => "public/products/seeds/51.jpg",
                'store_id' => 1,
                'is_visible' => 1, // 1-show, 0-hide
                'category_id' => 23, //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
                'status' => 1, // 1 - available, 2 - out, 3 - archived;
                'sku' => 10051, // stock-keeping unit
                'season' => 'Winter,Spring,Summer,Fall', // Winter, Spring, Summer, Fall
                //'created_at' => Carbon::now()
                // 'created_by' => 1,
            ]
            ];
            // Product::create($products);
            foreach ($products as $product) {

                $prod = Product::find($product['id']);

                if (isset($prod)) {
                    $prod->update($product);
                } else {
                    Product::create($product);
                }
                // Product::create($product);
            }

    }
}
