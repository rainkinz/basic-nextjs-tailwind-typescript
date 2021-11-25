import Hero from '@/components/Hero'
import Layout from '@/sections/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main>
      <Layout>
        <Hero />
      </Layout>
    </main>
  )
}

export default Home
