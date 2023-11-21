import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"
import Imagegallery from "@/Components/Imagegallery"
export default function Suites() {
  return (
    <>
            <Navbar/>

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Looking for the perfect vacation spot?</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
           Our Falling Rock Suites are conveniently located in the heart of downtown Munising, right above the Falling Rock Cafe & Bookstore. Guests can expect the same excellent customer service and comfort that the Falling Rock has provided to the community since 2003.

Each suites includes a kitchenette, living room, full bathroom, and range from one to two bedrooms. There are four rentable units above the cafe, which makes it perfect for larger groups looking to visit the Munising area!
              </p>
              <p className="mt-8">
               The Falling Rock Suites overlook Munising Avenue, and are just one block away from Munising Bay and the Pictured Rocks Boat Tours. The building you’ll be staying in is among 2 of the original 10 buildings built in 1896, and the entire building infrastructure was replaced in 2003; all upstairs units have been updated in 2019 for your comfort.
              </p>
            </div>
            <div>
              <p>
            Upon arrival, guests can enter the main building with a unique keypad code. Up the stairs (24 steps), there is a common area where you’ll find games, puzzles, books, and other essential information about the area. Your suite has it’s own unique keypad for a private entrance. 

Inside your suite, your living room contains a queen-sized sofa bed, along with a 50” television with access to  streaming services. The kitchenette is located in the first bedroom and includes: a microwave, toaster oven, fridge, coffee maker, and disposable utensils and dishware. Breakfast is not included (other than complimentary coffee ), but guests are more than welcome to visit the cafe downstairs for any meal. All linens are provided, including goose down comforters and 400 thread-count sheets. Both bedrooms have fans for your use and there is a portable AC unit to use in the summer, and hot water heat provided in the winter.
              </p>
              <p className="mt-8">
           
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="https://www.airbnb.com/users/show/425188208#site-content"
              className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
Find us on AirBnB            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <Imagegallery/>
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}
