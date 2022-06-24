import type { NextPage } from 'next'
import Head from 'next/head'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/Home.module.scss'

// PERSONAS
// https://docs.google.com/document/d/1zpv4jiHUYBAAdkxXQNUtZjEfvHssRn0iCiEX7utAoFU/edit

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>fastmed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          fastmed
        </h1>
        <div className={styles.grid}>
          <div className="row">
            <div className="col-md-4">
              <LinkCard 
                title='Inspiração'
                description='Análise da situação atual.'
                link='/inspiracao'
              />
            </div>
            <div className="col-md-4">
            <LinkCard 
              title='Ideação'
              description='Síntese e prototipação.'
              link='/ideacao'
            />
            </div>
            <div className="col-md-4">
            <LinkCard 
              title='Avaliação'
              description='Em breve.'
              link='/'
            />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
