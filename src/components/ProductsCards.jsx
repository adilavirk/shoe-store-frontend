import Image from "next/image";
import Link from "next/link";
import React from "react";

import { getDiscountedPricePercentage } from '@/utils/helpers'
const ProductsCards = ({ data }) => {


    // Check if data and attributes are defined
    if (!data || !data.attributes) {
        return null; // Return null if data or attributes are undefined
    }

    const { attributes: product, id } = data;

    return (
        <Link
            href={`/product/${product?.slug}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={product?.thumbnail?.data?.attributes?.url}
                alt={product?.name}
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{product?.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{product?.price}
                    </p>

                    {product?.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{product?.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    product?.original_price,
                                    product?.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductsCards;
