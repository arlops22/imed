import type { NextPage } from 'next'
import Head from 'next/head'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>imed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          imed
        </h1>

        <div className={styles.grid}>
          <LinkCard 
            title='Introdução'
            description='Definição da design challenge e metas de design definidas.'
            link='/introducao'
          />
          <LinkCard 
            title='Desk Research'
            description='Certezas, suposições e dúvidas sobre o tema.'
            link='/desk-research'
          />
          <LinkCard 
            title='Análise Competitiva'
            description='Definição da design challenge e metas de design definidas.'
            link='/analise-competitiva'
          />
          <LinkCard 
            title='Questionário'
            description='Definição da design challenge e metas de design definidas.'
            link='/questionario'
          />
          <LinkCard 
            title='Entrevista'
            description='Definição da design challenge e metas de design definidas.'
            link='/entrevista'
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Grupo: Ary de Souza Lopes & Bernardo Cerqueira
        </p>
      </footer>
    </div>
  )
}

export default Home
