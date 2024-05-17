import Image from "next/image"
import experienceData from 'app/data/experienceData.json'

export function Experience() {
    return (
        <section className="flex flex-row justify-center w-full">
            <div className="containter lg:mx-auto space-y-6 justify-center w-full">
                {experienceData.map((exp, index) => (
                    // Card view for each experience item
                    <div key={index} className="flex flex-col lg:flex-row overflow-hidden">
                        {/* Time Line */}
                        <div className="flex items-center absolute left-0 lg:relative lg:left-auto lg:w-1/12 mb-2 lg:mb-0">
                            <div className="hidden lg:flex flex-col items-center">
                                {index !== 0 && (
                                    <div className="h-6 border-1-2 border-gray-300"></div>
                                )}
                                <div className="w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500"></div>
                                {index !== 0 && experienceData.length - 1 && (
                                    <div className="h-full border-1-2 border-gray-300"></div>
                                )}
                            </div>
                            <p className="text-sm lg:text-center">{exp.duration.split('-')[0]}</p>
                        </div>
                        {/* Experience Info */}
                        <div className="lg:w-1/2 p-4 flex flex-col justify-between lg:pr-8">
                            {/* Title */}
                            <h1 className="font-bold text-lg mb-1">
                                {exp.title}
                            </h1>
                            {/* Organization Name */}
                            <p className="text-gray-600 mb-1">
                                {exp.orgName}
                            </p>
                            {/* Duration */}
                            {/* Location */}
                            <div className="flex justify-between text-gray-500 mb-2">
                                <p>
                                    {exp.duration}
                                </p>
                                <p>
                                    {exp.location}
                                </p>
                            </div>
                            {/* Summary */}
                            <div className="text-gray-700">
                                {exp.summary}
                            </div>
                        </div>
                        {/* Image */}
                        <a href={exp.slug} className="w-full lg:w-1/2">
                            {exp.image && (
                                <div>
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        width={300}
                                        height={300}
                                        style={{ aspectRatio: '3/2', width: '100%', height: '100%', maxHeight: '300px' }}
                                    />
                                </div>
                            )}

                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}