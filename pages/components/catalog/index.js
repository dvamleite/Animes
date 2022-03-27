import Menu from '../menu'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const api = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=`
var numItens = 100

export default  function Catalog(props) {
  const [animes, setAnimes] = useState({})
  const [itensForPage, setItensForPage] = useState(0) 

  useEffect(() =>{
    fetch(`${api}${itensForPage}`)    
    .then((response) => response.json())
    .then((response) =>{
      setAnimes(response) 
      console.log(response)                   
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
              <Link key={item.id} href={`/animeInfo/${item.id-1}`}>                
                  <li key={item.id}>
                    <img src={item.attributes.posterImage.small} 
                    alt={item.attributes.canonicalTitle}
                    />                
                    <span>{item.attributes.canonicalTitle}</span>
                  </li>
              </Link> 
            ))}
          </ul>                
        )} 
       </>
      </div>

      <section className="btn-controller">
            <button className='button' id="back" disabled ={ itensForPage <= 0 }  onClick={() => setItensForPage(itensForPage - 20)}><span>Anterior</span></button>
            <button className='button' id="next" onClick={() => setItensForPage(itensForPage + 20)} ><span>Proximo</span></button>
      </section>

  </>   
  )
}
