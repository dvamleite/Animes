import { useEffect, useState } from 'react'
import Search from '../searchBar'
import Link from 'next/link'

let api = `https://kitsu.io/api/edge/anime?filter[text]=`

export default function SearchPage() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})
  
    useEffect(() =>{
      if(text){          
          fetch(`${api}${text}`).then((response) => response.json())
          .then((response) =>{
              setInfo(response)                                                       
          }) 
      }
  },[text]) 

  return (
  <>    

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
