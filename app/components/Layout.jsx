import Footer from "./Footer";
import Header from "./Header";

export default function Layout ({ children, page}) {
    return (
        <>
            <Header currentPage={page}/>
            <main>
                {children}
            </main>
            <Footer />
        </>
        
    )
}