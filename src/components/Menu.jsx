import { data } from "@/constants";
import Link from "next/link";
import { BsChevronDown } from 'react-icons/bs';

const Menu = ({ showCategoryMenu, setShowCategoryMenu, categories }) => {





    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data?.map((item) => (
                <div key={item.id}>
                    {item?.subMenu ? (
                        <li className="flex items-center gap-2 relative cursor-pointer"
                            onMouseEnter={() => setShowCategoryMenu(true)}
                            onMouseLeave={() => setShowCategoryMenu(false)}
                        >
                            {item.name}
                            <BsChevronDown size={14} />
                            {showCategoryMenu && (
                                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                    {/* Render categoriesArray instead of categories */}
                                    {categories?.map(({ attributes: category, id }) => (
                                        <Link href={`/category/${category?.slug}`} key={id} className="flex justify-between items-center h-12  px-3" onClick={() => setShowCategoryMenu(false)}>
                                            <li className="hover:bg-black/[0.03] rounded-md">{category?.name}</li>
                                            <span className="opacity-50 text-sm ">
                                                {`(${category?.products?.data?.length})`}
                                            </span>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="cursor-pointer">
                            <Link href={item?.url}>
                                {item?.name}
                            </Link>
                        </li>
                    )}
                </div>
            ))}
        </ul>
    );
};

export default Menu;
