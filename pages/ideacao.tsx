import type { NextPage } from 'next'
import Head from 'next/head'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/Home.module.scss'

// PERSONAS
// https://docs.google.com/document/d/1zpv4jiHUYBAAdkxXQNUtZjEfvHssRn0iCiEX7utAoFU/edit

const Ideacao: NextPage = () => {
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
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <LinkCard 
                        title='Personas e Cenários'
                        description='Representação e análise das possíveis personalidades de usuário e seus problemas'
                        link='/personas-cenarios'
                    />
                </div>
                <div className="col-md-4">
                    <LinkCard 
                        title='Prototipação'
                        description='Criação do design para solucionar os problemas existentes das personas'
                        link='/prototipacao'
                    />
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Ideacao
