import Section5 from './section5'

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


export default function HeroBanner() {
  return (
    <>
    <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">WELCOME TO OM LOCKIGHT SEALING SYSTEM</h2>
            </div>
    <div className='flex flex-row'>
    {data.map((item, index) => (<Section5
    key={index}
    title={item.title}
    paragraph={item.paragraph}
    imgSrc={item.imageSrc}
    />
    
    ))}
    </div>
    </>
  );
}