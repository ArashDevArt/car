import React from 'react'
import Location from '../icons/Location'
import styles from './Card.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({id , name , model , year , distance , location , price , image}) => {
  return (
    <Link href={`/cars/${id}`}>
    <div className={styles.container}>
        <Image width={300} height={200} className={styles.image} src={image} alt={name} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} ${distance}km`}</p>
        <div className={styles.footer}>
            <p className={styles.price}>$ {price}</p>
            <div className={styles.location}>
                <p>{location}</p>
                <Location />
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Card