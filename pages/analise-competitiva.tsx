import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/defaultPages.module.scss'
import EnterpriseInfoSection from '../components/enterprise-info-section'

const Intro: NextPage = () => {
    const router = useRouter()

    const back_icon = (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8308 10.4975L19.8333 8.5L11.3333 17L19.8333 25.5L21.8308 23.5025L15.3425 17L21.8308 10.4975Z" fill="black"/>
        </svg>
    )

    return (
        <div className={styles.container}>
            <Head>
                <title>fastmed</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <button className="back-btn" onClick={() => router.back()}>
                    {back_icon}
                    Voltar
                </button>
                <h1 className={styles.title}>
                    Análise Competitiva
                </h1>
                <EnterpriseInfoSection 
                    // logoSource={}
                    name="IFood"
                    localization="Brasil"
                    size={5539}
                    description="iFood é uma empresa brasileira fundada em 2011, atuante no ramo de entrega de restaurantes, mercados, bebidas e farmácia pela internet."
                    positivePoints={[
                        "Sistema de entregas com localização em tempo real do entregador.",
                        "Design de aplicativo visualmente agradável",
                        "Eficiente.",
                        "Interface intuitiva e fácil de mexer (utilização de filtros, busca fácil de produtos).",
                        "Apresenta descontos em produtos.",
                        "Chat online.",
                        "Lista de últimos pedidos é de fácil acesso."                        
                    ]}
                    negativePoints={[

                    ]}
                    // appSource={}           
                />
            </main>

            <div className={styles.nextPage}>
                <LinkCard 
                    title='Questionário'
                    link='/questionario'
                    fitContent
                />
            </div>
            <footer className={styles.footer}>
                <p>
                    Grupo: Ary de Souza Lopes & Bernardo Cerqueira
                </p>
            </footer>
        </div>
    )
}

export default Intro
