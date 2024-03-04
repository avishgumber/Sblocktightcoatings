import React from 'react';
import Image from 'next/image'

interface productCardInterface {
    title: string,
    paragraph: string,
    imgSrc: any
}

const productCard:React.FC<productCardInterface> = ({title, paragraph, imgSrc}) => {
    return (
                    <div className="p-6 rounded-lg shadow-lg flex flex-col bg-gray-900 border-2">
                    <Image className='object-cover ' 
                        src= {imgSrc}
                        alt = "sample"
                        height={400}
                        width={400}
                    />
                       <h3 className="text-xl font-semibold mb-2 w-4">{title}</h3>
                       <p className="text-sm mb-4 w-4 h-4 overflow-hidden">{paragraph}</p>
                    </div>
    )
}

export default productCard
