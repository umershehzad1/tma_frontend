import React from "react";
import CategoryHomeCard from "@/components/CategoryHomeCard";
import Hero from "@/components/Hero";
import LimitedStock from "@/components/LimitedStock";
import NewlyAdded from "@/components/NewlyAdded";
import Perks from "@/components/Perks";
import RecentSearch from "@/components/RecentSearch";
import TopSelling from "@/components/TopSelling";
import Types from "@/components/Types";
import CategoryCard from "@/components/CategoryCard";

const page = () => {
  return (
    <>
      <Hero />
      <Perks />
      <CategoryHomeCard />
      <NewlyAdded />
      <TopSelling />
      <RecentSearch />
      <Types/>
      <LimitedStock />
      {/* <CategoryCard/> */}
    </>
  );
};

export default page;
