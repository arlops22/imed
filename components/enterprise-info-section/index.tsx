import Image, { StaticImageData } from 'next/image'

import styles from './enterprise-info-section.module.scss'

interface EnterpriseInfoSectionProps {
    logoSource?: StaticImageData,
    name: string,
    localization: string,
    size: number,
    description: string,
    positivePoints: string[],
    negativePoints: string[],
    appSource?: StaticImageData
}

const EnterpriseInfoSection = (props: EnterpriseInfoSectionProps) => {
    const { logoSource, name, localization, size, description, positivePoints, negativePoints, appSource } = props

    return (
        <div className={styles.container}>
            <h3>Perfil da empresa</h3>
            {logoSource && 
                <Image 
                    src={logoSource}
                    height={300}
                    width={400}
                    className={styles.logoImg}
                />
            }
            <div className={styles.infoContent}>
                <h3>Informação da Empresa</h3>
                <p><strong>Nome: </strong>{name}</p>
                <p><strong>Localização: </strong>{localization}</p>
                <p><strong>Tamanho da empresa: </strong>{size} funcionários</p>
            </div>

            <div className={styles.infoContent}>
                <h3>Descrição</h3>
                <p>{description}</p>
            </div>
            {appSource && 
                <div className="d-flex justify-content-center">
                    <Image 
                        src={appSource}
                        className={styles.appImage}
                        height={400}
                        width={200}
                    />
                </div>
            }
            <div className={styles.infoContent}>
                <div>
                    <ul>
                        <h3>Pontos Positivos</h3>
                        {positivePoints.map((item, index) => (
                            <li key={`point-${index}`}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <h3>Pontos Negativos</h3>
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