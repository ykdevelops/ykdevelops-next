import '../styles/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}
