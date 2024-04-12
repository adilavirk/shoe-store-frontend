"use client"

import { useEffect, useState } from "react"
import Wrapper from "./Wrapper"
import getProducts from "@/app/api/products/route"
import ProductsCards from "./ProductsCards"
import useSWR from 'swr'
import { useRouter } from "next/navigation"


const Pagination = ({ eachCategoryData, slug, maxResult }) => {
    const [pageIndex, setPageIndex] = useState(1)
    const { query } = useRouter();
    const { data, error, isLoading } = useSWR(`/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`, getProducts, {
        fallbackData: eachCategoryData

    })

    //   whenever the page will change useEffect will be called
    useEffect(() => {
        setPageIndex(1);

    }, [query]);


    return (
        <Wrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                {data?.data?.map((item) => (
                    <ProductsCards key={item.id} data={item} />

                ))}
            </div>

            {/* PAGINATION BUTTONS START */}
            {data?.meta?.pagination?.total > maxResult && (
                // agr cards 3 sa zyada han to hum buttons ko show krenga.if cards are less than 3 then buttons will  not be shown
                <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                    <button
                        className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                        disabled={pageIndex === 1}
                        onClick={() => setPageIndex(pageIndex - 1)}
                    >
                        Previous
                    </button>

                    <span className="font-bold">{`${pageIndex} of ${data && data.meta.pagination.pageCount
                        }`}</span>

                    <button
                        className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                        disabled={
                            pageIndex ===
                            (data && data?.meta?.pagination?.pageCount)
                        }
                        onClick={() => setPageIndex(pageIndex + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
            {/* PAGINATION BUTTONS END */}
            {isLoading && (
                <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                    <img src="/logo.svg" width={150} />
                    <span className="text-2xl font-medium">Loading...</span>
                </div>
            )}
        </Wrapper>
    )
}

export default Pagination