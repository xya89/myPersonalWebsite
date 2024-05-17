'use client'
import Image from "next/image"
import { CalendarIcon, LocationIcon } from "public/icon";

export function Education() {

    const educationData = [
        {
            school: 'Simon Fraser University',
            title: ['Bachelor of Science, Data Science', 'Minor Statistics'],
            year: '2018 - 2023',
            location: 'Burnaby, BC',
            summary: 'These courses are proved to be helpful:, Applied Discrete Data Analysis, Multivariate Analysis, Time Series Analysis',
            image: '/Education/school_image/SFU_image.webp',
            slug: 'https://www.sfu.ca/',
            quickIdentifier: 'UD',
        },
        {
            school: 'Shenzhen Senior High School',
            title: 'High school diploma',
            year: '2016 - 2018',
            location: 'Shenzhen, Guangdong',
            summary: '\"It was the best of times, it was the worst of times\"',
            image: '/Education/school_image/SID_image.png',
            slug: 'https://www.cn-school.com/main/index.html',
            quickIdentifier: 'HS',
        },
    ];


    return (
        <section className=' flex flex-row justify-center w-full'>
            <div className="containter lg:mx-auto space-y-6 justify-center w-full">
                {educationData.map((edu, index) => (
                    // Card view for each education experience
                    <div key={index} className="flex flex-col bg-white dark:bg-neutral-800 lg:flex-row shawdow-md rounded-lg overflow-hidden">
                        {/* Image of the school */}
                        <a href={edu.slug} className="w-full lg:w-1/2">
                            {edu.image && (
                                <div className="">
                                    <Image
                                        src={edu.image}
                                        alt={edu.school}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover"
                                        style={{ aspectRatio: '3/2', width: '100%', height: '100%', maxHeight: '300px' }}
                                    />
                                </div>
                            )}
                        </a>
                        {/* School Info */}
                        <div className="lg:w-1/2 w-full p-4 flex flex-col justify-between">
                            {/* School Name */}
                            <h2 className="text-center font-bold text-2xl mb-2 lg:mb-0 lg:mt-0 hover:text-red-400">
                                <a href={edu.slug}>
                                    {edu.school}
                                </a>
                            </h2>
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
                            <p className="overflow-hidden text-neutral-400 truncate text-center">
                                <ul>
                                    {edu.summary.split(',').map((line, idx) => (
                                        <li key={idx}>{line}</li>
                                    ))}
                                </ul>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}