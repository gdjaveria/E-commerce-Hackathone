
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import ShopLine from '../components/Shop';
import Center from '../components/Center';
import Footer from '../components/Footer';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';




interface Product {
   category: string;
   id: string;
   price: number;
   description: string;
   stockLevel: number;
   imagePath: string;
   discountPercentage: number;
   isFeaturedProduct: number;
   name: string;
   image: any;
}


// Fetch products from Sanity
const fetchProducts = async (): Promise<Product[]> => {
   const query = `*[_type == "product"]{
     category,
     _id,
     price,
     description,
     stockLevel,
     discountPercentage,
     isFeaturedProduct,
     name,
     "image":image.asset._ref
   }`;

   const products = await client.fetch(query);
   return products;
}




const Shop = async () => {
   const products = await fetchProducts();

   return (
      <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
         <div className="bg-[#faf4f4]">
            <Navbar />
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

         <div>
            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               {products.map((product: Product, index) => (
                  <div
                     key={index}
                     className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                  >
                     {/* Product Image */}
                     <Image
                        src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
                        alt={product.name}
                        height={300}
                        width={300}
                        className="h-[250px] w-full object-cover"
                     />
                     <div className="p-4 text-center">
                        {/* Product Name */}
                        <p className="text-lg font-medium text-gray-800">{product.name}</p>
                        {/* Product Price */}
                        <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
                     </div>
                  </div>
               ))}
            </div>

            <div className="justify-center text-center mx-auto">
               <div className="flex gap-4 mx-auto my-12">
                  <div className="bg-[#c9ba8b] px-4 py-2 font-semibold rounded-none">1</div>
                  <div className="bg-[#c9ba8b] px-4 py-2 font-semibold rounded-none">2</div>
                  <div className="bg-[#c9ba8b] px-4 py-2 font-semibold rounded-none">3</div>
                  <div className="bg-[#c9ba8b] px-4 py-2 font-semibold text-center rounded-lg cursor-pointer hover:bg-[#c4bca3]">
                     Next
                  </div>
               </div>
            </div>
         </div>


         <Center />
         <Footer />
      </div>
   );
};

export default Shop;
