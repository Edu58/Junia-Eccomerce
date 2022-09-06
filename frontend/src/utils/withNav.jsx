import Navbar from '../components/navbar/Navbar'
import SearchBar from "../components/homepage/SearchBar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default () => {
    return (
        <>
            <Navbar />
            <SearchBar />
            <Outlet />
            <Footer />
        </>
    )
}