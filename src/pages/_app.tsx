import { type AppType } from 'next/app'

import { api } from '@/utils/api'

import '@/styles/globals.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default api.withTRPC(MyApp)
