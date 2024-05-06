import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import CategoryHomeCard from '@/components/categoryhomecard/CategoryHomeCard'
import Hero from '@/components/hero/Hero'
import Banner from '@/components/banner/Banner'
import Perks from '@/components/perks/Perks'
import TopSelling from '@/components/topselling/TopSelling'
import RecentSearch from '@/components/recentsearch/RecentSearch';
import Icons from '@/components/icon/Icons';
import Instagram from '@/components/instagram/Instagram';
import NewProducts from '@/components/newproduct/NewProducts';


const page = () => {
  return (
    <>
    <Hero/>
    <Perks />
    <TopSelling/>
    <CategoryHomeCard/>
    <NewProducts/>
    <Container><Banner/></Container>
    <RecentSearch/>
    <Icons/>
    <Instagram/>



    </>
  )
}

export default page
