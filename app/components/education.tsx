export function Education() {

    const educationData = [
        {
            school: 'Simon Fraser University',
            title: 'Bachelor of Science in Data Science',
            year: '2018 - 2023',
            location: 'Burnaby, BC',
            summary: 'Minor in Statistics',
            image: '',
        },
        {
            school: 'Shenzhen Senior High School',
            title: 'High school diploma',
            year: '2016 - 2018',
            location: 'Shenzhen, Guangdong',
            summary: 'best year of my life',
            image: null,
        },
    ];


    return (
        <section className='flex justify-center'>
            <div className="containter lg mx-auto space-y-6">
                {educationData.map((edu, index) => (
                    // Card view for each education experience
                    <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md break-all">
                        {/* Image of the school */}
                        {edu.image && (
                            <img src={edu.image} alt={edu.school} className="w-1/4 h-auto object-cover" />
                        )}
                        {/* School Info */}
                        <div className={`p-6 ${edu.image ? 'w-3/4' : 'w-full'}`}>
                            {/* School Name */}
                            <h1>{edu.school}</h1>
                            {/* Education Achievment */}
                            <p>{edu.title}</p>
                            {/* time and location */}
                            <div>
                                <p>{edu.year}</p>
                                <p>{edu.location}</p>
                            </div>
                            {/* Summary */}
                            <p>{edu.summary}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section >
    )
}