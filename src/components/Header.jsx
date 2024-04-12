"use client"
import { useEffect, useState } from "react"
import Wrapper from "./Wrapper"
import logo from '../../public/logo.svg'
import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'
import getProducts from '@/app/api/products/route'
import { useSelector } from "react-redux"

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [showCategoryMenu, setShowCategoryMenu] = useState(false)
    const [show, setShow] = useState('translate-y-0')
    const [lastScrollY, setLastScrollY] = useState(0)
    // state for categories data
    const [categories, setCategories] = useState(null);

    // useSelector
    const { cartItems } = useSelector((state => state.cart))
    //  on move scroll up and down stick and remove header
    const controlNavbar = () => {
        if (window.scrollY > 200) {

            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow('-translate-y-[80px]')

            } else {
                setShow('shadow-sm')
            }
        } else {
            setShow('translate-y-0')
        }
        setLastScrollY(window.scrollY)

    };
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    // categories useEffect and funtion


    useEffect(() => {
        fetchCategories();

    }, []);

    const fetchCategories = async () => {
        try {
            const { data } = await getProducts('/categories?populate=*')

            setCategories(data);

        } catch (error) {
            console.log(`error occured while fetching categories`, error);

        }
    }

    return (
        <header className={`w-full h-[50px] sticky md:h-[80px] bg-white flex items-center justify-between z-20 top-0 transition-transform duration-300 ${show}`}>
            <Wrapper className="h-[60px] flex justify-between items-center">
                <Link href={'/'}>
                    <Image src={logo} alt="logo" width={60} className="w-[40px] md:w-[60px]" />

                </Link>
                {/* pass categories data to main Menu and Mobile Menu */}
                <Menu
                    showCategoryMenu={showCategoryMenu}
                    setShowCategoryMenu={setShowCategoryMenu}
                    categories={categories} />
                {mobileMenu && <MobileMenu
                    showCategoryMenu={showCategoryMenu}
                    setShowCategoryMenu={setShowCategoryMenu}
                    setMobileMenu={setMobileMenu}
                    categories={categories} />}
                {/* right side icons */}
                <div className="flex items-center gap-2 text-black">
                    {/* Icon start */}
                    <div className="iconParent">
                        <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                        <div className="notification ">22</div>
                    </div>
                    {/* Icon end */}
                    {/* Icon start */}

                    <Link href={'/cart'}>
                        <div className="iconParent">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            {cartItems.length > 0 &&
                                <div className="notification">
                                    {cartItems.length}
                                </div>}
                        </div>

                    </Link>
                    {/* Icon end */}

                    {/* mobile menu navabr icons start*/}
                    <div className=" flex md:hidden iconParent -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose className="text-[16px]"
                                onClick={() => setMobileMenu(false)}


                            />
                        ) : (
                            <BiMenuAltRight className="text-[20px]"
                                onClick={() => setMobileMenu(true)} />
                        )}


                    </div>
                    {/* mobile menu navabr icons end*/}
                </div>
            </Wrapper>
        </header>
    )
}

export default Header