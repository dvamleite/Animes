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

  <div className="info-content">       
       {animes.data && (          
          <ul className='box-info'>
            {animes.data.map((item) =>(              
              <li key={item.id}>             

              <section className='title'>
                <h1>{item.attributes.canonicalTitle}</h1>
              </section>

               <section className='info'>
               <img src={item.attributes.posterImage.small} 
                  alt={item.attributes.canonicalTitle}
                  />                  
                  <article>{item.attributes.description}</article>         
                </section>

            <section className='contentIf'>
              <li>
                    <section className='dates'>              
                      <h3>Start Date  {item.attributes.startDate}</h3>
                      <h3>End Date  {item.attributes.endDate}</h3>
                    </section>
                </li>

                <li>         
                    <section className='ep'>
                      <h3>Episode Count  {item.attributes.episodeCount}</h3>
                      <h3>Popularity Rank  {item.attributes.popularityRank}</h3>             
                    </section>
                </li>
            </section> 

            <li className='trailers'>
              <h2>Trailer</h2>
            <iframe 
              width="560" 
              height="315" 
              src={`https://www.youtube.com/embed/${item.attributes.youtubeVideoId}`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="
              accelerometer; 
              autoplay; 
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture"
              allowFullScreen>
            </iframe>
            </li>
          </li>             
            ))}
          </ul>                
        )}       
      </div> 
  </>   
  )
}
