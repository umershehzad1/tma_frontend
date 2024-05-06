"use client";
import React from "react";

import { Container} from "react-bootstrap";

import OrganicFood from "@/components/about/organicfood/OrganicFood";
import Team from "@/components/about/team/Team";

const page = () => {
  return (
    <>
      <Container>
        <OrganicFood />
      </Container>
      <section className="py-3" style={{ backgroundColor: "#f2f2f2" }}>
        <Container>
          <Team />
        </Container>
      </section>
    </>
  );
};

export default page;
