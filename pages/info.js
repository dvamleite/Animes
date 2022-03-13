import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const api = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`

//img = {item.attributes.posterImage}

export default function Home() {
  const [animes, setAnimes] = useState({})

  useEffect(() =>{
    fetch(`${api}`)
    .then((response) => response.json())
    .then((response) =>{
      setAnimes(response)           
    })   
  })


  return (
    <div className={styles.container}>     

      <main className={styles.main}>        

      {animes.data && (
        <ul className='box-content'>
          {animes.data.map((item) =>(
            <li key={item.id}>

              <img src={item.attributes.posterImage.small} />
              
              <h1>{item.attributes.canonicalTitle}</h1>              
              
              <article>{item.attributes.description}</article>
              
              <h3>Popularidade: {item.attributes.popularityRank}</h3>
              <h3>Numero de Episodios: {item.attributes.episodeCount}</h3>
              <h3>Data de Lançamento: {item.attributes.endDate}</h3>
              
            </li>
          ))}
        </ul>
        
      )}
    
      </main>
     
    </div>
  )
}
