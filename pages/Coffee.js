import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"
export default function Coffee() {

  return (
    <div className="bg-white ">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 font-bold tracking-tight text-gray-900 flex justify-center text-6xl ">Coffee done right</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-1">
            <div>
              <p>
            Kick back and sip on a tasty latte. We have a wide selection of coffee and tea to choose from. Enjoy our free wifi and comfortable seating.  Falling Rock Cafe has got it all, a place where the pages of a good book are as comforting as a well-brewed coffee. Whether you're into thrilling mysteries or heartwarming novels, we've got a selection that'll make you want to stay awhile


              </p>
        
            </div>
         
          </div>
     
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="/grinder.jpg"
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
