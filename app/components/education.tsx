'use client'

// some icons used in this component
function CalendarIcon() {
    return (
        <svg
            className="h-4 w-4 text-gray-500 mr-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            strokeLinecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <rect x="8" y="15" width="2" height="2" />
        </svg>
    )
}
function LocationIcon() {
    return (
        <svg
            className="h-4 w-4 text-gray-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    )
}

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
                                    <img
                                        src={edu.image}
                                        alt={edu.school}
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