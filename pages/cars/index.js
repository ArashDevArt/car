import React from "react";
import CarsPage from "../../components/templates/CarsPage";
import carsData from "../../data/carsData";
import Categories from "../../components/modules/Categories";
import SearchBar from "../../components/modules/SearchBar";

const Index = () => {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default Index;
