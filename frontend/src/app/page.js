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
import LearnMore from "@/components/LearnMore";
import Icons from "@/components/Icons";
import Instagram from "@/components/Instagram";
import Featured from "@/components/Featured";
import TmaFooter from "@/components/TmaFooter";
import Header from "@/components/Header";

const page = () => {
  return (
    <>
    <Header/>
      <Hero />
      <Perks />
      <CategoryHomeCard />
      <Featured/>
      <NewlyAdded />
      <LearnMore/>
      <TopSelling />
      <RecentSearch />
      <Types/>
      <Icons/>
      <LimitedStock />
      <Instagram/>
      <TmaFooter/>

      {/* <CategoryCard/> */}
    </>
  );
};

export default page;
