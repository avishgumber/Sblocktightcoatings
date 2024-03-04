import React from 'react';
import Image from 'next/image'

interface section3Interface {
    title: string,
    paragraph: string,
    iconSrc: any
}

const section3:React.FC<section3Interface> = ({title, paragraph, iconSrc}) => {
    return (
        <div className='flex flex-row'>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col">
                       {iconSrc}
                       <h3 className="text-xl font-semibold mb-2">{title}</h3>
                       <p className="text-sm mb-4">{paragraph}</p>
                    </div>
        </div>
    )
}

export default section3
