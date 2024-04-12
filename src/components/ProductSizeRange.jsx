"use client"

import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import toast, { Toaster } from "react-hot-toast";



const ProductSizeRange = ({ product, eachProductData }) => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false)





    return (
        <>

            {/* product size range start */}
            <div className='mb-10'>
                {/* headings section start */}
                <div className="flex justify-between mb-2">
                    {/* left side */}
                    <h2 className='text-md font-semibold'>Select Size</h2>
                    {/* right side */}
                    <h2 className='text-md font-medium text-black/[0.5] cursor-pointer'>
                        Slect Guide

                    </h2>
                </div>
                {/* headings section end */}

                {/* Size selcetion section start */}
                <div id='sizeGrid' className='grid grid-cols-3 gap-2'>

                    {product?.size?.data?.map((item, index) => (
                        <div key={index} className={`border rounded-md text-center py-3 font-medium ${item.enabled
                            ? "hover:border-black cursor-pointer"
                            : "cursor-not-allowed bg-black/[0.1] opacity-50"
                            }}
                        ${selectedSize === item.size ? "border-black" : " "}`}
                            onClick={() => {
                                setSelectedSize(item.size)
                                setShowError(false)
                            }}>
                            {item?.size}
                        </div>


                    ))}
                </div>
            </div>
            {/* product size range end */}
            {/* show error messgae start */}
            {showError && (
                <div className='text-red-500 mt-1'>
                    Size selection is required
                </div>
            )}
            {/* show error messgae end */}
            {/* Add to cart button */}
            <button className={`w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75`}
                onClick={() => {
                    if (!selectedSize) {
                        setShowError(true);
                        document.getElementById('sizeGrid')?.scrollIntoView({
                            block: "center",
                            behavior: "smooth"
                        })
                    } else {

                        dispatch(addToCart({
                            ...eachProductData?.data?.[0],
                            selectedSize,
                            oneQuantityPrice: product.price,

                        }))
                        toast.success(`You've added ${product?.name} to your cart.`);
                    }
                }} >
                Add To Cart

            </button>
            {/* wishlist button */}
            <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
                WishList
                <IoMdHeartEmpty />
            </button>
            {/* product details section */}

            <h2 className='text-lg font-bold mb-5'>
                Product Details
            </h2>

            {/* product description section */}
            {product?.description?.map((paragraph, index) => (
                <div key={index} className='markdown text-md mb-5'>
                    {paragraph.children.map((child, childIndex) => (
                        <ReactMarkdown key={childIndex}>
                            {child.text}
                        </ReactMarkdown>
                    ))}
                </div>
            ))}



            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#000",
                        color: " #fff",
                    },
                }}
            />

        </>

    )

}

export default ProductSizeRange