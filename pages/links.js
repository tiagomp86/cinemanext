import React from 'react'
import styles from '../styles/Home.module.css'
import Menu from '../pages/menu.js'

export default function Links() {
    return (

        <div className={styles.container}>

            <Menu></Menu>
            <h2 className={styles.title}>
                Links
          </h2>

          <p><a href="https://developers.themoviedb.org">Documentação API - The Movie DB</a></p>
                <p><a href="https://nextjs.org">Next JS</a></p>
                <p><a href="https://pt-br.reactjs.org">React JS</a></p>


            <main className={styles.main}>
            </main>

        </div>
    )
}

