import { ReactNode } from "react";
import Header from "../Header";

interface props {
    children: ReactNode
}

export default function Layout({children}:any){
    return(
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}