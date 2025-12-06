"use client";

import { usePathname } from "next/navigation";
import { Footer } from "../components/Footer";

export const FooterProvider = () => {
    const pathname = usePathname();
    const isLandingPage = pathname === "/landing";

    return (
        <>
        { isLandingPage ? null : <Footer /> }

        </>
    )

}