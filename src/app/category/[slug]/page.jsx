import getProducts from "@/app/api/products/route"
import Pagination from "@/components/Pagination";
import Wrapper from "@/components/Wrapper"



const maxResult = 3;

const fetchCategoryData = async (slug) => {
    try {
        const categoryData = await getProducts(`/categories?filters[slug][$eq]=${slug}`)
        const eachCategoryData = await getProducts(`/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page=1]&pagination[pageSize]=${maxResult}`);

        return { categoryData, eachCategoryData }

    } catch (error) {
        console.log(`error occured while getting data for category`, error);

    }
}

const Category = async ({ params }) => {


    const categorySlug = params.slug;
    const { categoryData, eachCategoryData } = await fetchCategoryData(categorySlug);



    return (
        <div className="w-full md:py-20">

            <Wrapper>

                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
                    <h2 className="text-[20px] md:text-[34px] mb-5 font-semibold leading-tight capitalize">
                        {categoryData?.data?.[0]?.attributes?.name}

                    </h2>
                </div>

                {/* Products */}

                <Pagination eachCategoryData={eachCategoryData} slug={categorySlug} maxResult={maxResult} />

            </Wrapper>
        </div>
    )
}

export default Category