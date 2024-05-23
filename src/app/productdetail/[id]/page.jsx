"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductImage from "@/components/productdetail/productimage/ProductImages";
import ProductDetail from "@/components/productdetail/detail/ProductDetail";
import RelatedProduct from "@/components/shared/relatedproduct/RelatedProduct";
import { useParams } from "next/navigation";
import { GetProductById } from "@/services/products/product-by-category";

const Page = () => {
  const params = useParams();
  const paramsid = params.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetProductById(paramsid);
        setData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (paramsid) {
      fetchData();
    }
  }, [paramsid]);

  if (loading) return <div class="loader"></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="order-sm-0 order-1">
            <ProductImage   />
          </Col>
          <Col xs={12} lg={6} className="order-sm-1 order-0">
            <ProductDetail details={data} />
          </Col>
        </Row>
        <RelatedProduct />
      </Container>
    </>
  );
};

export default Page;
