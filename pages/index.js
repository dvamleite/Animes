import Head from 'next/head'
import Menu from './components/menu'
import SearchPage from './components/search'

export default function Home() {
 
  return (
  <> 
   <Head>
      <title>Animes Catalog</title>
      <meta name="description" content="Catalog-animes animes  desenhos" />          
    </Head>

    <Menu />
    <SearchPage />

  </>   
  )
}
