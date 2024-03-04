import React from 'react';
import Image from 'next/image'

interface section2Interface {
    title: string,
    paragraph: string,
    iconSrc: any
}

const section2:React.FC<section2Interface> = ({iconSrc, title, paragraph}) => {
    return (
            <div className='flex flex-col justify-center items-center w-full h-full p-4'>
                <div className='text-center'>
                {iconSrc}
                <h3 className='uppercase text-2xl text-black-500'>{title}</h3>
                <p>{paragraph}</p>
                </div>
                
            </div>  
    )
}

export default section2
