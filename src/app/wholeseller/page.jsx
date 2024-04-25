import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import CategoryHomeCard from '@/components/CategoryHomeCard'
import Hero from '@/components/Hero'
import Banner from '@/components/Banner'
import Perks from '@/components/Perks'
import TopSelling from '@/components/TopSelling'
import RecentSearch from '@/components/RecentSearch';
import Icons from '@/components/Icons';
import Instagram from '@/components/Instagram';
import NewProducts from './NewProducts';


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
