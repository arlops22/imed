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
                        Entrevista
                    </h1>
                    
                    <h5 className="mb-3">Participantes escolhidos</h5>
                    <p className="mb-5">Foram feitas três entrevistas, com pessoas de 24, 59 e 90 anos. O objetivo principal de ter escolhido pessoas de idades bastante distintas foi para conseguirmos adquirir maior quantidade de respostas diferentes e, portanto, permitir um maior aprofundamento sobre o assunto, devido ao fato dessas pessoas estarem em fases diferentes da vida.</p>

                    <h5 className="mb-3">Resultados obtidos:</h5>
                    <ul className="text-start">
                        <li>
                            <p>Pessoas que fazem uso de medicação contínua sabem o nome do remédio que está buscando. Entretanto, outras não sabem pelo fato de confiarem nos médicos e acabam, simplesmente, entregando suas receitas para o farmacêutico.</p>
                        </li>
                        <li>
                            <p>Na hora da compra do remédio, o preço foi bastante enfatizado pelos entrevistados. É indispensável para quem compra muitos remédios, e, em casos específicos, pode até fazer a pessoa desistir de comprar em uma farmácia e ir para outra.</p>
                        </li>
                        <li>
                            <p>A acessibilidade é extremamente importante para pessoas de mais idade. Para elas é indispensável ter uma rampa na entrada, por exemplo.</p>
                        </li>
                        <li>
                            <p>O horário de funcionamento parece ser a informação mais importante sobre a farmácia. É unânime entre os entrevistados, o fato de que a farmácia deve ter o melhor horário possível, pois se alguma emergência relacionada à saúde acontece repentinamente durante a madrugada, por exemplo, a farmácia deve estar disponível.</p>
                        </li>
                        <li>
                            <p>Foi observado uma distinção em relação ao momento de comprar remédios entre os entrevistados, onde a jovem de 24 compra somente quando está doente ou com alergia, a adulta de 59 anos compra quando outras pessoas precisam ou quando acabam os dela e a idosa de 90 anos compra quando o médico faz novas solicitações de remédios.</p>
                        </li>
                        <li>
                            <p>Foi constatado que os entrevistados não têm costume de ler a bula, eles confiam nas informações dos médicos e no trabalho do farmacêutico para comprar seus remédios</p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Intro
