import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

interface section1Interface {
    title: string,
    paragraph: string,
    link: string,
    imgSrc: any
}

const section1:React.FC<section1Interface> = ({title, paragraph, link, imgSrc}) => {

    return (
        <div className='flex flex-row'>
            <div className='w-[50vw]'>
                <h1 className='uppercase text-2xl text-yellow-500'>{title}</h1>
                <p>{paragraph}</p>
                <Link href={link}>
                    <a>View Details</a>
                </Link>
            </div>
            <div className='w-[50vw]'>
                <Image className='object-cover ' 
                src= {imgSrc}
                alt = "sample"
                height={400}
                width={400}
                />
            </div>
        </div>
    )
}

export default section1
