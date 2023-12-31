import React from "react";
import CarsPage from "../components/templates/CarsPage";
import carsData from "../data/carsData";
import Categories from "../components/modules/Categories";
import SearchBar from "../components/modules/SearchBar";
import AllButton from "../components/modules/AllButton";

const Index = () => {
  const cars = carsData.slice(0 , 3)
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={cars} />
      <AllButton />

    </div>
  );
};

export default Index;
