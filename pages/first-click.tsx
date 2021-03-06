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
                                <p className="mb-3">Utilizamos o First Click com objetivo de realizar um teste de usabilidade para nossas tarefas mais importantes. Devido ao fato de termos destacado aspectos da usabilidade como a efici??ncia, a facilidade de aprendizado e a seguran??a no uso da informa????o como uma meta de design muito importante para o nosso projeto.</p>
                                <p className="pb-5 border-bottom">A avalia????o foi realizada utilizando o site OptimalWorkshop, que disponibiliza uma ferramenta de teste que permite-nos a testar a usabilidade de nosso aplicativo criando tarefas a serem feitas por um usu??rio. No caso, mandamos para usu??rios selecionados baseados em nossas personas e eles realizaram o teste.</p>

                                <h3>Resultados Obtidos</h3>

                                <p><strong>Pergunta: </strong>Suponha que voc?? j?? tenha comprado um rem??dio nesse aplicativo. Outro dia depois de muito tempo vai fazer o mesmo pedido mas esqueceu o nome do rem??dio. Qual ?? o primeiro lugar onde voc?? ir?? clicar?</p>

                                <Image src={FirstClick1} alt='Imagem de First Click' />
                                
                                <p className="mt-3 pb-5 border-bottom">Pelo resultado que obtivemos dessa pergunta, conseguimos observar que a grande maioria dos usu??rios obtiveram sucesso na tarefa. Portanto, decidimos n??o sugerir nenhum redesign ?? essa tela.</p>


                                <p><strong>Pergunta: </strong>Suponha que voc?? quer encontrar o seu rem??dio com o pre??o mais barato poss??vel. Qual ?? o primeiro lugar onde voc?? ir?? clicar?</p>

                                <Image alt="" src={FirstClick2} />

                                <p className="mt-3 pb-5 border-bottom">Em rela????o aos resultados atrelados a essa pergunta, observamos que o nosso bot??o de "Simula????o" foi o menos escolhido dos resultados. Por??m, nossa inten????o ?? de que ele se torne o mais escolhido, pois ?? a fun????o que, na nossa vis??o, mais ajudaria o usu??rio a verificar os pre??os e adquirir o rem??dio com o pre??o mais barato poss??vel. Nosso objetivo de redesign em rela????o a isso seria criar algum pop-up para destacar a utilidade que tem esse bot??o, para que assim, os usu??rios fiquem cientes dele.</p>


                                <p><strong>Pergunta: </strong>Suponha que voc?? precisa comprar um rem??dio prescrito pelo seu m??dico e necessita ir para uma farm??cia que seja pr??xima ou que tenha estacionamento caso deseje. Onde voc?? clicaria para resolver seu problema?</p>

                                <Image src={FirstClick3} alt='Imagem de First Click' />

                                <p className="mt-3 pb-5 border-bottom">Pelo resultado que obtivemos dessa pergunta, tamb??m conseguimos observar que a grande maioria dos usu??rios obtiveram sucesso na tarefa. Por??m notamos que houveram alguns cliques fora do bot??o de 'Ver mais' do card da farm??cia, sendo assim, seria interessante que ele por inteiro fosse um bot??o.</p>


                                <p><strong>Pergunta: </strong>Suponha que voc?? acorda com muito mal estar ou dores no corpo e precisa comprar um rem??dio, mas n??o sabe qual. Onde voc?? clicaria para resolver seu problema?</p>

                                <Image src={FirstClick4} alt='Imagem de First Click' />

                                <p className="mt-3">Em rela????o aos resultados atrelados a essa pergunta, observamos que muitos usu??rios clicaram no card da farm??cia, que poderia ser uma alternativa para solucionar o problema, por??m a ideia central da intera????o seria o usu??rio ir diretamente para p??gina de pesquisa para facilitar a busca pelo rem??dio. Dessa maneira, a sugest??o de redesign nessa quest??o seria adicionar um atalho para a p??gina de pesquisa logo no in??cio da home, o que chamaria mais aten????o dos usu??rios e disponibilizaria mais uma forma de se chegar na p??gina.</p>
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
