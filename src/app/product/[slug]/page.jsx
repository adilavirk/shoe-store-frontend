import getProducts from '@/app/api/products/route'
import ProductDetailsCrousel from '@/components/ProductDetailsCrousel'
import ProductSizeRange from '@/components/ProductSizeRange'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import { getDiscountedPricePercentage } from '@/utils/helpers'
import React from 'react'


const fetchSingleProductsData = async (slug) => {

    try {
        const eachProductData = await getProducts(`/products?populate=*&filters[slug][$eq]=${slug}`);
        const productsData = await getProducts(`/products?populate=*&[filters][slug][$ne]=${slug}`)

        return { productsData, eachProductData }

    } catch (error) {
        console.log(`error occured while getting data for product`, error);

    }
}


const page = async ({ params }) => {
    const productSlug = params.slug;
    const { productsData, eachProductData } = await fetchSingleProductsData(productSlug);
    const product = eachProductData?.data?.[0]?.attributes;

    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] flex-wrap'>
                    {/* left section start*/}
                    <div className='w-full mx-auto flex-[1.5] max-w-[500px] lg:max-w-[full] lg:mx-0'>
                        <ProductDetailsCrousel images={product?.image?.data} />

                    </div>
                    {/* left section end*/}

                    {/* right section start */}

                    <div className='flex-[1] py-3'>
                        {/* product title */}
                        <h2 className='text-[30px] font-semibold mb-2 leading-tight'>{product?.name}</h2>
                        {/* product subtitle */}
                        <p className="text-lg font-semibold mb-5">{product?.subtitle}</p>
                        {/* product price */}
                        <div className='flex items-center'>
                            <p className='text-lg font-semibold'>
                                MRP : &#8377;{product?.price}
                            </p>
                            {product?.original_price && (
                                <>
                                    <p className='text-base font-medium line-through'>
                                        &#8377;{product?.original_price}
                                    </p>
                                    <p className='ml-auto text-base font-medium text-green-500'>
                                        {getDiscountedPricePercentage(
                                            product?.original_price,
                                            product?.price
                                        )}
                                        %off
                                    </p>

                                </>
                            )}
                        </div>
                        <p className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </p>
                        <p className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </p>

                        {/* product size range start */}
                        <ProductSizeRange product={product} eachProductData={eachProductData} />
                        {/* product size range end */}
                    </div>
                    {/* right section end */}
                </div>
                {/* Related Products Section */}
                <RelatedProducts products={productsData} />
            </Wrapper>
        </div>
    )
}

export default page