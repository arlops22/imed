import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'
import Link from 'next/link'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/defaultPages.module.scss'
import Image from 'next/image'

import faixaEtariaImg from '../assets/images/faixa_etaria_resp.png'
import ocupacaoImg from '../assets/images/ocupacao_resp.png'
import deficienciaImg from '../assets/images/deficiencia_resp.png'
import experienciaAppImg from '../assets/images/experiencia_app_resp.png'
import farmaciaInfosImg1 from '../assets/images/farmacia_infos_resp1.png'
import farmaciaInfosImg2 from '../assets/images/farmacia_infos_resp2.png'
import costumaComprarImg from '../assets/images/costuma_comprar_resp.png'
import prescricaoMedicaImg from '../assets/images/prescricao_medica_resp.png'
import sabeNomeImg from '../assets/images/sabe_nome_resp.png'
import sabeNomeJustificativaImg from '../assets/images/sabe_nome_justificativa_resp.png'
import sabeDosagemImg from '../assets/images/sabe_dosagem_resp.png'
import remediosInfoImg from '../assets/images/remedios_info_resp.png'

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
                    <div className="container d-flex align-items-center flex-column text-center">
                        <h1 className={styles.title}>
                            Questionário
                        </h1>
                        <p className="mb-3">Nesta etapa foi utilizado a estrutura do Google Forms para coletar os dados dos colecionadores e não colecionadores. O formulário foi dividido em seções, onde foram coletados dados demográficos, de experiência no cargo que ocupa e conhecimento do domínio. Logo após, foi estudado sobre as atitudes e valores dos entrevistados, focando inicialmente em informações sobre os remédios e na seção seguinte sobre as farmácias.</p>

                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefbjM_18mOtRA2BBbwFQEPUPBNDjoVktxbutYcxwk4erF1kQ/viewform?embedded=true" width="640" height="850">Carregando…</iframe>
                    
                        <div className="mt-4 pt-4">
                            <h2 className='text-center mb-4'>Resultados</h2>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={faixaEtariaImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={ocupacaoImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={deficienciaImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={experienciaAppImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Image
                                            // loader={myLoader}
                                            className={styles.deskImage}
                                            src={farmaciaInfosImg1}
                                            height={300}
                                            width={600}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Image
                                            // loader={myLoader}
                                            className={styles.deskImage}
                                            src={farmaciaInfosImg2}
                                            height={300}
                                            width={600}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={costumaComprarImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={prescricaoMedicaImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={sabeNomeImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={sabeNomeJustificativaImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={sabeDosagemImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                            <div className="mb-1 d-flex aign-items-center justify-content-center">
                                <Image
                                    // loader={myLoader}
                                    className={styles.deskImage}
                                    src={remediosInfoImg}
                                    height={300}
                                    width={600}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </main>

                <div className={styles.nextPage}>
                    <div>
                        <LinkCard 
                            title='Entrevista'
                            link='/entrevista'
                            fitContent
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
