import { useEffect, useState } from 'react'
import Menu from './components/menu'
import Link from 'next/link'

const api = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`


export default function Catalog(props) {
  const [animes, setAnimes] = useState({})

  useEffect(() =>{
    fetch(`${api}`)
    .then((response) => response.json())
    .then((response) =>{
      setAnimes(response)           
    })   
  })

  return (
  <>
  <Menu />

  <div className="card-content">     

       <>
       {animes.data && (
          
          <ul className='box-content'>
            {animes.data.map((item) =>(
              <Link href={`../animeInfo/${item.id - 1}`}>                
              <li key={item.id}>
                <img src={item.attributes.posterImage.small} />                
                <span>{item.attributes.canonicalTitle}</span>
              </li>
              </Link> 
            ))}
          </ul>
                
        )} 
       </>
      </div>
  
  </>   
  )
}
