import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/defaultPages.module.scss'

import CardSort1 from '../assets/images/card_sort1.png'
import CardSort2 from '../assets/images/card_sort2.png'

const FirstClick: NextPage = () => {
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

            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-md-9">
                        <main className={styles.main}>
                            <div className="nav-container d-flex flex-column">
                                <button className="back-btn" onClick={() => router.back()}>
                                    {back_icon}
                                    Voltar
                                </button>
                            </div>
                            <div className="container d-flex align-items-center flex-column text-center">
                                <h1 className={styles.title}>
                                    Card Sorting
                                </h1>
                                <p className="mb-3">Utilizamos o Card Sorting como o método de observação, principalmente devido ao poder que essa atividade tem de trazer eficiência ao nosso projeto, analisando a resposta para decidir se e como o conteúdo deve ser reorganizado. Utilizamos a classificação fechada pois nosso objetivo é saber onde cada card encaixa melhor em nossas categorias pré-definidas.</p>
                                <p className="pb-5">Para realizar a atividade utilizamos o Optimal Workshop que disponibiliza uma ferramenta que realiza o Card Sorting. Criamos vinte cards e seis categorias, iniciamos um estudo no site e enviamos para usuários selecionados baseados em nossas personas. E então, eles fizeram o teste.</p>

                                <div className="d-flex align-items-center">
                                    <Image alt='Imagem de Card Sorting' className="me-4" src={CardSort1} />
                                    <Image alt='Imagem de Card Sorting' src={CardSort2} />
                                </div>

                                <p className="mt-4">Esse teste mostrou que, no geral, a prototipação está de acordo com o que os usuários imaginaram na hora de escolher a categoria para cada card. Mas é importante analisar que houveram algumas escolhas frequentes feitas pelos usuários que podem nos ajudar a adquirir algumas noções de redesign do nosso protótipo. São elas:</p>

                                <ul>
                                    <li><p>Criar uma seção para categorias de remédio e também de farmácias na página principal.</p></li>
                                    <li><p>Adicionar um botão de comprar novamente nos cards dos remédios na seção “Histórico de Pedidos” na página principal.</p></li>
                                    <li><p>Criar avaliações do usuário para o remédio.</p></li>
                                    <li><p>Criar um card para o usuário conseguir acompanhar entrega pela página principal.</p></li>
                                </ul>

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstClick
