import Section2 from './section2'
import { GiBlackFlag } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";



const data = [
  {
    title: '10 YEARS OF EXPERIENCE',
    paragraph: 'Om Locktight Sealing system was established in 2016 by Mr. Aditya Goyal what started of as a small service provider in preapplied thradlocking adhesive segment in Rohtak And faridabad region of Haryana he has good working experience of 10 years in above field.',
    iconSrc: <GiBlackFlag />
  },
  {
    title: 'BEST INDUSTRY EXPERTS',
    paragraph: 'We have combine innovation with ND Industries and technology in India to deliver product solutions that are essential to countless industrial applications.',
    iconSrc: <IoPeople />
  },
  {
    title: 'FAST & EFFECTIVE SOLLUTIONS',
    paragraph: 'With the fully automatics machinery, skilled manpower & world-class products range with in  house R & D facility we provide the fastest service than others in the segment.',
    iconSrc: <IoMdTime />
  },
  {
    title: 'FLEXIBLE PRICING SYSTEM',
    paragraph: 'We strongly believe to deliver customer-friendly pricing as we more reasonable than others in this segment.',
    iconSrc: <LuSettings2 />
  }
]


export default function HeroBanner() {
  return (
    <div className='flex flex-row'>
      {data.map((item, index) => (
          <div key={index} className='mr-1 w-[300px] h-[300px]'>
              <Section2 
              title={item.title}
              paragraph={item.paragraph}
              iconSrc={item.iconSrc}
              />
        </div>
        ))}
    </div>
  );
}
