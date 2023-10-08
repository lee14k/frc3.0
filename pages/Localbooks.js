import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"
export default function Localbooks() {

  return (
    <div className="bg-white ">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 flex justify-center">Local Treasures</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-1">
            <div>
              <p>
              Looking for a tale straight from the Hiawatha? A thrilling novel set on the shores of Lake Superior? A book of poetry that will make you feel like you're walking through the woods? What about a riveting fantasy or science fiction novel written by a local great? We've got it all. Our selection of locally authored books is sure to please any reader. Keep an eye out for signings and meet-and-greets too!
              </p>
         
            </div>
          </div>
        
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="/bookshelves.jpg"
            alt=""
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
