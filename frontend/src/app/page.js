import CategoryCard from "@/components/CategoryCard";
import CategoryHomeCard from "@/components/CategoryHomeCard";
import Hero from "@/components/Hero";
import NewlyAdded from "@/components/NewlyAdded";
import Perks from "@/components/Perks";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Perks />
      <CategoryHomeCard />
      <NewlyAdded/>

      {/* <CategoryCard/> */}
    </>
  );
};

export default page;
