import React from "react";
import CategoryHomeCard from "@/components/CategoryHomeCard";
import Hero from "@/components/Hero";
import LimitedStock from "@/components/LimitedStock";
import NewlyAdded from "@/components/NewlyAdded";
import Perks from "@/components/Perks";
import RecentSearch from "@/components/RecentSearch";
import TopSelling from "@/components/TopSelling";
import Types from "@/components/Types";
import LearnMore from "@/components/LearnMore";
import Icons from "@/components/Icons";
import Instagram from "@/components/Instagram";
import Featured from "@/components/Featured";
import Banner from "@/components/Banner";
import Testomonials from "@/components/Testomonials";
import CategoryCard from "@/components/shared/CategoryCard";
const page = () => {
  return (
    <>
     
      <Hero />
      <Perks />
      <CategoryHomeCard />
      <Featured />
      <NewlyAdded />

      {/* <CategoryCard/> */}
      <RecentSearch />
      <LearnMore />
      <TopSelling />
      <Banner/>
      <LimitedStock />
     
      <Types />
      <Testomonials/>

     
      <Icons />
      <Instagram />
      

      
    </>
  );
};

export default page;
