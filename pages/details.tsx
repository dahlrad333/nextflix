import { useRouter } from 'next/router'
import FlickDetails from '../components/FlickDetails'
import Layout from '../components/Layout'

export default function Details() {

    const router = useRouter()

    const routeHome = () => {
        router.back()
    }

  return (
    <>
      <Layout>
        <div
          className={`w-full h-full flex flex-col justify-start items-center text-white p-[8%]`}
        >
            <button className={`w-full flex flex-row text-white pb-2`} onClick={()=>{routeHome()}}> {'<-'} back</button>

            <FlickDetails />
        </div>
      </Layout>
    </>
  )
}
