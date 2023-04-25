import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mandalart</title>
        <meta
          name="description"
          content="Mandalrt which makes your dreams come true"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        Hello mandalart 🌝
      </main>
    </>
  );
};

export default Home;
