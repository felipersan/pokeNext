import { Main } from "./styles";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Header from "../Header";
import GoToTop from "../GoToTop";
import { useRouter } from "next/router";

interface props {
  children: ReactNode;
}

export default function Layout({ children }: props) {
  const [scroll, setScroll] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const scrollPage = window.addEventListener("scroll", () => {
      setScroll(true);
    });
  }, []);
  
  useEffect(() => {
    setScroll(false);
  }, [router.pathname]);

  return (
    <>
      <Header />
      <Main>
        {children}
        {scroll && (
          <div className="goToTopComponent">
            <GoToTop />
          </div>
        )}
      </Main>
    </>
  );
}
