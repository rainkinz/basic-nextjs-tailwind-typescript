import Head from 'next/head';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ pageMeta, children }: { pageMeta?: any, children: ReactNode }) {
  const router = useRouter();
  const meta = {
    title: 'A basic Next.JS, TailwindCSS, Typescript template',
    description: `Start your Next.JS project, with a basic skeleton 
      rather than wasting the first couple of hours setting everything up from scratch`,
    type: 'website',
    siteName: 'Next.JS, TailwindCSS, starter',
    ...pageMeta
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content={`http://localhost:4000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}