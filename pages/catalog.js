import { useEffect, useState } from 'react'
import Menu from './components/menu'
import Link from 'next/link'

const api = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=`
let numItens = 0

export default function Catalog() {
  const [animes, setAnimes] = useState({})

  useEffect(() =>{
    fetch(`${api}${numItens}`)
    .then((response) => response.json())
    .then((response) =>{
      setAnimes(response)           
    })   
  })

  function Back(){
    numItens = numItens -20
  }

  function Next(){
    numItens = numItens +20
  }

  if(numItens < 0){
    numItens = 0
  }

  return (
  <>
  <Menu />
  <div className="card-content"> 
       <>
       {animes.data && (          
          <ul className='box-content'>
            {animes.data.map((item) =>(
              <Link key={item.id} href={`../animeInfo/${item.id-1}`}>                
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

      <section className="btn-controller">
                <button onClick={Back}>Anterior</button>
                <button onClick={Next}>Proximo</button>
      </section>
  </>   
  )
}
