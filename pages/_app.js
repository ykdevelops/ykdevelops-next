import '../styles/globals.css'
import '../styles/Home.mobile.css'
import '../styles/Home.desktop.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}
