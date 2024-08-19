"use client"

import Image from 'next/image';
import React from 'react';
import { trainingData } from './DetailData/page';


function DigitalMarketingCard() {
    return (
        <div className="lg:m-16 lg:p-6">
            {trainingData.map((data) => (
                <div key={data.id} className="bg-white border rounded-lg flex flex-col gap-2 lg:flex-row items-center lg:items-start mb-8">
                    <div className="lg:w-1/2 flex flex-col lg:flex-row items-center">
                        <div className="relative flex-shrink-0">
                            <Image
                                src={data.imageSrc}
                                alt={data.imageAlt}
                                className="rounded-lg md:w-400px md:h-300px"
                                width={500}
                                height={500}
                            />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white font-bold p-2 rounded-lg flex items-center">
                                <div className="flex items-center justify-center h-8 w-8 bg-white rounded-full text-orange-500">
                                    <span className="font-bold">{data.number}</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative right-20 bg-white p-2 rounded-lg flex items-center shadow-md">
                            <div className="bg-orange-500 text-white p-2 rounded-full">
                                {/* Insert your icon here */}
                            </div>
                            <div className="ml-2 text-gray-700">
                                <p className="font-semibold">{data.count}</p>
                                <p className="text-sm">{data.category}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="p-3 lg:w-1/2 lg:ml-8 mt-6 lg:mt-0">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                            {data.title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                            {data.description}
                        </p>
                        <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
                            {data.buttonText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DigitalMarketingCard;
