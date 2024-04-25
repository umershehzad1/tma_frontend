"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import filter from "@/assets/filter.svg";
import Accordion from "react-bootstrap/Accordion";
import MultiRangeSlider from "multi-range-slider-react";
import { Form } from "react-bootstrap";

const Filter = () => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(100);

  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { value: "Fresh Fruit", label: "Fresh Fruit", count: 25, left: 1150 },
    { value: "Vegetables", label: "Vegetables", count: 150 },
    { value: "Cooking", label: "Cooking", count: 54 },
    { value: "Snacks", label: "Snacks", count: 25 },
    { value: "Beverages", label: "Beverages", count: 150 },
    { value: "Beauty & Health", label: "Beauty & Health", count: 54 },
    { value: "Bread & Bakery", label: "Bread & Bakery", count: 54 },
  ];

  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <>
      <div className="filter">
        <Button className="filter-btn">
          Filter
          <Image
            className="filter-image mx-2"
            src={filter}
            width={20}
            height={20}
            alt="team"
          />
        </Button>
        <Accordion className="custom-accordion " defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h1 className="category-heading">All Categories</h1>
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <Form>
                {categories.map((category) => (
                  <div key={category.value} className="mb-3">
                    <Form.Check
                      type="radio"
                      value={category.value}
                      checked={selectedCategory === category.value}
                      onChange={handleRadioChange}
                      label={
                        <span>
                          {category.label} ({category.count})
                          {category.left ? (
                            <span style={{ color: "#808080" }}>
                              ({category.left})
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      }
                    />
                  </div>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <hr />

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h1 className="category-heading">Price</h1>
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <div>
                <MultiRangeSlider
                  min={0}
                  max={100}
                  step={5}
                  minValue={minValue}
                  maxValue={maxValue}
                  ruler={false}
                  label={false}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <div>
                {" "}
                <span className="filter-price">Price:</span>
                <b className=" Range "> 50 - 1,500</b>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h1 className="category-heading">Destination</h1>
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <div>
                <label className="my-1">
                  <input
                    className="radio-input"
                    type="radio"
                    name="category"
                    value="fresh"
                  />
                  <b className="custom-text"> Within Seattle</b>
                </label>
              </div>
              <div>
                <label className="my-1">
                  <input
                    className="radio-input"
                    type="radio"
                    name="category"
                    value="fresh"
                  />
                  <b className="custom-text"> No</b>
                </label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <div className="favourite">
            <label className="my-1">
              <input
                className="radio-input"
                type="radio"
                name="category"
                value="fresh"
              />
              <b className="custom-text"> favourites</b>
            </label>
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default Filter;
