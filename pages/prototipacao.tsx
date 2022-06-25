import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'
import Link from 'next/link'

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
                <div className="nav-container d-flex flex-column">
                    <button className="back-btn" onClick={() => router.back()}>
                        {back_icon}
                        Voltar
                    </button>
                </div>
                <div className="container text-center">
                    <h1 className={styles.title}>
                        Prototipação
                    </h1>
                    
                    <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FChqXqvfJEH0pAEsPUKQjgK%2FFastMed%3Fnode-id%3D0%253A96%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D0%253A96%26show-proto-sidebar%3D1" allowFullScreen></iframe>
                </div>
            </main>
        </div>
    )
}

export default Intro
