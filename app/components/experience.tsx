export function Experience() {

    const experienceData = [
        {
            title: 'Business Analyst',
            orgName: 'Norsat International Inc.',
            duration: '2023-06 - 2024-02',
            location: 'Richmond, BC',
            summary: 'Supply Chain Analyst, Data Analyst, SQL',
            image: '/Experience/Norsat.webp',
            slug: null,
        }, {
            title: 'Data Analyst (capstone project)',
            orgName: 'Vancouver General Hospital x SFU',
            duration: '2023-01 - 2023-04',
            location: 'Vancouver, BC',
            summary: 'Canine for Care project',
            image: '/Experience/VGH.avif',
            slug: null,
        }, {
            title: 'Undergraduate research',
            orgName: 'Simon Fraser University',
            duration: '2022-09 - 2022-12',
            location: 'Burnaby, BC',
            summary: 'Steam Server Load Prediction',
            image: '/Experience/SFU_science_building.jpg',
            slug: null,
        }, {
            title: 'Undergraduate research',
            orgName: 'Simon Fraser University',
            duration: '2021-01 - 2021-02',
            location: 'Buranby, BC',
            summary: 'Hongkong Vaccine Hackathon',
            image: '/Experience/SFU_wmc.jpg',
            slug: null,
        }, {
            title: 'Student',
            orgName: 'Simon Fraser University',
            duration: '2019-09 - 2019-12',
            location: 'Buranby, BC',
            summary: 'Android App...',
            image: '/Experience/SFU_as_building.jpg',
            slug: null,
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
                                        <img
                                            src={exp.image}
                                            alt={exp.orgName}
                                            className=""
                                        />
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