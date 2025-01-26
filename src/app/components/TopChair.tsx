"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "./Navbar";

interface SanityImage {
  asset: {
    _ref: string;
  };
}
// based on schema product data.............
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: SanityImage;
  category: string;
}

const TopChair = () => {
  const [chair, setChair] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchChair() {
      try {
        // Sanity query to fetch all products with category " Bed,chair,table "
        const query = `*[_type == "product" && category == "Chair"]`;
        const products = await client.fetch(query);

        console.log("Fetched Products:", products);

        if (products.length > 0) {
          setChair(products);
        } else {
          setError("No products found.");
        }
      } catch (err) {
        setError("Failed to fetch products.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchChair();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <Navbar />

      <div className="text-center px-4 py-6">
        <p className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
          Top chairs For your comfortable living
        </p>
        <p className="text-[14px] md:text-[16px] text-[#9F9F9F] mt-2">
          Choose from our finest collection of luxurious and comfortable chairs.
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {chair.length === 0 ? (
          <p>No beds available right now.</p>
        ) : (
          chair.map((chair) => (
            <div key={chair._id} className="bg-[#FAF4F4] rounded-md p-6">
              <Image
                src={
                  chair.image
                    ? urlFor(chair.image).url()
                    : "/images/placeholder-image.png"
                }
                alt={chair.name}
                className="w-full rounded-lg"
                width={287}
                height={287}
              />
              <p className="text-[14px] md:text-[16px] mt-2">{chair.name}</p>
              <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">
                $ {chair.price}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopChair;
