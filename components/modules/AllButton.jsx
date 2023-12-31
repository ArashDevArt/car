import React from 'react'
import Link from 'next/link'
import styles from './AllButton.module.css'
const AllButton = () => {
  return (
    <div className={styles.container}>
        <Link href="/cars">All Cars</Link>
    </div>
  )
}

export default AllButton