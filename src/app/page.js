import HeroBanner from "@/components/HeroBanner";
import ProductsCards from "@/components/ProductsCards";
import Wrapper from "@/components/Wrapper";
import getProducts from "@/app/api/products/route";

const fetchProducts = async () => {
  try {
    const response = await getProducts("/products?populate=*");
    return response;
  } catch (error) {
    console.log("error ocuured while fetching data from strapi", error);
  }
};
export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragrph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <h2 className="text-[28px] md:text-[34px] mb-5 font-semibold">
            Cushioning for Your Miles
          </h2>

          <p className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </p>
        </div>
        {/* heading and paragrph end*/}

        {/* products section starts here */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductsCards key={product?.id} data={product} />
          ))}
        </div>
        {/* products section ends here */}
      </Wrapper>
    </main>
  );
}
