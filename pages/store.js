import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"
import {ProductBrowser} from '@ecwid/nextjs-ecwid-plugin'

export default function Store () {
    return (
        <div>
            <Navbar/>
  <ProductBrowser
        storeId="7579020"
      />
      <Footer/>
        </div>
    )
}