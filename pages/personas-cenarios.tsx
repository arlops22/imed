import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Head from 'next/head'

import LinkCard from '../components/link-card'

import styles from '../assets/styles/pages/defaultPages.module.scss'
import PersonaContent from '../components/persona-content'

import Persona1Image from '../assets/images/persona1.png'
import Persona2Image from '../assets/images/ana.png'
import Persona3Image from '../assets/images/matheus.png'

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
                        problemScenarium={[
                            {
                                problem: "Voltando do trabalho, Josilene passa em uma farmácia para fazer uma compra grande de diversos tipos de remédios para o estoque de sua casa. Como faz essa compra esporadicamente, tem o dinheiro mais ou menos contado para conseguir efetuá-la. Porém, ao ver os preços dos remédios, ela percebe que o dinheiro não vai ser suficiente e, já cansada por causa do trabalho, ela vai andando em busca de outra farmácia.",
                                tasks: [
                                    {
                                        objective: 'encontrar seus remédios da maneira mais barata possível',
                                        methods: [
                                            {
                                                name: 'Utilizar a aba de simulação do aplicativo',
                                                operators: [
                                                    'navegar para a tela de busca no menu de navegação',
                                                    'digitar nome do remédio',
                                                    'clicar no botão de filtro',
                                                    'selecionar filtro de menor preço',
                                                    'aplicar filtro',
                                                    'visualizar resultado e decidir qual produto deseja',
                                                    'clicar no produto',
                                                    'clicar no botão de "adicionar em simulação"',
                                                    'voltar para lista de remédios filtrados',
                                                    'continuar escolhendo outros remédios e fazendo o mesmo processo',
                                                    'navegar para a tela de "Simulação" no menu de navegação',
                                                    'visualizar resultados',
                                                    'selecionar resultado que orçamento é mais barato e tem localização próxima'
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        objective: 'encontrar as farmácias próximas',
                                        methods: [
                                            {
                                                name: 'Utilizar seção de “Farmácias mais próximas” na Home',
                                                operators: [
                                                    'visualizar farmácias da seção de atalho "Farmácias mais próximas"',
                                                    'clicar na farmácia desejada',
                                                    'visualizar informações da farmácia',
                                                    'buscar remédio que deseja comprar'
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            },
                        ]}
                    />
                    <PersonaContent
                        image={Persona2Image} 
                        name="Ana"
                        age={26}
                        job="Advogada"
                        education="Graduanda em Direito"
                        familiarStatus="Solteira, mora com a avó que é sua dependente."
                        slogan="Vivo enrolada com meus afazeres e mesmo assim preciso ajudar minha vózinha. Dessa maneira, sempre busco por tecnologias que agilizam minha vida e meus processos e me dão segurança."
                        description={(
                            <>
                                <p>Ana tem uma vida agitada, se divide em trabalhar e terminar os estudos da faculdade. Em seu cotidiano sempre utiliza seu celular e notebook para realizar suas tarefas, pois acha mais simples e ágil.</p>
                                <p>Ela vive em uma casa com sua avó Teresa, que tem 86 anos e que sempre que precisa de alguma coisa, Ana ajuda. Sua avó não costuma utilizar tecnologias além da televisão. A saúde da senhora Teresa já não é tão boa devido à idade e também tem um problema grave na perna que necessita de urgência algumas vezes, portanto, faz o uso contínuo de uma grande quantidade de remédios. Dessa maneira, Ana precisa repor ou comprar novos remédios para a sua avó quando acaba.</p>
                                <p>Ana nunca sabe que horas irá conseguir ficar livre no trabalho para conseguir comprar os remédios, e quando compra, prefere sempre que entregue em seu domicílio para não perder tempo. Sua principal preocupação é se a entrega é de qualidade, por isso sempre gosta de dar uma olhada na avaliação dos usuários na internet, mesmo assim fica com medo por não ter certeza da qualidade devido à falta de transparência das entregas.</p>
                            </>
                        )}
                        objectives={[
                            'Procurar os remédios para sua vó da maneira mais rápida e fácil possível, preza muito pela localização da farmácia',
                            'Encontrar o remédio correto com a mesma dose da prescrição médica',
                            'Encontrar aplicativos que demonstram clareza em relação a entrega da mercadoria'
                        ]}
                        abilities={[
                            'É muito paciente na hora de comprar mercadorias.',
                            'Tem facilidade para buscar o que procura nos aplicativos'
                        ]}
                        frustrations={[
                            'Fica irritada quando tem problemas na entrega de mercadorias',
                            'Ter que comprar remédios presencialmente somente pelo motivo de ter que apresentar receita'
                        ]}
                        problemScenarium={[
                            {
                                problem: "Ana conseguiu um tempo em seu trabalho. Ela tem que ir à farmácia comprar os remédios para a sua avó, que no momento está dormindo. Não consegue lembrar do nome dos remédios que deve comprar. Procura por prescrições médicas antigas mas não consegue encontrar, pensa em ligar para o médico mas já é tarde da noite. Então decide ir à farmácia. Chegando lá, perde tempo indo em diferentes seções para encontrar os remédios que havia comprado das outras vezes. Consegue encontrar alguns com a ajuda do farmacêutico, mas não outros. Irritada e depois de um grande tempo procurando, desiste e vai embora para casa.",
                                tasks: [
                                    {
                                        objective: 'encontrar o nome do remédio que não consegue se lembrar',
                                        methods: [
                                            {
                                                name: 'Utilizar seção de histórico de pedidos da Home',
                                                operators: [
                                                    'scrollar tela até seção de "Histórico de pedidos"',
                                                    'verificar se remédio que busca está na seção',
                                                    'clicar no remédio e fazer compra'
                                                ]
                                            },
                                            {
                                                name: 'Utilizar histórico de pedidos na tela de Pedidos',
                                                operators: [
                                                    'navegar para tela de "Pedidos" no menu de navegação',
                                                    'visualizar resultados e histórico de pedidos',
                                                    'clicar em comprar produto desejado',
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                problem: "Ana acaba de terminar um trabalho da faculdade e decide comprar remédios para sua avó. Está faltando dois remédios apenas, os quais a sua avó consegue se recordar dos nomes, então ela vai na internet, pega o contato da farmácia mais perto, faz a ligação e realiza o pedido dos dois remédios. O pedido chega uma hora atrasado. E então ela lamenta pelo fato de que o prazo de entrega informado pela farmácia estava errado.",
                                tasks: [
                                    {
                                        objective: 'comprar remédio sem ter problema na entrega.',
                                        methods: [
                                            {
                                                name: 'Verificar a avaliação dos usuários da farmácia que irá comprar',
                                                operators: [
                                                    'clicar na lupa na barra de navegação',
                                                    'digitar o nome do remédio na barra',
                                                    'clicar no remédio desejado',
                                                    'visualizar página de detalhe do remédio',
                                                    'clicar no nome da farmácia',
                                                    'visualizar página de detalhe da farmácia',
                                                    'clicar na nota de avaliações da farmácia',
                                                    'visualizar resultados de avaliações e procurar sobre as informações que deseja'
                                                ]
                                            },
                                            {
                                                name: 'Utilizar a função de gps em tempo real do entregador',
                                                operators: [
                                                    'navegar para tela de "Pedidos" no menu de navegação',
                                                    'clicar em "ver detalhe" de pedido em andamento',
                                                    'visualizar gps com localização do entregador'
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]}
                        
                    />
                    <PersonaContent
                        image={Persona3Image} 
                        name="Matheus"
                        age={23}
                        job="Desenvolvedor de Software"
                        education="Graduando"
                        familiarStatus="Solteiro, não tem filhos"
                        slogan="Como estou sempre atarefado, quero ter sempre o menor esforço possível e, sempre que preciso, espero contar com profissionais que possam me auxiliar a chegar nos meus resultados de forma rápida e eficiente."
                        description={(
                            <>
                                <p>Matheus tem uma vida muito ocupada devido ao seu trabalho e faculdade. Sempre que possível utiliza diferentes tecnologias, sendo as mais frequentes o computador e o celular. Não gosta de sair de casa para resolver problemas e, para comprar alguma mercadoria desejada, utiliza de aplicativos ou sites. Tem poucos problemas de saúde, costuma comprar remédios somente quando tem uma dor de cabeça forte ou fica resfriado e quando fica doente e vai ao médico. Ele sempre se preocupa com o que está comprando online e tem costume de ler bastante para ter certeza do que está fazendo.</p>
                                <p>Costuma ficar acordado até de madrugada realizando suas tarefas, então quando se sente mal à essas horas, precisa de uma farmácia disponível com entrega rápida em domicílio. Mas se não encontrar, ele sai de carro à procura de farmácias próximas. Nas ocasiões em que ele vai ao médico e lhe é passado alguma prescrição médica, ele preza muito pelo contato da farmácia, pois necessita de um farmacêutico para ajudá-lo na compra.</p>
                            </>
                        )}
                        objectives={[
                            'Quer comprar o remédio de maneira rápida e eficiente',
                            'Buscar remédios que são receitados pelo médico ou que solucionam sua dor de cabeça ou resfriado, e nesse último caso o nome do remédio não importa.',
                            'Ser instruído na compra do remédio.'
                        ]}
                        abilities={[
                            'Sabe mexer muito bem com tecnologia',
                            'Tem costume de usar aplicativos de compra'
                        ]}
                        frustrations={[
                            'Fica irritado quando o aplicativo tem muitos procedimentos burocráticos e costuma procurar outro.',
                            'Esquece frequentemente o nome do remédio e a dosagem que utilizou'
                        ]}
                        problemScenarium={[
                            {
                                problem: "Matheus está trabalhando, sente uma dor de cabeça muito forte e, já que seu estoque de remédios acabou, tem que interromper o que está fazendo para comprar remédios o mais rápido possível e então conseguir resolver seu problema. Como não tem um nome de remédio específico em mente, opta por ir até farmácia.  Ele procura pela seção de remédios para dor de cabeça e faz a compra de alguns. Saindo da farmácia ele se lamenta pensando que gastou tempo e dinheiro com gasolina.",
                                tasks: [
                                    {
                                        objective: 'comprar remédios para dor de cabeça sem saber o nome',
                                        methods: [
                                            {
                                                name: 'Utilizar a função de recomendados da home do aplicativo',
                                                operators: [
                                                    'scrollar página até encontrar seção de recomendados',
                                                    'clicar em uma opção de remédio',
                                                    'visualizar tela de detalhe do remédio',
                                                    'ler descrição do remédio e verificar categoria'
                                                ]
                                            },
                                            {
                                                name: 'Utilizar a categoria de dor e febre do aplicativo',
                                                operators: [
                                                    'navegar para a tela de "Busca" no menu de navegação',
                                                    'clicar em filtro',
                                                    'escolher a categoria de dor e febre',
                                                    'visualizar resultados de busca',
                                                    'escolher o remédio que deseja'
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                problem: "Matheus tem uma prescrição médica em mãos, não consegue entender bem a escrita do médico, então quer tirar dúvidas com o farmacêutico para ter certeza de que está comprando o remédio certo com a dosagem correta. Logo, sai de carro para procurar uma farmácia, demora muito para encontrar alguma, e quando encontra, para sua infelicidade, não tem estacionamento perto, então ele tem que sair pela cidade procurando por alguma que tenha e acaba encontrando mas depois de muito tempo e dinheiro com gasolina gasto.",
                                tasks: [
                                    {
                                        objective: 'encontrar o endereço de uma farmácia que tenha estacionamento próximo.',
                                        methods: [
                                            {
                                                name: 'Utilizar a função de filtros na lista de farmácias',
                                                operators: [
                                                    'clicar no “ver mais” nas farmácias próximas da Home',
                                                    'clicar no botão de filtro',
                                                    'escolher o filtro de estacionamento próximo',
                                                    'verificar resultados da busca',
                                                    'clicar na farmácia que deseja',
                                                    'visualizar tela do detalhe da farmácia',
                                                    'verificar seção de estacionamentos próximos',
                                                    'verificar opções de estacionamento no mapa disponível'
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            },
                        ]}
                    />
                </main>

                <div className={styles.nextPage}>
                    <div>
                        <LinkCard 
                            title='Prototipação'
                            link='/prototipacao'
                            fitContent
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
