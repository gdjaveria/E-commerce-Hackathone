"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

// Define the Product type
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes?: string[];
  colors?: string[];
}

// Fetch product data dynamically from Sanity
async function getProductData(productId: string): Promise<Product | null> {
  const query = `*[_type == "product" && _id == $productId][0]`;
  const product = await client.fetch(query, { productId });
  return product;
}

     // Main Component
 function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);


  const routeParams = useParams();
  const productId = routeParams.productId as string;

  // Fetch product data
  useEffect(() => {
    async function fetchData() {
      if (productId) {
        const productData = await getProductData(productId);
        setProduct(productData);
      }
    }
    fetchData();
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Product Image */}
          <div>
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}

          <div className="flex-1 space-y-5">
            <h3 className="text-5xl font-bold text-black sm:text-2xl md:text-4xl">
              {product.name}
            </h3>
            <p className="text-gray-800 text-3xl font-extrabold sm:text-2xl">
              {product.price}
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 text-sm sm:text-base ">
                (5 Customer Reviews)
              </span>
            </div>

            <p className="text-gray-600 mb-6 mt-6 sm:text-base">
              {product.description}
            </p>

            <div className="mb-4 my-10">
              <h3 className="text-gray-400 font-semibold mb-2">
                {product.sizes}
              </h3>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border rounded-lg bg-yellow-200">
                  L
                </button>
                <button className="px-4 py-2 border rounded-lg bg-gray-100">
                  XL
                </button>
                <button className="px-4 py-2 border rounded-lg bg-gray-100">
                  XS
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-400 font-semibold mb-2">
                {product.colors}
              </h3>
              <div className="flex space-x-4">
                <button className="w-8 h-8 rounded-full bg-purple-500 border"></button>
                <button className="w-8 h-8 rounded-full bg-black border"></button>
                <button className="w-8 h-8 rounded-full bg-yellow-600 border"></button>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-5">
              <button className="px-4 py-2 border rounded-lg">-</button>
              <span className="text-lg font-semibold">1</span>
              <button className="px-4 py-2 border rounded-lg">+</button>
              <button
                className="font-medium text-gray-900 border border-black px-14
                 py-4 text-xl rounded-xl"
              >
                Add To Cart
              </button>
            </div>

            <hr className="scroll-my-6" />
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="text-gray-500 ">SKU</h3>
                <span className="pl-4 text-gray-500">: SS001</span>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-500 ">Category</h3>
                <span className="pl-4 text-gray-500">: Sofas</span>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-500 ">Tags</h3>
                <span className="pl-4 text-gray-500">
                  : Sofa,Chair,Home,Shop
                </span>
              </div>

              <div className="flex justify-between items-center mt-5 ">
                <h3 className="text-gray-500 ">Share</h3>
                <span className="pl-8 text-gray-500">:</span>
                <div className="flex space-x-4">
                  <FaFacebook
                    size={28}
                    className="cursor:pointer hover:text-gray-400"
                  />
                  <FaLinkedin
                    size={28}
                    className="cursor:pointer hover:text-gray-400"
                  />
                  <FaTwitterSquare
                    size={28}
                    className="cursor:pointer hover:text-gray-400"
                  />
                  <IoIosHeartEmpty
                    size={32}
                    className="cursor:pointer text-red-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
