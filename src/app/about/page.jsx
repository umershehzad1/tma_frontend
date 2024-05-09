"use client";
import React from "react";

import { Container} from "react-bootstrap";

import OrganicFood from "@/components/about/organicfood/OrganicFood";
import Team from "@/components/about/team/Team";
import Testomonials from "@/components/testomonials/Testomonials";
import IconMobile from "@/components/iconmobile/IconMobile";
import OurTeam from "@/components/ourteam/OurTeam";

const page = () => {
  return (
    <>
      <Container>
        <OrganicFood />
      </Container>
      <section className="py-3" style={{ backgroundColor: "#f2f2f2" }}>
        <Container>
          <Team />
          <OurTeam/>
          <Testomonials/>
          <IconMobile/>
        </Container>
        
      </section>
    </>
  );
};

export default page;
