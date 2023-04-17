import Layout from '@/components/layouts/layout'
import AboutSection from '@/components/sections/about'
import MainSection from '@/components/sections/main'

export default function Home () {
  return (
    <Layout>
      <MainSection />
      <AboutSection />
    </Layout>
  )
}
