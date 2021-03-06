import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'

import style from './persona-content.module.scss'


interface problemScenariumType {
    problem: string,
    tasks: any
}

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
    problemScenarium: problemScenariumType[]
}

const PersonaContent = (props: Props) => {
    const { image, name, age, job, education, familiarStatus, slogan, description, objectives, 
        abilities, frustrations, problemScenarium } = props

    return (
        <div className={style.personaContent}>
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex align-items-center flex-column">
                        <Image
                            // loader={myLoader}
                            src={image}
                            // height={300}
                            // width={600}
                            alt=""
                        />
                        <p className={style.slogan}>{slogan}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h2>{name}</h2>
                        <div className={style.mainInfo}>
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
                                    <p>Educa????o:</p>
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
                        </div>
                        {description}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={style.objectives}>
                        <h4>Objetivo</h4>
                        <ul>
                            {objectives.map((objective: string, index: number) => (
                                <li key={`objective-${index}`}>
                                    <p>{objective}</p>
                                </li>
                            ))}
                        </ul>
                        <h4>Habilidades</h4>
                        <ul>
                            {abilities.map((ability: string, index: number) => (
                                <li key={`ability-${index}`}>
                                    <p>{ability}</p>
                                </li>
                            ))}
                        </ul>
                        <h4>Frustra????es</h4>
                        <ul>
                            {frustrations.map((frustration: string, index: number) => (
                                <li key={`frustration-${index}`}>
                                    <p>{frustration}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className={style.problemContainer}>
                    {problemScenarium.map((scenarium, index) => (
                        <>
                            <h3>Cen??rio Problema {index + 1}</h3>
                            <p>{scenarium.problem}</p>

                            <div className="d-flex align-items-center justify-content-between">
                                <h3>Tarefas</h3>
                                <Link href='/prototipacao'><a>Ver Prot??tipo</a></Link>
                            </div>
                            <div className={style.tasks}>
                                {scenarium.tasks.map((task: any, index: number) => (
                                    <>
                                        <p><strong>Objetivo {index + 1}:</strong> {task.objective}</p>
                                        <ul className={style.methods}>
                                            {task.methods.map((method: any, index: number) => (
                                                <>
                                                    <p><strong>M??todo {index + 1}:</strong> {method.name}</p>
                                                    <ul className={style.operator}>
                                                        {method.operators.map((operator: any, index: number) => (
                                                            <>
                                                                <p><strong>Operador {index + 1}:</strong></p>
                                                                <p style={{marginLeft: '20px'}}>- {operator}</p>
                                                            </>
                                                        ))}
                                                    </ul>
                                                </>
                                            ))}
                                        </ul>
                                    </>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PersonaContent