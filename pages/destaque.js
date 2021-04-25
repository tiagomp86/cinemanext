import React from 'react'
import styles from '../styles/Home.module.css'
import Menu from '../pages/menu.js'

export default function Destaque({list}) {
    return (
        <div className={styles.container}>
          <Menu></Menu>
          <h2 className={styles.title}>
            Filmes em Destaque
          </h2>
          <main className={styles.main}>
          <ul>
            {list.map(item=>(
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

export async function getServerSideProps(){

    const res = await fetch('https://cinemanext.vercel.app/api/trending');
    const json = await res.json();
  
    return {
      props:{
        list: json.list
      }
    };
  }
  