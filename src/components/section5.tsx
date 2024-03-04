import React from 'react';
import Image from 'next/image'

interface section3Interface {
    title: string,
    paragraph: string,
    imgSrc: any
}

const section5:React.FC<section3Interface> = ({title, paragraph, imgSrc}) => {
    return (
        <div className="py-8 px-4">
                <div className='flex flex-row'>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col">
                    <Image className='object-cover ' 
                        src= {imgSrc}
                        alt = "sample"
                        height={400}
                        width={400}
                    />
                       <h3 className="text-xl font-semibold mb-2">{title}</h3>
                       <p className="text-sm mb-4">{paragraph}</p>
                    </div>
                </div>
        </div>
    )
}

export default section5
