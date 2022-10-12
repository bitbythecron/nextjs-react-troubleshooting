import Layout from '../components/layout'
import '../styles/globals.css'

function MyWebsiteApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

}

export default MyWebsiteApp
