export function Education() {

    const educationData = [
        {
            school: 'Simon Fraser University',
            title: 'Bachelor of Science in Data Science',
            year: '2018 - 2023',
            location: 'Burnaby, BC',
            summary: 'Minor in Statistics \n hounor',
            image: '/Education/SFU_image.jpg',
            slug: 'https://www.sfu.ca/',
        },
        {
            school: 'Shenzhen Senior High School',
            title: 'High school diploma',
            year: '2016 - 2018',
            location: 'Shenzhen, Guangdong',
            summary: 'best year of my life looooooonnnnnnnnng ass descriptions',
            image: '/Education/shenzhen_senior_high_school_img.jpeg',
            slug: 'https://www.cn-school.com/main/index.html'
        },
    ];


    return (
        <section className='flex justify-center'>
            <div className="containter lg mx-auto space-y-6">
                {educationData.map((edu, index) => (
                    // Card view for each education experience
                    <div key={index} className="">
                        <div className="">
                            {/* Image of the school */}
                            {edu.image && (
                                <div className="">
                                    <div className="">
                                        <img
                                            src={edu.image}
                                            alt={edu.school}
                                            className=""
                                        />
                                    </div>
                                </div>
                            )}
                            {/* School Info */}
                            <div>
                                {/* School Name */}
                                <h1>
                                    <a href={edu.slug}>
                                        {edu.school}
                                    </a>
                                </h1>
                                {/* Education Achievment */}
                                <p >
                                    {edu.title}
                                </p>
                                {/* time and location */}
                                <div >
                                    <p >
                                        {edu.year}
                                    </p>
                                    <p >
                                        {edu.location}
                                    </p>
                                </div>
                                {/* Summary */}
                                <p>
                                    {edu.summary}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section >
    )
}