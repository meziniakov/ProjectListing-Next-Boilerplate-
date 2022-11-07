import '../styles/global.css'

import type { AppProps } from 'next/app'

import { Layout } from '@/layouts/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
