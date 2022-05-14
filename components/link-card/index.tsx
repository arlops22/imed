import Link from 'next/link'

import styles from './link-card.module.scss'

interface LinkCardProps {
    title?: string,
    description?: string,
    link: string,
    fitContent?: boolean
}

const LinkCard = (props: LinkCardProps) => {
    const { title, description, link, fitContent } = props

    return (
        <Link href={link}>
            <a className={`${styles.card} ${fitContent && styles.cardFitContent}`}>
                <h2>{title} &rarr;</h2>
                <p>{description}</p>
            </a>
        </Link>
    )
}

export default LinkCard