import React from 'react'
import styles from '../styles/Home.module.css'
import Menu from '../pages/menu.js'

export default function Sobre() {
    return (

        <div className={styles.container}>

            <Menu></Menu>
            <h2 className={styles.title}>
                Sobre
          </h2>
          <p>Este site foi desenvolvido por Tiago Muller Pereira para fins educativos, utilizando o framework
              Next JS.
          </p>
          <p>
              Para consulta dos filmes foi utilizado a API Themoviedb.org disponível gratuitamente para fins não comerciais.
          </p>
            <main className={styles.main}>
            </main>

        </div>
    )
}

