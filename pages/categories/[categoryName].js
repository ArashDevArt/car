import { useRouter } from "next/router";
import carsData from "../../data/carsData";

import React from "react";
import CarsPage from "../../components/templates/CarsPage";

const CategoryName = () => {
  const router = useRouter();
  const { categoryName } = router.query;
  const cars = carsData.filter((item) => item.category === categoryName);
  return <CarsPage data={cars} />;
};

export default CategoryName;
