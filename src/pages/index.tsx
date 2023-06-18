import { type NextPage } from 'next'
import Head from 'next/head'

import Mandalart from '@/components/Mandalart'
import { api } from '@/utils/api'

// eslint-disable-next-line @typescript-eslint/naming-convention
const Home: NextPage = () => {
  const MOCK_USER_ID = '임라임'
  const { data, isError, isLoading } =
    api.mandalart.getMandalarts.useQuery(MOCK_USER_ID)

  if (isLoading) return <div>로딩중...</div>
  if (isError) return <div>에러 발생</div>
  if (!data) return <div>데이터 없음</div>

  return (
    <>
      <Head>
        <title>Mandalart</title>
        <meta
          name="description"
          content="Mandalart which makes your dreams come true"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        Hello mandalart 🌝
        {data && data[0] && <Mandalart mandalart={data[0]} />}
      </main>
    </>
  )
}

export default Home
