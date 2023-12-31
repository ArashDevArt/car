import { useRouter } from 'next/router'
import React from 'react'
import carsData from '../../data/carsData'
import CarDetails from '../../components/templates/CarDetails'

const CarDetail = () => {
  const router = useRouter()
  const {carid} = router.query
  const carsDetail = carsData[carid - 1]
  return <CarDetails {...carsDetail}/>
}

export default CarDetail