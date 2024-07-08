import React from "react";
import CategoryHomeCard from "@/components/categoryhomecard/CategoryHomeCard";
import Hero from "@/components/hero/Hero";
import LimitedStock from "@/components/limitedstock/LimitedStock";
import NewlyAdded from "@/components/newlyadded/NewlyAdded";
import Perks from "@/components/perks/Perks";
import RecentSearch from "@/components/recentsearch/RecentSearch";
import TopSelling from "@/components/topselling/TopSelling";
import Types from "@/components/types/Types";
import LearnMore from "@/components/learnmore/LearnMore";
import Icons from "@/components/icon/Icons";
import Instagram from "@/components/instagram/Instagram";
import Banner from "@/components/banner/Banner";
import Testomonials from "@/components/testomonials/Testomonials";
import FeaturedProduct from "@/components/featuredproduct/FeaturedProduct";
import HomeMobileCategroy from "@/components/homemobilecard/HomeMobileCategroy";
import NewlyAddedMobile from "@/components/newaddedmobile/NewlyAddedMobile";
import FeaturedMobile from "@/components/featuredmobile/FeaturedMobile";

const page = () => {

  return (
    <>
     
      <Hero />
      <Perks />
      <CategoryHomeCard />
      
      <FeaturedProduct/>
      <FeaturedMobile/>
   
      <NewlyAdded />
      <NewlyAddedMobile/>

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
