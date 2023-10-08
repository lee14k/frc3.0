import Navbar from "Components/Navbar";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import Footer from "@/components/Footer";
export default function Books() {
  const features = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: LockClosedIcon,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: ServerIcon,
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Books
                </p>
                <p className="mt-10 text-lg leading-8 text-gray-600">
                  The bookstore at the Falling Rock Café has more than 30,000
                  new, used and rare Books, free wireless internet, and hosts
                  regular art, music and community events. Come enjoy a cup of
                  coffee with a book in Munising’s Living Room, just 1 block
                  south of the Munising city dock off beautiful Lake Superior!
                  The Upper Peninsula’s Most Unique Bookstore The Falling Rock
                  Cafe works very hard to provide a diverse selection of new and
                  used books. We literally have something for everyone—but don’t
                  take our word for it. Come see for yourself! You can also
                  browse our collection in our Online Bookstore. We are one of
                  the Upper Peninsula’s most unique bookstores.
                </p>
                <p className="mt-20 text-lg leading-8 text-gray-600">
                  The Falling Rock Cafe works very hard to provide a diverse
                  selection of new and used books. We literally have something
                  for everyone—but don’t take our word for it. Come see for
                  yourself! You can also browse our collection in our Online
                  Bookstore. We are one of the Upper Peninsula’s most unique
                  bookstores.
                  With regular events celebrating authors includig meet & greets, and book signings, the Falling Rock Cafe is a great place to find your next favorite book. We also have a great selection of books for kids, and a large selection of books about our own beautiful backyard in the Upper Peninsula of Michigan.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                src="/frcbooks.jpeg"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
