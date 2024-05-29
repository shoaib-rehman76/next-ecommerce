import React from "react";
import Image from "next/image";
import Collections from "./components/Collections";
import ProductList from "./components/ProductList";

const page = () => {
  return (
    <>
      <Image
        src="/banner.png"
        alt="img"
        width={2000}
        height={0}
        className=" h-screen "
      />
      <Collections />
      <ProductList />
    </>
  );
};

export default page;
