"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GetCategoryByName } from "@/services/products/product-by-category";
import Image from "next/image";
import FilterOverlay from "@/components/filteroverlay/FilterOverlay";
import CategoryCard from "@/components/shared/categorycard/CategoryCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import banner from "@/assets/meat1.png";
import Filter from "@/components/shared/filter/Filter";
import smfilter from "@/assets/smfilter.png";
const Page = () => {
  const params = useParams();
  const paramsname = params.name;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showFilter, setShowFilter] = useState(false);
  const handleFilterButtonClick = () => {
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetCategoryByName(paramsname);
        setData(response.data.data);

        console.log("data", response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (paramsname) {
      fetchData();
    }
  }, [paramsname]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <>
        <Image
          className="pb-4"
          src={banner}
          style={{ width: "100%", height: "auto" }}
        />
        <Container>
          <h2
            className="my-3"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#006BA3",
            }}
          >
            {paramsname}
          </h2>

          <Row>
            {/* <Col xs={12} lg={3}>
            <div className="d-none d-md-block ">
              <Filter />
            </div>
          </Col> */}
            <Col xs={12} lg={12}>
              <div className="d-flex justify-content-between">
                <div className="d-block d-md-none">
                  <Button
                    className="filter-btn "
                    onClick={handleFilterButtonClick}
                  >
                    Filter
                    <Image
                      className="filter-image mx-2"
                      src={smfilter}
                      width={15}
                      height={14}
                      alt="team"
                    />
                  </Button>
                </div>
                <div className="ms-auto pb-4 mt-3">
                  <b>{data.length} </b>
                  <span>Results Found</span>
                </div>
              </div>

              <Row>
                {data.map((product, index) => (
                  <Col xs={6} lg={3}>
                    <CategoryCard
                      sale={product.sale}
                      title={product.title}
                      productImage={product.productImage}
                      price={product.price}
                      Oldprice={product.Oldprice}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <FilterOverlay isOpen={showFilter} onClose={handleCloseFilter} />
      </>
    </>
  );
};

export default Page;
