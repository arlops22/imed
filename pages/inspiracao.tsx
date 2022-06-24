import type { NextPage } from 'next'
import Head from 'next/head'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/Home.module.scss'

// PERSONAS
// https://docs.google.com/document/d/1zpv4jiHUYBAAdkxXQNUtZjEfvHssRn0iCiEX7utAoFU/edit

const Inspiracao: NextPage = () => {
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
                        title='Introdução'
                        description='Definição da design challenge e metas de design definidas.'
                        link='/introducao'
                    />
                </div>
                <div className="col-md-4">
                    <LinkCard 
                        title='Desk Research'
                        description='Certezas, suposições e dúvidas sobre o tema.'
                        link='/desk-research'
                    />
                </div>
                <div className="col-md-4">
                    <LinkCard 
                        title='Análise Competitiva'
                        description='Análise de empresas concorrentes.'
                        link='/analise-competitiva'
                    />
                </div>
                <div className="col-md-4">
                    <LinkCard 
                        title='Questionário'
                        description='Coletas rápidas de dados de muitos usuários.'
                        link='/questionario'
                    />
                </div>
                <div className="col-md-4">
                    <LinkCard 
                        title='Entrevista'
                        description='Coletas de informações detalhadas e profundas de usuários individuais.'
                        link='/entrevista'
                    />
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Inspiracao
