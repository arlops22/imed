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
                    Introdução
                </h1>

                <div className={styles.infoContainer}>
                    <h3>Definição do Design Challenge</h3>
                    <p>Como nós podemos ajudar as pessoas em geral a não passarem por dificuldades na busca e compra de remédios de forma que consigam encontrar rapidamente o que procuram?</p>
                </div>
                
                <div className={styles.infoContainer}>
                    <h3>Metas de Design</h3>
                    <ul>
                        <li>
                            <p>Segurança no uso da informação (credibilidade)</p>
                        </li>
                        <li>
                            <p>Eficiência</p>
                        </li>
                        <li>
                            <p>Acessibilidade</p>
                        </li>
                        <li>
                            <p>Facilidade de aprendizado</p>
                        </li>
                    </ul>
                </div>
            </main>

            <div className={styles.nextPage}>
                <LinkCard 
                    title='Desk Research'
                    link='/desk-research'
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
