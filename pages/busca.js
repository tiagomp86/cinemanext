import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Menu from '../pages/menu.js'

export default function Home({list}) {

    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        if (searchText !== ''){
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await result.json();
            setMovieList(json.list);
        }
    }

  return (
    <div className={styles.container}>

      <Head>
        <title>Cinema Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>
      
        <h2 className={styles.title}>
          Busca
        </h2>
        <div className="painelBusca">
          <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} />
          <button className="rainbow-button" onClick={handleSearch}>Buscar</button>
        </div>
        <main className={styles.main}>
        <ul>
            {movieList.map(item=>(
                <li>
                    <a href={`/movie/${item.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br/>
                    {item.title}
                </a>
            </li>
            ))}
        </ul>
        </main>
    </div>
  )
}