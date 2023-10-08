import Image from "next/image";
import Link from "next/link";
function Midgrid() {
  return (
    <div className="container">
      <div className="grids">
        <div className="gridItemone"></div>

        <div className="one">
          <div className="oneframe  flex flex-col">
            <h1 className="header1 text-2xl">Local Books</h1>
            <p className=" mx-10">
              As a small business in the heart of the Upper Peninsula of Michiga, we are proud to carry and support the areas talented and diverse authors.
            </p>
            <Link href="/Localbooks">
            <button className="mt-10 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Learn more</button>
            </Link>
          </div>
        </div>

        <div className="two">
          <div className="oneframe flex flex-col">
            <h1 className="header2 text-2xl mb-10">Handcrafted Lattes</h1>
            <p className="mx-10"> Handcrafted coffee specialities</p>
            <Link href="/Coffee">
            <button className="mt-10 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Learn more</button>
            </Link>
          </div>
        </div>
                  <div className="gridItemtwo"></div>

      </div>
    </div>
  );
}

export default Midgrid;
