import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatChef } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <FontAwesomeIcon icon={faHatChef} /> My app!
        </h1>
      </main>

    </div>
  )
}
