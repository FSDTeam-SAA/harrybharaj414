'use client'
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import TopHeader from "@/components/shared/TopHeader";
import { usePathname } from "next/navigation";

const HIDDEN_ROUTES=[
    '/admin'
]

interface LayoutVisibilityWrapperProps{
    children:React.ReactNode;
}

const LayoutVisibilityWrapper:React.FC<LayoutVisibilityWrapperProps>=({children})=>{

    const pathname=usePathname();
    const shouldHideLayout= HIDDEN_ROUTES.some((route)=>pathname.startsWith(route));
   return(
    <>
     {!shouldHideLayout && <TopHeader />}

     {!shouldHideLayout && <NavBar />}
     {children}
     {!shouldHideLayout && <Footer />}
    </>

   )
}

export default LayoutVisibilityWrapper