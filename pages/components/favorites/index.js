import { useEffect, useState } from 'react'
import Menu from '../menu'
import { useRouter } from 'next/router'

const api = `https://kitsu.io/api/edge/anime?page[limit]=`

//armazenar aki os id dos favoritos
var idf = [localStorage.getItem('lista_Salva')]

export default function Favorites() {
  const [animes, setAnimes] = useState({})  
  const router = useRouter()  
  let id = router.query.id 

  useEffect(() =>{
    fetch(`${api}${idf.length}&page[offset]=${idf}`)    
    .then((response) => response.json())
    .then((response) =>{
      setAnimes(response)            
    })   
  },[idf]) 
  
  return (
  <>
  <Menu />    

  <div className="favorite-content">  

              <section className='title'>
                <h1>Favorites List</h1>
                <h1>Total de Favorites {idf.length}</h1>
              </section>

       {animes.data && (          
          <ul className='box-favorite'>
            {animes.data.map((item) =>(              
              <li key={item.id}> 

                 <section className='info-favorite'>                   
                    <img src={item.attributes.posterImage.small} 
                        alt={item.attributes.canonicalTitle}                       
                  />                        
                </section>            

              <section className='title-favorite'>
                <h1>{item.attributes.canonicalTitle}</h1>
                <h3>Episode Count  {item.attributes.episodeCount}</h3>
              </section>

              <div className='btn-content'>
                <span>FAVORITES</span>
                <button className='btn-remove'>Remove</button>
            </div>

          </li>              
              
            ))}
          </ul>                
        )}       
      </div> 
  </>   
  )
}
