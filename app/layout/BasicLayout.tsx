import type { ReactNode } from "react";
import { Outlet, useLocation } from "react-router";
import BottomHeader from "~/componennts/BottomHeader";
import Breadcrumb from "~/componennts/Breadcrumb";
import Footer from "~/componennts/Footer";
import Header from "~/componennts/Header";
import WhatUpChat from "~/componennts/WhatUpChat";

interface BasicLayoutProps {
  children: ReactNode;
}

export default function BasicLayout({ children }: BasicLayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Header />
      <BottomHeader />
      {!isHomePage && (
        <Breadcrumb parent="Home" sub={location.pathname.replace("/", "")} />
      )}
      <main>
        <Outlet />
      </main>
      <WhatUpChat />
      <Footer />
    </>
  );
}
