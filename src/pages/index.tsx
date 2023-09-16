import Head from 'next/head'

import Mandalart from '@/components/MandalartBoard'
import { api } from '@/utils/api'

export default function Home() {
  const MOCK_USER_ID = '임라임'
  const { data, isError, isLoading } =
    api.mandalart.getMandalarts.useQuery(MOCK_USER_ID)

  const { mutate: reset } = api.mock.reset.useMutation({
    onError: (e) => {
      console.error(e)
    },
    onSuccess: (data) => {
      console.log('successed reset ===>>', data)
      alert('리셋 성공해쪙')
    },
  })

  const { mutate: createMockData } =
    api.mock.createMandalartMockData.useMutation({
      onError: (e) => {
        console.error(e)
      },
      onSuccess: (data) => {
        console.log('successed create ===>>', data)
        alert('목데이터 생성 완료해쪙')
      },
    })

  if (isLoading) return <div>로딩중...</div>
  if (isError) return <div>에러 발생</div>
  if (!data) return <div>데이터 없음</div>

  const createMockDataHandler = () => {
    const isConfirmed = confirm(
      '잠깐, 목데이터를 생성하면 기존 데이터는 다 리셋될거야!'
    )
    if (isConfirmed) {
      try {
        reset()
        createMockData()
      } catch (e) {
        console.error(e)
      }
    }
  }

  const resetHandler = () => {
    const isConfirmed = confirm('정말로 리셋할거야?8ㅁ8')
    if (isConfirmed) {
      try {
        reset()
      } catch (e) {
        console.error(e)
      }
    }
  }

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
      <main className="flex h-[100vh] w-[100vw] flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center">
          Hello mandalart 🌝
          <button onClick={createMockDataHandler}>목데이터 생성</button>
          <button onClick={resetHandler}>리셋 데이터</button>
        </div>
        {data && data[0] && (
          <div>
            <h1 className="text-[pink]">{data[0].content}</h1>
            <Mandalart mandalart={data[0]} />
          </div>
        )}
      </main>
    </>
  )
}
