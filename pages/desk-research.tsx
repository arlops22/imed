import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/defaultPages.module.scss'
import deskResearchImg from '../assets/images/deskresearch.jpg'

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

            <div className="container-fluid">
                <main className={styles.main}>
                    <div className="nav-container d-flex flex-column">
                        <button className="back-btn" onClick={() => router.back()}>
                            {back_icon}
                            Voltar
                        </button>
                    </div>
                    <h1 className={styles.title}>
                        Desk Research
                    </h1>
                    <Image
                        // loader={myLoader}
                        className={styles.deskImage}
                        src={deskResearchImg}
                        alt="Imagem da desk research"
                        height={650}
                    />
                </main>

                <div className={styles.nextPage}>
                    <div>
                        <LinkCard 
                            title='Análise Competitiva'
                            link='/analise-competitiva'
                            fitContent
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
