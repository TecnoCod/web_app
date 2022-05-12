import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
      <Head>
        <title>Web App - {pagina}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        guitarra={guitarra}
      />

      {children}

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  guitarra:null
}

export default Layout