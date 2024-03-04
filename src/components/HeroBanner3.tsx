import { IoIosLeaf } from "react-icons/io";
import Section3 from './section3'



const data = [
  {
    title: 'CAPABILITY',
    paragraph: 'With the fully automatics coating center & 24 hours of working capacity we deliver the quality products with satisfactory supply system.',
    iconSrc: <IoIosLeaf />
  },
  {
    title: 'SUSTAINABILITY',
    paragraph: 'Om Locktight Sealing System has a long-standing commitment to sustainability and it is a core value of our company.',
    iconSrc: <IoIosLeaf />
  },
  {
    title: 'FEATURES COMPARISION',
    paragraph: 'We are committed to provide low cost adhesives to Indian customers coupled with consistent quality.',
    iconSrc: <IoIosLeaf />
  },
  {
    title: 'INTEGRITY',
    paragraph: 'While our products are RHO certified in terms of application & better performence we strongly recommend to feel free choose Om Locktight Sealing System.',
    iconSrc: <IoIosLeaf />
  }
]


export default function HeroBanner() {
  return (
    <div className="py-8 px-4">
    <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">WELCOME TO OM LOCKIGHT SEALING SYSTEM</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">ABOUT OUR COMPANY</h3>
                    <p className="text-sm mb-4">
                        <span>Om Locktight Sealing System is  authorised service provider of ND industries.Nd industries is a manufacturer of solutions for locking, bonding, sealing, masking, lubricating, and assembling fasteners.</span>
                        <span>ND pre-applies any of a wide selection of custom manufactured materials onto fasteners, so that they are ready to use at the point of assembly. this results in reduced labor costs, time savings, and quality assurance for our customers.</span>
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">More About our company</button>
                </div>
    <div>
    {data.map((item, index) => (<Section3
    key={index}
    title={item.title}
    paragraph={item.paragraph}
    iconSrc={item.iconSrc}
    />
    
    ))}
    </div>
    <div>
                    <h3 className="p-6 rounded-lg shadow-lg">Sachin Gumber</h3>
                    <p className="mb-2">CEO</p>
                    <p className="text-sm mb-4">More than being a global player, I always perceived my company as a unit that could make a difference with its quality and competitively priced products. Overcoming challenge after challenge with the support of my brilliant team, I have been successful in bringing OLSS to a new milestone of global recognition.</p>
                    <p className="text-sm">Tel: 9992034052</p>
                </div>
                </div>
                </div>
  );
}