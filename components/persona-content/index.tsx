import Image, { StaticImageData } from 'next/image'
import React, { ReactElement } from 'react'

import style from './persona-content.module.scss'

interface Props {
    image: StaticImageData,
    name: string,
    age: number,
    job: string,
    education: string,
    familiarStatus: string,
    slogan: string,
    description: ReactElement,
    objectives: string[],
    abilities: string[],
    frustrations: string[],
    problemScenarium: string
}

const PersonaContent = (props: Props) => {
    const { image, name, age, job, education, familiarStatus, slogan, description, objectives, 
        abilities, frustrations, problemScenarium } = props

    return (
        <div className={style.personaContent}>
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <Image
                            // loader={myLoader}
                            src={image}
                            height={300}
                            width={600}
                        />
                        <p className={style.slogan}>"{slogan}"</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h2>{name}</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <p>Idade:</p>
                            </div>
                            <div className="col-md-6">
                                <p>{age}</p>
                            </div>
                            
                            <div className="col-md-4">
                                <p>Emprego:</p>
                            </div>
                            <div className="col-md-6">
                                <p>{job}</p>
                            </div>
                            
                            <div className="col-md-4">
                                <p>Educação:</p>
                            </div>
                            <div className="col-md-6">
                                <p>{education}</p>
                            </div>
                            
                            <div className="col-md-4">
                                <p>Status Familiar:</p>
                            </div>
                            <div className="col-md-6">
                                <p>{familiarStatus}</p>
                            </div>
                        </div>
                        {description}
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>Objetivo</h4>
                    <ul>
                        {objectives.map((objective: string) => (
                            <li>
                                <p>{objective}</p>
                            </li>
                        ))}
                    </ul>
                    <h4>Habilidades</h4>
                    <ul>
                        {abilities.map((ability: string) => (
                            <li>
                                <p>{ability}</p>
                            </li>
                        ))}
                    </ul>
                    <h4>Frustrações</h4>
                    <ul>
                        {frustrations.map((frustration: string) => (
                            <li>
                                <p>{frustration}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-md-8">
                <h3>Cenário Problema</h3>
                <p>{problemScenarium}</p>
            </div>
        </div>
    )
}

export default PersonaContent