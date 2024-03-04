import React from 'react';

interface section3Interface {
    title: string,
    paragraph: string
}

const section6:React.FC<section3Interface> = ({title, paragraph}) => {
    return (
        <div className="py-8 px-4">
                <div className='flex flex-col'>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col">
                       <h3 className="text-xl font-semibold mb-2">{title}</h3>
                       <p className="text-sm mb-4">{paragraph}</p>
                    </div>
                </div>
        </div>
    )
}

export default section6
