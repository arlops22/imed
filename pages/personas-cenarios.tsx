import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/defaultPages.module.scss'
import PersonaContent from '../components/persona-content'

import Persona1Image from '../assets/images/persona1.png'

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
                <div className="nav-container d-flex flex-column">
                    <button className="back-btn" onClick={() => router.back()}>
                        {back_icon}
                        Voltar
                    </button>
                </div>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Personas e Cenário Problemas
                    </h1>

                    <PersonaContent
                        image={Persona1Image} 
                        name="Josilene"
                        age={57}
                        job="Faxineira doméstica"
                        education="Ensino básico completo"
                        familiarStatus="Casada, 2 filhos, um adolescente e um adulto"
                        slogan="Eu quero sempre o melhor para os meus filhos e família, por conta disso, estou sempre disposta a resolver meus problemas com muita paciência para que assim consiga cuidar deles da melhor forma, apesar de passar por muitas dificuldades."
                        description={(
                            <>
                                <p>Josilene é faxineira doméstica e sua rotina é corrida e estressante, mas deve ser realizada todo dia para conseguir pagar suas contas e conseguir sustentar seus filhos.</p>
                                <p>Ela tem costume de utilizar seu celular para fazer ligações, mandar mensagens e comprar produtos online. Apesar de utilizar seu celular com certa frequência, muitas vezes pede ajuda de seus filhos para solucionar eventuais problemas. Dessa maneira, precisa ter aplicativos fáceis de usar e gerenciar.</p>
                                <p>Josilene tem sempre seus remédios guardados em sua prateleira e os conhece muito bem. Além disso, tem hábito de fazer compras somente quando eles acabam ou quando seus filhos estão precisando, porém só pode fazer isso aos fins de semana ou quando volta do trabalho e já está tarde.</p>
                            </>
                        )}
                        objectives={[
                            'Solicitar serviços online de maneira fácil e que atenda à suas urgências',
                            'Achar sempre o menor preço do remédio;'
                        ]}
                        abilities={[
                            'Mesmo com a idade e pouco tempo, está disposta a visitar diferentes farmácias para encontrar o preço mais acessível.',
                            'É persistente ao procurar por alguma mercadoria desejada.',
                            'Sempre tem conhecimento dos remédios que toma;'
                        ]}
                        frustrations={[
                            'Tem dificuldades quando o software é complicado de usar',
                            'Quando o aplicativo não funciona da maneira desejada, tem o costume de procurar outra forma para realizar a mesma função',
                            'Se preocupa com os preços dos remédios que estão além do que sua condição financeira mensal pode cobrir'
                        ]}
                        problemScenarium="Voltando do trabalho, Josilene passa em uma farmácia para fazer uma compra grande de diversos tipos de remédios para o estoque de sua casa. Como faz essa compra esporadicamente, tem o dinheiro mais ou menos contado para conseguir efetuá-la. Porém, ao ver os preços dos remédios, ela percebe que o dinheiro não vai ser suficiente e, já cansada por causa do trabalho, ela vai andando em busca de outra farmácia."
                    />
                    <PersonaContent
                        image={Persona1Image} 
                        name="Josilene"
                        age={57}
                        job="Faxineira doméstica"
                        education="Ensino básico completo"
                        familiarStatus="Casada, 2 filhos, um adolescente e um adulto"
                        slogan="Eu quero sempre o melhor para os meus filhos e família, por conta disso, estou sempre disposta a resolver meus problemas com muita paciência para que assim consiga cuidar deles da melhor forma, apesar de passar por muitas dificuldades."
                        description={(
                            <>
                                <p>Josilene é faxineira doméstica e sua rotina é corrida e estressante, mas deve ser realizada todo dia para conseguir pagar suas contas e conseguir sustentar seus filhos.</p>
                                <p>Ela tem costume de utilizar seu celular para fazer ligações, mandar mensagens e comprar produtos online. Apesar de utilizar seu celular com certa frequência, muitas vezes pede ajuda de seus filhos para solucionar eventuais problemas. Dessa maneira, precisa ter aplicativos fáceis de usar e gerenciar.</p>
                                <p>Josilene tem sempre seus remédios guardados em sua prateleira e os conhece muito bem. Além disso, tem hábito de fazer compras somente quando eles acabam ou quando seus filhos estão precisando, porém só pode fazer isso aos fins de semana ou quando volta do trabalho e já está tarde.</p>
                            </>
                        )}
                        objectives={[
                            'Solicitar serviços online de maneira fácil e que atenda à suas urgências',
                            'Achar sempre o menor preço do remédio;'
                        ]}
                        abilities={[
                            'Mesmo com a idade e pouco tempo, está disposta a visitar diferentes farmácias para encontrar o preço mais acessível.',
                            'É persistente ao procurar por alguma mercadoria desejada.',
                            'Sempre tem conhecimento dos remédios que toma;'
                        ]}
                        frustrations={[
                            'Tem dificuldades quando o software é complicado de usar',
                            'Quando o aplicativo não funciona da maneira desejada, tem o costume de procurar outra forma para realizar a mesma função',
                            'Se preocupa com os preços dos remédios que estão além do que sua condição financeira mensal pode cobrir'
                        ]}
                        problemScenarium="Voltando do trabalho, Josilene passa em uma farmácia para fazer uma compra grande de diversos tipos de remédios para o estoque de sua casa. Como faz essa compra esporadicamente, tem o dinheiro mais ou menos contado para conseguir efetuá-la. Porém, ao ver os preços dos remédios, ela percebe que o dinheiro não vai ser suficiente e, já cansada por causa do trabalho, ela vai andando em busca de outra farmácia."
                    />
                    <PersonaContent
                        image={Persona1Image} 
                        name="Josilene"
                        age={57}
                        job="Faxineira doméstica"
                        education="Ensino básico completo"
                        familiarStatus="Casada, 2 filhos, um adolescente e um adulto"
                        slogan="Eu quero sempre o melhor para os meus filhos e família, por conta disso, estou sempre disposta a resolver meus problemas com muita paciência para que assim consiga cuidar deles da melhor forma, apesar de passar por muitas dificuldades."
                        description={(
                            <>
                                <p>Josilene é faxineira doméstica e sua rotina é corrida e estressante, mas deve ser realizada todo dia para conseguir pagar suas contas e conseguir sustentar seus filhos.</p>
                                <p>Ela tem costume de utilizar seu celular para fazer ligações, mandar mensagens e comprar produtos online. Apesar de utilizar seu celular com certa frequência, muitas vezes pede ajuda de seus filhos para solucionar eventuais problemas. Dessa maneira, precisa ter aplicativos fáceis de usar e gerenciar.</p>
                                <p>Josilene tem sempre seus remédios guardados em sua prateleira e os conhece muito bem. Além disso, tem hábito de fazer compras somente quando eles acabam ou quando seus filhos estão precisando, porém só pode fazer isso aos fins de semana ou quando volta do trabalho e já está tarde.</p>
                            </>
                        )}
                        objectives={[
                            'Solicitar serviços online de maneira fácil e que atenda à suas urgências',
                            'Achar sempre o menor preço do remédio;'
                        ]}
                        abilities={[
                            'Mesmo com a idade e pouco tempo, está disposta a visitar diferentes farmácias para encontrar o preço mais acessível.',
                            'É persistente ao procurar por alguma mercadoria desejada.',
                            'Sempre tem conhecimento dos remédios que toma;'
                        ]}
                        frustrations={[
                            'Tem dificuldades quando o software é complicado de usar',
                            'Quando o aplicativo não funciona da maneira desejada, tem o costume de procurar outra forma para realizar a mesma função',
                            'Se preocupa com os preços dos remédios que estão além do que sua condição financeira mensal pode cobrir'
                        ]}
                        problemScenarium="Voltando do trabalho, Josilene passa em uma farmácia para fazer uma compra grande de diversos tipos de remédios para o estoque de sua casa. Como faz essa compra esporadicamente, tem o dinheiro mais ou menos contado para conseguir efetuá-la. Porém, ao ver os preços dos remédios, ela percebe que o dinheiro não vai ser suficiente e, já cansada por causa do trabalho, ela vai andando em busca de outra farmácia."
                    />
                </main>

                <div className={styles.nextPage}>
                    <div>
                        <LinkCard 
                            title='Desk Research'
                            link='/desk-research'
                            fitContent
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
