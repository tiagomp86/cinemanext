import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Menu from '../../pages/menu.js'

export default function MovieItem({ info }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>
      <h2 className={styles.title}>
        Detalhes
      </h2>
      <main className={styles.main}>
      <img src={`https://image.tmdb.org/t/p/original${info.poster_path}`} width="200" /><br/>
        <h3>{info.title}</h3>
        <p>Nota: {info.vote_average}</p>
        <p>{info.overview}</p>
        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400"></img>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {

  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();

  return {
    props: {
      info: json.info
    }
  };
}
