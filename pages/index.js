import Head from 'next/head'
import { useEffect, useState } from 'react'
import Menu from './components/menu'
import Search from './components/search'
import Link from 'next/link'

let api = `https://kitsu.io/api/edge/anime?filter[text]=`;


export default function Home() {
  const [text, setText] = useState('');
  const [info, setInfo] = useState({});
  
  useEffect(() =>{
      if(text){
          console.log(text);
          fetch(`${api}${text}`).then((response) => response.json())
          .then((response) =>{
              setInfo(response);
              console.log(response)                                          
          }) 
      }
  },[text])

  return (
  <>  
  <Menu />
        <Head>
          <title>Animes Catalog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className='search-content'>
          <Search 
                  className="boxtext"                 
                  value={text}                 
                  onChange={(search) => setText(search)}
            />
        </section>

        <main className="card-content"> 

             {info.data && (
                       <ul className="box-content">                    
                          {info.data.map((anime) =>(
                              <Link key={anime.id} href={`../animeInfo/${anime.id - 1}`}>
                                  <li key={anime.id}>
                                        <img src={anime.attributes.posterImage.small} 
                                        alt={anime.attributes.canonicalTitle} />
                                        <h3>{anime.attributes.canonicalTitle}</h3>                                    
                                  </li>
                             </Link>
                          ))}
                       </ul>
                   )}   
      
        </main>
  </>   
  )
}
