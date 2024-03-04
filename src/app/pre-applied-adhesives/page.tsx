import Image from "next/image";
import type { Metadata } from "next";
import ProductCard from '../../components/ProductCard'

export const metadata: Metadata = {
    title: "pre-applied-adhesives",
    description: "about pre-applied-adhesives",
  };

  const data = [
    {
      title: 'Pre Applied Adhesives',
      paragraph: 'thread sealing is used to close metal fitting surfaces. this technology is ideal for joints, which are considered to be dynamic due to vibration, changing pressures or changing temperatures like drain plugs.',
      imageSrc: '/images/hero.jpg'
    },
    {
      title: 'Inert Sealing',
      paragraph: 'Whether sealing sheet metal, fastener threads, or under the head of fasteners, we have process that will meet your requirements.',
      imageSrc: '/images/hero.jpg'
    },
    {
      title: 'Nd patch',
      paragraph: 'Nd patch could also be a pre-applied process which fuses a nylon threadlocking coating to internal or external threads of fasteners making them self locking and self sealing ( also mentioned as prevailing torque type fasteners)',
      imageSrc: '/images/hero.jpg'
    },
    {
      title: 'ST3 Thread Sealent',
      paragraph: 'ST-3 is a preapplied process whereby a series of resileint thread sealants are coated onto straight or tapered threaded fasteners.',
      imageSrc: '/images/hero.jpg'
    }
  ]

  export default function PreAppliedAdhesives() {
    return (
        <div className="my-20">
            <div className="flex justify-center">
                <h1 className="mb-8 lg:pl-8 text-center">
                    About <span className="text-light-gray">Pre-applied-adhesives</span>

                </h1>
            </div>
            <div>
            <div className='flex flex-row'>
              {data.map((item, index) => (<ProductCard
                key={index}
                title={item.title}
                paragraph={item.paragraph}
                imgSrc={item.imageSrc}
    />
    
    ))}
    </div>
    </div>

</div>
    )
  }

