'use client'
import Image from "next/image"
import { CalendarIcon, LocationIcon } from "public/icon";
import educationData from "app/data/educationData.json"

export function Education() {
    return (
        <section className=' flex flex-row justify-center w-full'>
            <div className="containter lg:mx-auto space-y-6 justify-center w-full">
                {educationData.map((edu, index) => (
                    // Card view for each education experience
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row shawdow-md rounded-lg overflow-hidden w-full
                        lg:transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-150
                        shadow-lg">
                        {/* Image of the school */}
                        <a href={edu.slug} className="w-full lg:w-1/2">
                            {edu.image && (
                                <div className="relative">
                                    <Image
                                        src={edu.image}
                                        alt={edu.school}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover grayscale z-0"
                                        style={{ aspectRatio: '3/2', width: '100%', height: '100%', maxHeight: '300px' }}

                                    />
                                    <Image
                                        src={edu.logo}
                                        alt={edu.school}
                                        width={250}
                                        height={150}
                                        className="z-10 bottom-5 left-5 absolute"
                                        style={{ width: 'auto' }}
                                    />
                                </div>
                            )}
                        </a>
                        {/* School Info */}
                        <div className="lg:w-1/2 w-full p-4 flex flex-col justify-between">
                            {/* School Name */}
                            <h1 className="text-center font-bold text-2xl mb-2 lg:mb-0 lg:mt-0 hover:text-red-400">
                                <a href={edu.slug}>
                                    {edu.school}
                                </a>
                            </h1>
                            {/* Education Achievment */}
                            <div className="text-sky-500 text-center mb-2 lg:mb-0 text-sm">
                                {Array.isArray(edu.title) ? (
                                    edu.title.map((title, idx) => (
                                        <p key={idx}>{title}</p>
                                    ))
                                ) : (
                                    <p>{edu.title}</p>
                                )}
                            </div>
                            {/* time and location */}
                            <div className="flex justify-between mb-2">
                                <p className="flex items-center">
                                    <CalendarIcon />
                                    {edu.year}
                                </p>
                                <p className="flex items-center">
                                    <LocationIcon />
                                    {edu.location}
                                </p>
                            </div>
                            {/* Summary */}
                            <div className="overflow-hidden text-neutral-400 truncate text-center">
                                <ul>
                                    {edu.summary.split(',').map((line, idx) => (
                                        <li key={idx}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}