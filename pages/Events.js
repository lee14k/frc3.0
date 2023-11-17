import Navbar from '@/Components/Navbar'
import Eventcontact from '@/Components/Eventcontact'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Small crowds',
    description:
      'Casual, intimate crowds and events are our speciality. Relax and enjoy the show.',
  
  },
  {
    name: 'Variety of events',
    description: 'From live music to book signings and suthor meet & greets, we have something for everyone.',
  },

]

export default function Events() {
  return (
    <>
            <Navbar/>

    <div className="overflow-hidden bg-white py-14 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Events</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
            Live music and community events have become a regular occurrence at the Falling Rock in Munising, Michigan. Special events for children, book lovers, and artists are also regularly featured. 


              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="./events.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>

 
    
  <Eventcontact/>
    </div>
    </>
  )
}
