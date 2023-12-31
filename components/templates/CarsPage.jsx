import React from 'react'
import styles from './CarsPage.module.css'
import Card from '../modules/Card'
const CarsPage = ({data}) => {
  return (
    <div className={styles.container}>
      {data.map(item => <Card key={item.id} {...item}/>)}
    </div>
  )
}

export default CarsPage