"use client";

import { usePathname } from "next/navigation";
import { Header } from "../components/Header"

export const HeaderProvider = () => {
    const pathname = usePathname();
    const isLandingPage = pathname === "/landing";

    return (
        <>
        { isLandingPage ? null : <Header /> }

        </>
    )

}
  