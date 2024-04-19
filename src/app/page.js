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
const page = () => {
  return (
    <>
     
      <Hero />
      <Perks />
      <CategoryHomeCard />
      <Featured />
      <NewlyAdded />
      <RecentSearch />
      <LearnMore />
      <TopSelling />
      <LimitedStock />
      <Banner/>
      <Testomonials/>

      <Types />
      <Icons />
      <Instagram />
      

      {/* <CategoryCard/> */}
    </>
  );
};

export default page;
