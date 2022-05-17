import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/defaultPages.module.scss'

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
                    Questionário
                </h1>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefbjM_18mOtRA2BBbwFQEPUPBNDjoVktxbutYcxwk4erF1kQ/viewform?embedded=true" width="640" height="850">Carregando…</iframe>
            </main>

            <div className={styles.nextPage}>
                <LinkCard 
                    title='Entrevista'
                    link='/entrevista'
                    fitContent
                />
            </div>
            <footer className={styles.footer}>
                <p>
                    Grupo: Ary de Souza Lopes & Bernardo de Castro Cerqueira
                </p>
            </footer>
        </div>
    )
}

export default Intro
