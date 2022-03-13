import { useEffect, useState } from 'react'
import Menu from '../components/menu'
import { useRouter } from 'next/router'

const api = `https://kitsu.io/api/edge/anime?page[limit]=1&page[offset]=`

export default function PageInfo() {
  const [animes, setAnimes] = useState({})  
  const router = useRouter()  
  let id = router.query.id

  useEffect(() =>{
    fetch(`${api}${id}`)    
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
