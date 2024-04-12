import { data, subMenuData } from "@/constants"
import Link from "next/link"
import { BsChevronDown } from 'react-icons/bs'

const MobileMenu = ({ showCategoryMenu, setShowCategoryMenu, setMobileMenu, categories }) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {data?.map((item) => (
                <div key={item.id}>
                    {item?.subMenu ? (
                        <li
                            className=" cursor-pointer py-4 px-5 border-b flex flex-col relative"
                            onClick={() => setShowCategoryMenu(!showCategoryMenu)}

                        >
                            <div className="flex justify-between items-center">
                                {item.name}
                                <BsChevronDown size={14} />
                            </div>
                            {showCategoryMenu && (
                                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                    {categories?.map(({ attributes: category, id }) => (
                                        <Link
                                            href={`/category/${category?.slug}`}
                                            key={id}
                                            className="flex justify-between items-center h-12  px-3"
                                            onClick={() => {
                                                setShowCategoryMenu(false),
                                                    setMobileMenu(false);
                                            }}
                                        >
                                            <li className="  py-4 px-8 border-t flex justify-between">
                                                {category?.name}
                                            </li>
                                            <span className="opacity-50 text-sm ">
                                                {`(${category?.products?.data?.length})`}
                                            </span>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="py-4 px-5 border-b ">
                            <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                                {item?.name}
                            </Link>
                        </li>
                    )}
                </div>
            ))}
        </ul>
    );
}

export default MobileMenu