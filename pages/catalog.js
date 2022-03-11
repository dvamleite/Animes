import { useEffect, useState } from 'react'
import Menu from './components/menu'

const api = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`

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
  <>
  <Menu />

  <div className="card-content">     

        {animes.data && (
          <ul className='box-content'>
            {animes.data.map((item) =>(
              <li key={item.id}>
                <img src={item.attributes.posterImage.small} />                
                <span>{item.attributes.canonicalTitle}</span>
              </li>
            ))}
          </ul>          
        )} 
 
      </div>
  
  </>   
  )
}
