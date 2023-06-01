import { useState } from "react";
import ProductImage from "@/components/ProductImage";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params: { id } }: Props) => {
  // const [loading, setLoading] = useState(false);
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-[60px] pb-10">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={1000}
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75`}
      />

      <div className="divide-y">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold ">{product.title}</h1>
          <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
            ${product.price}
          </h2>
        </div>

        <div className="pt-8">
          <p className="text-xs md:text-sm"> {product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
