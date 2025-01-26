"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Center from "../components/Center";
import Footer from "../components/Footer";
import ShopLine from "../components/Shop";
import SearchDown from "../components/Categories";
import Navbar from "../components/Navbar";


// Define the ImageAsset interface for the image
interface ImageAsset {
  _ref: string;
  _type: string;
}

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  price: number;
  shortDescription: string;
  category: string;
  image: ImageAsset;
}

// Function to fetch products from Sanity
async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    "shortDescription": description[0..100],
    category,
    "image":image.asset._ref
  }`;
  const products = await client.fetch(query);
  return products;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // products fetching on component............ 
  useEffect(() => {
    async function getProducts() {
      const products = await fetchProducts();
      setProducts(products);
    }
    getProducts();
  }, []);

  // Filter products and based on............
  // search term and selected category...........
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory)
  );

  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="bg-[#faf4f4]">
        <Navbar/>
      </div>

      <div className="relative text-black">
        <Image
          src="/shop1.jpeg"
          alt="Banner shop"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
          Shop
        </h1>

        <div className="absolute top-28 left-1/2 mt-10 transform -translate-x-1/3 -translate-y-1/3">
          <p className="text-gray-700 text-xs md:text-xl flex items-center mt-7">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-bold mx-2"></span>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </p>
        </div>
      </div>

      <div className="my-6">
        <ShopLine />
      </div>

      <div className="max-w-8xl mx-auto py-10 px-8 sm:px-6 lg:px-8">
        <SearchDown
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={Array.from(
            new Set(products.map((product) => product.category))
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="relative group text-center p-6 product-card bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/product/${product._id}`} passHref>
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="mx-auto h-56 object-cover rounded-sm"
                />
                <h3 className="text-lg font-bold text-gray-800 mt-7">
                  {product.name}
                </h3>
                <p className="mt-6 text-gray-600 text-sm">
                  {product.shortDescription}
                </p>
                <p className="text-xl font-bold text-gray-800">
                  ${product.price}
                </p>
              </Link>
              <div className="mt-4 flex justify-around"></div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Center />
      <Footer />
    </div>
  );
};

export default Shop;
