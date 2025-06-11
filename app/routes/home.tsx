import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "~/componennts/Header";
import WhatUpChat from "~/componennts/WhatUpChat";
import EcommerceSlider from "~/componennts/EcommerceSlider";
import BottomHeader from "~/componennts/BottomHeader";
import ProductList from "~/componennts/ProductList";
import CategoryList from "~/componennts/CategoryList";
import Footer from "~/componennts/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <BottomHeader />
      <EcommerceSlider />
      <CategoryList />
      <ProductList/>
      {/* <Welcome /> */}
      <WhatUpChat />
      <Footer />
    </>
  );
}
