import { ArticlesList } from '@/components/ArticlesList';
import { Header } from '@/components/Header';
import { PageContainer } from '@/components/PageContainer';
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Artigos Diários do Murilo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <PageContainer>
      <Header />
    <ArticlesList />
    </PageContainer>
    </>
  )
}
