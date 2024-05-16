export function Experience() {

    const experienceData = [
        {
            title: 'Business Analyst',
            orgName: 'Norsat International Inc.',
            duration: '2023-06 - 2024-02',
            location: 'Richmond, BC',
            summary: 'Supply Chain Analyst, Data Analyst, SQL',
            image: '/Experience/Norsat.webp',
            slug: 'https://www.norsat.com/pages/about-us',
        }, {
            title: 'Data Analyst (capstone project)',
            orgName: 'Vancouver General Hospital x SFU',
            duration: '2023-01 - 2023-04',
            location: 'Vancouver, BC',
            summary: 'Canine for Care project',
            image: '/Experience/VGH.avif',
            slug: 'https://www.vch.ca/en/service/canines-care',
        }, {
            title: 'Undergraduate research',
            orgName: 'Simon Fraser University',
            duration: '2022-09 - 2022-12',
            location: 'Burnaby, BC',
            summary: 'Steam Server Load Prediction',
            image: '/Experience/SFU_science_building.jpg',
            slug: 'https://github.com/xya89/TimeSeries-Steam-server-usage-forecast',
        }, {
            title: 'Undergraduate research',
            orgName: 'Simon Fraser University',
            duration: '2021-01 - 2021-02',
            location: 'Buranby, BC',
            summary: 'Hongkong Vaccine Hackathon',
            image: '/Experience/SFU_wmc.jpg',
            slug: 'https://github.com/xya89/Revision-of-Vaccination-Distribution-in-Hong-Kong---Hackathon-2022',
        }, {
            title: 'Student',
            orgName: 'Simon Fraser University',
            duration: '2019-09 - 2019-12',
            location: 'Buranby, BC',
            summary: 'Android App...',
            image: '/Experience/SFU_as_building.jpg',
            slug: 'https://github.com/xya89/Android_Apps_CMPT276',
        }
    ]

    return (
        <section className="flex justify-center">
            <div className="containter lg mx-auto space-y-6">
                {experienceData.map((exp, index) => (
                    <div>
                        <div>
                            {exp.image && (
                                <div>
                                    <div>
                                        <a href={exp.slug}>
                                            <img
                                                src={exp.image}
                                                alt={exp.orgName}
                                                className=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            )}
                            {/* Experience Info */}
                            <div>
                                {/* Title */}
                                <h1>
                                    {exp.title}
                                </h1>
                                {/* Organization Name */}
                                <p>
                                    {exp.orgName}
                                </p>
                                {/* Duration */}
                                {/* Location */}
                                <div>
                                    <p>
                                        {exp.duration}
                                    </p>
                                    <p>
                                        {exp.location}
                                    </p>
                                </div>
                                {/* Summary */}
                                <p>
                                    {exp.summary}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}