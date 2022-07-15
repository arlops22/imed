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
                                    First Click
                                </h1>
                                <p className="mb-3">Utilizamos o First Click com objetivo de realizar um teste de usabilidade para nossas tarefas mais importantes. Devido ao fato de termos destacado aspectos da usabilidade como a eficiência, a facilidade de aprendizado e a segurança no uso da informação como uma meta de design muito importante para o nosso projeto.</p>
                                <p className="pb-5 border-bottom">A avaliação foi realizada utilizando o site OptimalWorkshop, que disponibiliza uma ferramenta de teste que permite-nos a testar a usabilidade de nosso aplicativo criando tarefas a serem feitas por um usuário. No caso, mandamos para usuários selecionados baseados em nossas personas e eles realizaram o teste.</p>

                                <h3>Resultados Obtidos</h3>

                                <p><strong>Pergunta: </strong>Suponha que você já tenha comprado um remédio nesse aplicativo. Outro dia depois de muito tempo vai fazer o mesmo pedido mas esqueceu o nome do remédio. Qual é o primeiro lugar onde você irá clicar?</p>

                                <Image src={FirstClick1} />
                                
                                <p className="mt-3 pb-5 border-bottom">Pelo resultado que obtivemos dessa pergunta, conseguimos observar que a grande maioria dos usuários obtiveram sucesso na tarefa. Portanto, decidimos não sugerir nenhum redesign à essa tela.</p>


                                <p><strong>Pergunta: </strong>Suponha que você quer encontrar o seu remédio com o preço mais barato possível. Qual é o primeiro lugar onde você irá clicar?</p>

                                <Image src={FirstClick2} />

                                <p className="mt-3 pb-5 border-bottom">Em relação aos resultados atrelados a essa pergunta, observamos que o nosso botão de “Simulação” foi o menos escolhido dos resultados. Porém, nossa intenção é de que ele se torne o mais escolhido, pois é a função que, na nossa visão, mais ajudaria o usuário a verificar os preços e adquirir o remédio com o preço mais barato possível. Nosso objetivo de redesign em relação a isso seria criar algum pop-up para destacar a utilidade que tem esse botão, para que assim, os usuários fiquem cientes dele.</p>


                                <p><strong>Pergunta: </strong>Suponha que você precisa comprar um remédio prescrito pelo seu médico e necessita ir para uma farmácia que seja próxima ou que tenha estacionamento caso deseje. Onde você clicaria para resolver seu problema?</p>

                                <Image src={FirstClick3} />

                                <p className="mt-3 pb-5 border-bottom">Pelo resultado que obtivemos dessa pergunta, também conseguimos observar que a grande maioria dos usuários obtiveram sucesso na tarefa. Porém notamos que houveram alguns cliques fora do botão de "Ver mais" do card da farmácia, sendo assim, seria interessante que ele por inteiro fosse um botão.</p>


                                <p><strong>Pergunta: </strong>Suponha que você acorda com muito mal estar ou dores no corpo e precisa comprar um remédio, mas não sabe qual. Onde você clicaria para resolver seu problema?</p>

                                <Image src={FirstClick4} />

                                <p className="mt-3">Em relação aos resultados atrelados a essa pergunta, observamos que muitos usuários clicaram no card da farmácia, que poderia ser uma alternativa para solucionar o problema, porém a ideia central da interação seria o usuário ir diretamente para página de pesquisa para facilitar a busca pelo remédio. Dessa maneira, a sugestão de redesign nessa questão seria adicionar um atalho para a página de pesquisa logo no início da home, o que chamaria mais atenção dos usuários e disponibilizaria mais uma forma de se chegar na página.</p>
                            </div>
                        </main>
                    </div>
                </div>

                <div className={styles.nextPage}>
                    <div>
                        <LinkCard 
                            title='Percurso Cognitivo'
                            link='/percurso-cognitivo'
                            fitContent
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstClick
