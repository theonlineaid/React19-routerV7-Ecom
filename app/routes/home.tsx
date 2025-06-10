import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "~/componennts/Header";
import WhatUpChat from "~/componennts/WhatUpChat";
import EcommerceSlider from "~/componennts/EcommerceSlider";

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
      <EcommerceSlider />
      <Welcome />
      <WhatUpChat />
    </>
  );
}
