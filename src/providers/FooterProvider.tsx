import { useLocation } from "react-router-dom"
import { Footer } from "../components/Footer";

export const FooterProvider = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === "/landing-page";

    return (
        <>
        { isLandingPage ? null : <Footer /> }

        </>
    )

}