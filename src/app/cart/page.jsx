"use client"

import Button from "@/components/Button"
import CartData from "@/components/CartData"
import Wrapper from "@/components/Wrapper"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from "../api/checkout/route"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);



const page = () => {
    // stripe integration
    const [loading, setLoading] = useState(false)
    const { cartItems } = useSelector(state => state.cart)
    // subTotal
    // jab b cart items change bs tb subTotal method render ho hr update k sath ye mehtod bar bar re render na ho is k liye hum useMemo() ko use krenga.
    const subTotal = useMemo(() => {
        return cartItems.reduce((total, value) => total + value.attributes.price, 0)
    }, [cartItems])
    // stripe method
    const handlePayment = async () => {
        try {

            setLoading(true)
            const stripe = await stripePromise;
            const response = await makePaymentRequest("/orders", {
                products: cartItems
            })
            await stripe?.redirectToCheckout({
                sessionId: response.stripeSession.id
            })
        } catch (error) {
            setLoading(false)
            console.log('error occured making payment request', error)
        }

    }

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {cartItems?.length > 0 && (
                    <>
                        {/* heading and paragraph start */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <h2 className="text-[28px] md:text-[34px] mb-3 font-semibold leading-tight">
                                Shopping Cart
                            </h2>
                        </div>
                        {/* heading and paragraph end */}

                        {/* Cart Content Start */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">

                            {/* cart items start */}
                            {/* left side  */}
                            {/* flex-[2] element will grow twice as much as other flex items within the same container. */}
                            <div className="flex-[2]">
                                <h2 className="text-lg font-bold">Cart Items</h2>
                                {cartItems?.map((item) => (
                                    <CartData key={item?.id} data={item} />
                                ))}
                            </div>
                            {/* cart items end */}

                            {/* cart summary start */}
                            {/* right side */}
                            <div className="flex-[1]">
                                <h2 className="text-lg font-bold">Summary</h2>
                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <h2 className="uppercase text-md md:text-lg font-medium text-black">Subtotal</h2>
                                        <p className="text-md md:text-lg font-medium text-black">  MRP : &#8377;{subTotal}</p>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, quidem alias voluptates eligendi nam odio voluptate est molestias nihil atque culpa laborum corporis! Adipisci cumque non autem necessitatibus rem! At nam quia optio iure totam, modi vero repellat ipsum ex ratione ad sapiente pariatur cupiditate esse, distinctio, dolores veniam ducimus!
                                    </div>
                                </div>
                                {/* button */}
                                <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center gap-2' onClick={handlePayment}>
                                    Checkout
                                    {loading && <img src="/spinner.svg" />}

                                </button>

                            </div>
                            {/* cart summary end */}
                        </div>
                        {/* Cart Content End */}

                    </>
                )}



                {/* Empty cart Icon */}
                {cartItems?.length < 1 && (
                    <>
                        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-12 ">
                            <Image src='/empty-cart.jpg' height={300} width={300}
                                className="w-[300px] md:w-[400px]" />
                            <span className="text-xl font-bold">Your cart is empty.</span>
                            <span className="text-center mt-4">Look like you have not added anything in your cart.
                                <br />
                                Go ahead and explore top categories.

                            </span>
                            <Link href={'/'}>
                                <Button title="Continue Shopping"
                                    className="px-8 py-4 mt-8"

                                />
                            </Link>
                        </div>
                    </>
                )}
            </Wrapper>
        </div>
    )
}

export default page