import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Menu from '../pages/menu.js'

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Menu></Menu>
        <h2 className={styles.title}>
          Bem-vindo ao CinemaNext.
        </h2>
        <p>Aqui você pode consultar seus filmes preferidos, utilizando uma completa base de dados.</p>
        <p>Você também pode conferir os filmes que estão em destaque atualmente.</p>
        <main className={styles.main}>

        </main>
    </div>
  )
}

export async function getServerSideProps(){

  const res = await fetch('https://cinemanext.vercel.app/api/trending');
  const json = await res.json();

  return {
    props:{
      list: json.list
    }
  };
}
