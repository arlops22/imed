import Image from 'next/image'

import styles from './enterprise-info-section.module.scss'

interface EnterpriseInfoSectionProps {
    logoSource?: string,
    name: string,
    localization: string,
    size: number,
    description: string,
    positivePoints: string[],
    negativePoints: string[],
    appSource?: string
}

const EnterpriseInfoSection = (props: EnterpriseInfoSectionProps) => {
    const { logoSource, name, localization, size, description, positivePoints, negativePoints, appSource } = props

    return (
        <div className={styles.container}>
            <h3>Perfil da empresa</h3>
            {logoSource && 
                <Image 
                    src={logoSource}
                />
            }
            <div>
                <h3>Informação da Empresa</h3>
                <p><strong>Nome: </strong>{name}</p>
                <p><strong>Localização: </strong>{localization}</p>
                <p><strong>Tamanho da empresa: </strong>{size}</p>
            </div>

            <div>
                <h3>Descrição</h3>
                <p>{description}</p>
            </div>
            <div>
                {appSource && 
                    <Image 
                        src={appSource}
                    />
                }
                <div>
                    <h3>Pontos Positivos</h3>
                    <ul>
                        {positivePoints.map((item, index) => (
                            <li key={`point-${index}`}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <h3>Pontos Negativos</h3>
                    <ul>
                        {negativePoints.map((item, index) => (
                            <li key={`point-${index}`}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseInfoSection