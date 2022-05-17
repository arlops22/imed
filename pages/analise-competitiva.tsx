import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'

import LinkCard from '../components/link-card'
import EnterpriseInfoSection from '../components/enterprise-info-section'

import styles from '../assets/styles/pages/defaultPages.module.scss'

import ifoodImg from '../assets/images/ifood.png'
import netmedsImg from '../assets/images/netmeds.png'
import pharmEazyImg from '../assets/images/pharmEazy.png'
import ifoodAppImg from '../assets/images/ifood_app.png'
import netmedsAppImg from '../assets/images/netmeds_app.png'
import pharmEazyAppImg from '../assets/images/pharmEazy_app.png'

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
                <div className="container">
                    <h1 className={styles.title}>
                        Análise Competitiva
                    </h1>
                    <div className="row">
                        <div className="col-md-4">
                            <EnterpriseInfoSection 
                                logoSource={ifoodImg}
                                name="IFood"
                                localization="Brasil"
                                size={5539}
                                description="iFood é uma empresa brasileira fundada em 2011, atuante no ramo de entrega de restaurantes, mercados, bebidas e farmácia pela internet."
                                positivePoints={[
                                    "Sistema de entregas com localização em tempo real do entregador.",
                                    "Design de aplicativo visualmente agradável",
                                    "Eficiente.",
                                    "Interface intuitiva e fácil de mexer (utilização de filtros, busca fácil de produtos).",
                                    "Apresenta descontos em produtos.",
                                    "Chat online.",
                                    "Lista de últimos pedidos é de fácil acesso."                        
                                ]}
                                negativePoints={[
                                    "Design de aplicativo desfavorece a função de farmácia. Que não é a função principal do iFood e não está na página inicial do aplicativo, portanto, pode passar batido por usuários.",
                                    "Algumas vezes pode ser dificil contatar a farmácia (Telefone desatualizado, ninguém responde o chat)",
                                    "Não entrega em algumas localizações do país.",
                                    "Suporte do aplicativo não é tão efetivo segundo reclamações de clientes.",
                                    "Não tem lista de favoritos.",
                                    "Entrega paga."  
                                ]}
                                appSource={ifoodAppImg}           
                            />
                        </div>
                        <div className="col-md-4">
                            <EnterpriseInfoSection 
                                logoSource={pharmEazyImg}
                                name="PharmEasy"
                                localization="Índia"
                                size={2421}
                                description="PharmEasy é um aplicativo de saúde do consumidor que fornece aos consumidores acesso sob demanda e entregue em casa a uma ampla gama de prescrição, produtos farmacêuticos de venda livre, outros produtos de saúde ao consumidor, serviços abrangentes de teste de diagnóstico e teleconsultas."
                                positivePoints={[
                                    "Oferece diversas opções na área da saúde, como testes de laboratório.",
                                    "Design de aplicativo visualmente agradável.",
                                    "É extremamente eficiente",
                                    "Interface intuitiva e facilidade no uso (utilização de filtros, busca fácil de produtos).",
                                    "Apresenta descontos em produtos",
                                    "Permite compra de remédios que necessitam de prescrição.",
                                    "Entregam para qualquer lugar no país.",   
                                    "Entrega completamente grátis.",                     
                                ]}
                                negativePoints={[
                                    "A entrega não é rastreável. Isso causa diversos problemas em que a mercadoria não chega na casa do consumidor.",
                                    "Notificações por SMS muitas vezes excessivas.",
                                    "Falta de efetividade do sistema de suporte do aplicativo.",
                                    "Não tem lista de favoritos."  
                                ]}
                                appSource={netmedsAppImg}           
                            />
                        </div>
                        <div className="col-md-4">
                            <EnterpriseInfoSection 
                                logoSource={netmedsImg}
                                name="NetMeds"
                                localization="Índia"
                                size={874}
                                description="A NetMeds é uma das principais farmácias on-line da Índia, que lida com uma ampla gama de produtos de saúde, como medicamentos prescritos de alta qualidade, produtos farmacêuticos de venda livre, produtos gerais de saúde, medicamentos ayurvédicos e medicamentos homeopáticos. Tem instalações de entrega em toda a Índia."
                                positivePoints={[
                                    "Além de oferecer produtos que uma farmácia forneceria, também oferece testes de laboratório.",
                                    "Design de aplicativo visualmente agradável.",
                                    "É extremamente eficiente.",
                                    "Interface intuitiva e facilidade no uso (utilização de filtros, busca fácil de produtos).",
                                    "Apresenta descontos em produtos.",
                                    "Sistema de referência de novos usuários em troca de benefícios na compra.",
                                    "Permite compra de remédios que necessitam de prescrição.",
                                    "Entregam para qualquer lugar no país.",
                                    "Entrega completamente grátis."                       
                                ]}
                                negativePoints={[
                                    "A entrega não é rastreável.",
                                    "Dificuldade de contato com o sistema de contato ao consumidor da empresa.",
                                    "Não tem lista de favoritos.",
                                    "Baixa segurança. Diversos problemas de entregas que não chegam."  
                                ]}
                                appSource={pharmEazyAppImg}           
                            />
                        </div>
                    </div>
                </div>
            </main>

            <div className={styles.nextPage}>
                <LinkCard 
                    title='Questionário'
                    link='/questionario'
                    fitContent
                />
            </div>
            <footer className={styles.footer}>
                <p>
                    Grupo: Ary de Souza Lopes & Bernardo de Castro Cerqueira
                </p>
            </footer>
        </div>
    )
}

export default Intro
