import Section6 from './section6'

const data = [
  {
    title: 'Pre Applied Adhesives',
    paragraph: 'thread sealing is used to close metal fitting surfaces. this technology is ideal for joints, which are considered to be dynamic due to vibration, changing pressures or changing temperatures like drain plugs.',
  },
  {
    title: 'Inert Sealing',
    paragraph: 'Whether sealing sheet metal, fastener threads, or under the head of fasteners, we have process that will meet your requirements.',
  },
  {
    title: 'Nd patch',
    paragraph: 'Nd patch could also be a pre-applied process which fuses a nylon threadlocking coating to internal or external threads of fasteners making them self locking and self sealing ( also mentioned as prevailing torque type fasteners)',
  },
  {
    title: 'ST3 Thread Sealent',
    paragraph: 'ST-3 is a preapplied process whereby a series of resileint thread sealants are coated onto straight or tapered threaded fasteners.',
  },
  {
    title: 'ST3 Thread Sealent',
    paragraph: 'ST-3 is a preapplied process whereby a series of resileint thread sealants are coated onto straight or tapered threaded fasteners.',
  }
]


export default function HeroBanner() {
  return (
    <>
    <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">WELCOME TO OM LOCKIGHT SEALING SYSTEM</h2>
    </div>
    <div className='py-8 px-4 flex flex-row' >
        <p className='w-[50vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure nam quam, iusto dolorem dolor delectus doloremque explicabo architecto nisi quia provident accusantium quis corporis modi animi quisquam nihil molestiae.</p>
        <div className='w-[50vw] flex flex-col'>
          {data.map((item, index) => (<Section6
          key={index}
          title={item.title}
          paragraph={item.paragraph}
        />
        ))}
        </div>
    </div>
    </>
  );
}