import CategoryCard from "@/components/CategoryCard";
import CategoryHomeCard from "@/components/CategoryHomeCard";
import Hero from "@/components/Hero";
import Perks from "@/components/Perks";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Perks />
      <CategoryHomeCard />

      {/* <CategoryCard/> */}
    </>
  );
};

export default page;
