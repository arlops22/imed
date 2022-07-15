import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/defaultPages.module.scss'

import FirstClick1 from '../assets/images/first_click1.png'
import FirstClick2 from '../assets/images/first_click2.png'
import FirstClick3 from '../assets/images/first_click3.png'
import FirstClick4 from '../assets/images/first_click4.png'

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
                                    Percurso Cognitivo
                                </h1>
                                <p className="mb-3">Utilizamos como método de inspeção o Percurso Cognitivo pelo fato de uma de nossas metas de design mais importantes ser a facilidade de aprendizado.</p>
                                <p className="pb-5">Então utilizamos duas personas do nosso trabalho e duas tarefas relacionadas a cada uma delas. Com esses dados, usamos uma tabela com diversas perguntas para cada tarefa de uma persona com o fim de avaliar cada passo dela e, no final, realizamos outras perguntas para definirmos nossos resultados e sugestões de redesign.</p>

                                <div className="mb-2 w-100">
                                    <iframe width='100%' height="600" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQMNqi-KxG-FnuKv1e3cxvIqvXfHdOkCSHNbBhi63jqS1p56epPRk_iVHz8KYg4JllOdcl9po5sW18o/pubhtml?widget=true&amp;headers=false"></iframe>
                                </div>

                                <div className="my-3">
                                    <h3>Sugestões de Redesign</h3>
                                    <p>Na tarefa 1 de 'Utilizar histórico de pedidos na tela de Pedidos', foi entendido que a sugestão encontrada para o problema demonstrado foi a inserção de um filtro na página de pedidos para o usuário encontrar o pedido que busca de forma mais fácil.</p>
                                    <p>Já na tarefa 2 de 'Utilizar a função de gps em tempo real do entregador', foi entendido que a sugestão encontrada para o problema demonstrado é a inserção de um campo com as informações do entregador do produto.</p>
                                </div>

                                <div className="mb-2 w-100">
                                    <iframe width='100%' height="600" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTevRVm_9rhyU4xmqsmykaZYLEdjfnfUqA8_t1zoHav340_q4J0jtiQlF_hFYjZpkDAmt3Qd53kQtZ9/pubhtml?widget=true&amp;headers=false"></iframe>
                                </div>

                                <div className="my-3">
                                    <h3>Sugestões de Redesign</h3>
                                    <p>Na tarefa 1 de 'Comprar um remédio sem saber o nome', foi entendido que a sugestão encontrada para o problema demonstrado foi a inserção títulos para cada seção do detalhe do produto, para que o usuário consiga entender e diferenciar cada conteúdo presente.</p>
                                    <p>Já na tarefa 2 de 'Encontrar o endereço de uma farmácia que tenha estacionamento próximo', foi entendido que o fluxo funcionou bem, porém apenas um problema foi encontrado e a sugestão para melhorar ele é a inserção de um atalho logo no início da tela da Home.</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                <div className={styles.nextPage}>
                    <div>
                        <LinkCard 
                            title='Card Sorting'
                            link='/card-sorting'
                            fitContent
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstClick
