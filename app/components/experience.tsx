import Image from "next/image"
import experienceData from 'app/data/experienceData.json'

export function Experience() {

    const yearsWihMostRecentProjects: { [key: string]: any } = {};
    experienceData.forEach((exp) => {
        const year = exp.duration.split('-')[0].trim();
        if (!yearsWihMostRecentProjects[year]) {
            yearsWihMostRecentProjects[year] = exp;
        }
    })

    // Extract years and group experiences by year
    const experienceByYear = experienceData.reduce((acc: { [key: string]: any[] }, exp) => {
        const year = exp.duration.split('-')[0].trim();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(exp);
        return acc;
    }, {});

    return (
        <section className="flex flex-row justify-center w-full">
            <div className="containter lg:mx-auto space-y-6 justify-center w-full">

                {experienceData.map((exp, index) => {
                    const year = exp.duration.split('-')[0].trim();
                    const isMostRecentProject = yearsWihMostRecentProjects[year] === exp;
                    const isNotFirstInYear = experienceByYear[year].indexOf(exp) !== 0;
                    return (
                        // Card view for each experience item
                        <div key={index} className="flex flex-col lg:flex-row overflow-hidden w-full">
                            {/* Timeline */}
                            <div className="w-1/8 flex flex-col items-center">
                                {isMostRecentProject && (
                                    <>
                                        <div className="text-lg font-bold flex-shrink">{year}</div>
                                        <div className="flex-1 w-px bg-gray-300"></div>
                                    </>
                                )}
                                {isNotFirstInYear && (
                                    < div className='flex-1 w-px bg-gray-300'></div>
                                )}
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
                    )

                })}
            </div>
        </section >
    )
}