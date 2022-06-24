import React from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
        <Link href='/'>
            <a><h3>fastmed</h3></a>
        </Link>

        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/inspiracao'>
                    <a>Inspiração</a>
                </Link>
            </li>
            <li>
                <Link href='/ideacao'>
                    <a>Ideação</a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header