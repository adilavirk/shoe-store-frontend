

import React from "react";

import Wrapper from "./Wrapper";
import { aboutNike, footerFeatureSection, footerIcons, footerServices, footerTermsAndGuides } from "@/constants";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    {/* services section start */}
                    <div className="flex flex-col gap-3 shrink-0">
                        {footerServices.map((service) => (
                            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                                {service.title}
                            </div>
                        ))}

                    </div>
                    {/* services section end */}
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    {/* Feature Section */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                get help
                            </div>
                            {footerFeatureSection.map((item) => (
                                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                    {item.title}
                                </div>
                            ))}

                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                About nike
                            </div>

                            {aboutNike.map((item) => (
                                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                    {item.title}
                                </div>
                            ))}


                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                    {/* Feature Section */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                {/* icons section */}
                <div className="flex gap-4 justify-center md:justify-start">
                    {footerIcons.map((item) => (
                        <div key={item.icon} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            {item.icon}
                        </div>
                    ))}

                </div>
                {/* RIGHT END */}
                {/* icons section */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                {/* copy right section */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}
                {/* copy right section  ends here*/}

                {/* RIGHT START */}
                {/* guides and terms and guides section */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    {footerTermsAndGuides.map((item) => (
                        <div key={item.title} className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                            {item.title}
                        </div>
                    ))}
                </div>
                {/* RIGHT END */}
                {/* guides and terms and guides section ends here*/}
            </Wrapper>
        </footer>
    );
};

export default Footer;