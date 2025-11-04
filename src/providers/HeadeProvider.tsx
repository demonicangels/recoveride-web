import { useLocation } from "react-router-dom"
import { Header } from "../components/Header"

export const HeaderProvider = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === "/landing-page";

    return (
        <>
        { isLandingPage ? null : <Header /> }

        </>
    )

}
  