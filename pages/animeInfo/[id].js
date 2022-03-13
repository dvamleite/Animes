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
      console.log(response)                   
    })   
  })  

  return (
  <>
  <Menu />    

  <div className="info-content">       
       {animes.data && (          
          <ul className='box-info'>
            {animes.data.map((item) =>(              
              <li key={item.id}>
               <section className='info-img'>
                  <img src={item.attributes.posterImage.small} />                
               </section>

               <section className='info'>
                  <h1>{item.attributes.canonicalTitle}</h1>
                  <article>{item.attributes.description}</article>
               </section>
              </li>             
            ))}
          </ul>                
        )}       
      </div>  
  </>   
  )
}
