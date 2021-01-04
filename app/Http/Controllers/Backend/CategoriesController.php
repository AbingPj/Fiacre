<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Models\ProductSubCategory;
use Illuminate\Support\Facades\Auth;

class CategoriesController extends Controller
{
    public function index()
    {
        //    $categories =  ProductCategory::all()->sortBy("name");
        $categories =  ProductCategory::with('sub_categories')
            ->where('status', 1)
            ->orderBy('name')->get();

        return view('backend.categories', compact('categories'));
    }

    public function add(Request $request)
    {

        $category = new ProductCategory;

        $category->name = $request->name;
        $category->tax = $request->tax;
        // $category->description = $request->description;
        // $category->sub_category = $request->sub_category;
        $category->store_id = 1;
        $category->created_by = Auth::user()->id;
        $category->save();

        return redirect('/admin/categories')->withFlashSuccess('Added New Category');;
        // return response()->json('category added');
    }

    public function update(Request $request)
    {
        $category = ProductCategory::findOrFail($request->category_id);
        $category->name = $request->name;
        $category->tax = $request->tax;
        // $category->sub_category = $request->sub_category;
        $category->save();
        return redirect('/admin/categories')->withFlashSuccess('Updated Category');
    }

    public function delete(Request $request)
    {
        $category = ProductCategory::findOrFail($request->category_id);
        $category->status = 2;
        $category->save();
        return redirect('/admin/categories')->withFlashDanger('Category Removed');
    }


    public function indexSubCategory($category_id)
    {

        $category = ProductCategory::find($category_id);

        if (!empty($category)) {

            $subcategories =  ProductSubCategory::where('category_id', $category->id)
                ->where('status', 1)
                ->orderBy('name')
                ->get();

            // dump($category->id);
            // dd($subcategories);

            return view('backend.categories-sub', compact('subcategories', 'category'));
        }
    }

    public function addSubCategory(Request $request)
    {

        $category = ProductCategory::find($request->category_id);
        if (!empty($category)) {
            $sub = new ProductSubCategory;
            $sub->category_id = $category->id;
            $sub->name = $request->name;
            $sub->store_id = 1;
            $sub->created_by = Auth::user()->id;
            $sub->save();
        }



        // $category->description = $request->description;
        // $category->sub_category = $request->sub_category;


        return redirect('/admin/categories/sub/' . $category->id)->withFlashSuccess('Added New Sub Category');
        // return response()->json('category added');
    }

    public function updateSubCategory(Request $request)
    {
        $sub = ProductSubCategory::findOrFail($request->sub_category_id);
        $sub->name = $request->name;
        $sub->save();

        return redirect('/admin/categories/sub/' . $request->category_id)->withFlashSuccess('Updated Sub Category');
    }

    public function deleteSubCategory(Request $request)
    {
        $sub = ProductSubCategory::findOrFail($request->sub_category_id);
        $sub->status = 2;
        $sub->save();
        // return redirect('/admin/categories')->withFlashDanger('Category Removed');
        return redirect('/admin/categories/sub/' . $request->category_id)->withFlashSuccess('Sub Category Removed');

    }
}
