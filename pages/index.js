import Image from 'next/image'
import { Inter } from 'next/font/google'
import StoreFront from '../Components/StoreFront'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
<StoreFront/>
   </div>
  )
}
