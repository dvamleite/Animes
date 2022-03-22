import React from 'react'
import Menu from '../menu'
import Link from 'next/link'

const api = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=`
let numItens = 0

export async function getStaticProps(context){
    const animes = await fetch(`${api}${numItens}`)
      .then((response) => {
        if(response.ok){
          return response.json()
        }
      })
      .then((respon) =>{
        return respon
      })    

  return{
    props:{
      animes     
    },
  }
}

export default function Catalog(props) {
 const { animes } = props

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
                <button className='button' id="back"  onClick={Back}><span>Anterior</span></button>
                <button className='button' id="next" onClick={Next}><span>Proximo</span></button>
      </section>

  </>   
  )
}
