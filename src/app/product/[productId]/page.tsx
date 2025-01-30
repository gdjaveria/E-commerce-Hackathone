"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaTrashArrowUp } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoIosHeartEmpty } from "react-icons/io";

// Product type
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes?: string[];
  colors?: string[];
}

// CartItem type
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

// Fetch product data from Sanity
async function getProductData(productId: string): Promise<Product | null> {
  const query = `*[_type == "product" && _id == $productId][0]`;
  const product = await client.fetch(query, { productId });
  return product;
}

function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const routeParams = useParams();
  const productId = routeParams?.productId as string;

  useEffect(() => {
    async function fetchData() {
      if (productId) {
        const productData = await getProductData(productId);
        setProduct(productData);
      }
    }
    fetchData();
  }, [productId]);

  //   cart from localStorage.............
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage.............
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart with quantity and size.............
  const addToCart = () => {
    if (!product) return;
    const existingItem = cart.find(
      (item) => item.id === product._id && item.size === selectedSize
    );

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product._id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          size: selectedSize || undefined,
        },
      ]);
    }
    setCartOpen(true);
  };

  // Remove item from cart..............
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1">
          {/* Product Image */}
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-[300px] sm:h-[350px] rounded-lg"
          />
        </div>
        {/* Product Details */}
        <div className="flex-1 space-y-5">
          <h3 className="text-5xl font-semibold text-black">{product.name}</h3>
          <p className="text-gray-500 text-2xl">${product.price}</p>
          <p className="text-gray-600 mt-6">{product.description}</p>

          {/* Size Options */}
          <div className="flex space-x-2 mt-5">
            {["M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-3 border rounded-md ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center mt-6 space-x-4">
            <span className="font-semibold">Rating:</span>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-700 text-sm sm:text-base">
              (5 Customer Reviews)
            </span>
          </div>

          {/* Color Options */}
          <div className="flex space-x-4 mt-4">
            <button className="w-8 h-8 rounded-full bg-purple-500 border"></button>
            <button className="w-8 h-8 rounded-full bg-black border"></button>
            <button className="w-8 h-8 rounded-full bg-yellow-600 border"></button>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="mt-6 bg-black text-white px-6 py-3 font-semibold rounded-full"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Cart Sidebar open */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 w-96 bg-white h-full shadow-lg flex flex-col">
            <div className="flex justify-between p-4 border-b">
              <h2 className="text-xl font-bold">Cart</h2>
              <button onClick={() => setCartOpen(false)}>
                <RxCross1 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size || "no-size"}`}
                  className="flex items-center mb-4"
                >
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      $ {item.price} x {item.quantity} (Size:{" "}
                      {item.size || "N/A"})
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <FaTrashArrowUp className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <p className="text-lg font-bold">Total: $ {getTotalPrice()}</p>
              <button
                onClick={() => alert("Proceeding to Checkout")}
                className="mt-4 w-full bg-black text-white py-2 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
