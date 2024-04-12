import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeProductFromCart, updateCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux'



const CartData = ({ data }) => {
    const product = data.attributes
    // update cart based on the size selection and quantity selection
    const dispatch = useDispatch();

    const updateCartItems = (event, key) => {
        let payload = {
            key,
            value: key === "quantity" ? parseInt(event.target.value) : event.target.value,
            id: data.id
        }
        dispatch(updateCart(payload));

    }
    return (
        <div className='flex py-5 gap-3 md:gap-5 border-b'>
            {/* Image start */}
            <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
                <Image src={product?.thumbnail?.data?.attributes?.url} alt={product?.name} height={120} width={120} />

            </div>
            {/* Image end*/}

            {/*product Details Section start */}
            <div className='w-full flex flex-col'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/*Mobile product title */}
                    <h2 className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
                        {product?.name}
                    </h2>
                    {/* product subtitle */}
                    <h3 className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>
                        {product?.subtitle}
                    </h3>
                    {/* product pric */}
                    <p className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
                        MRP : &#8377;{product?.price}
                    </p>
                </div>

                {/*Desktop  product SubTitle */}
                <h2 className='text-md font-medium text-black/[0.5] hidden md:block '>
                    {product?.subtitle}
                </h2>
                {/* size selection field start */}
                <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
                        {/* drop down for size */}
                        <div className='flex items-center gap-1'>
                            <h2 className='font-semibold'>Size:</h2>
                            <select className='hover:text-black'
                                onChange={(event) => updateCartItems(event, "selectedSize")}>
                                {product?.size?.data?.map((item, index) => (
                                    <option key={index}
                                        value={item?.size}
                                        disabled={!item?.enabled ? true : false}
                                        selected={data?.selectedSize === item?.size}
                                    >{item?.size}
                                    </option>

                                ))}
                            </select>
                        </div>
                        {/* drop down for quantity start */}
                        <div className='flex items-center gap-1'>
                            <h2 className='font-semibold'>Quantity:</h2>
                            <select className='hover:text-black' onChange={(event) => updateCartItems(event, "quantity")}>
                                {Array.from({ length: 10 }, (_, index) => index + 1).map((quantity, index) => (

                                    <option
                                        key={index}
                                        value={quantity}
                                        selected={data.quantity === quantity}

                                    >{quantity}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* drop down for quantity end */}

                    </div>

                    {/* Delete Icon */}
                    <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'
                        onClick={() => dispatch(removeProductFromCart({ id: data.id }))} />
                </div>
                {/* size selection field end */}

            </div>
            {/*product  Details Section end */}



        </div>
    )
}

export default CartData;