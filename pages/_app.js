import '../styles/globals.css'
import { Metrics } from '@layer0/rum'

new Metrics({
  token: 'your-token-here',
}).collect()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
