import React from "react";
import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsPage from "../../components/templates/CarsPage";

const FilterCars = () => {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filtersData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  if (!filtersData.length) return <h1 style={{textAlign: "center"}}>Not found cars</h1>;
  return <CarsPage data={filtersData} />;
};

export default FilterCars;
