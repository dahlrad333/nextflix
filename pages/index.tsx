
import FlickList from '../components/FlickList'
import Layout from '../components/Layout'

export default function Home() {

  return (
    <>
      <Layout>
        <div
          className={`w-full h-full flex flex-col justify-start items-center text-white pt-[8%]`}
        >
          <FlickList />
        </div>
      </Layout>
    </>
  )
}
