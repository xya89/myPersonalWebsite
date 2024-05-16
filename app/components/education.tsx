export function Education() {

    const educationData = [
        {
            school: 'Simon Fraser University',
            title: 'Bachelor of Science in Data Science',
            year: '2018 - 2023',
            location: 'Burnaby, BC',
            summary: 'Minor in Statistics \n hounor',
            image: '/Education/SFU_image.jpg',
        },
        {
            school: 'Shenzhen Senior High School',
            title: 'High school diploma',
            year: '2016 - 2018',
            location: 'Shenzhen, Guangdong',
            summary: 'best year of my life looooooonnnnnnnnng ass descriptions',
            image: '/Education/shenzhen_senior_high_school_img.jpeg',
        },
    ];


    return (
        <section className='flex justify-center'>
            <div className="containter lg mx-auto space-y-6">
                {educationData.map((edu, index) => (
                    // Card view for each education experience
                    <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:h-64 max-w-lg mx-auto md:max-w-4xl">
                        <div className="p-6 flex flex-col md:flex-row">
                            {/* Image of the school */}
                            {edu.image && (
                                <div className="w-full md:w-1/3 md:pr-6 flex-shrink-0">
                                    <div className="relative pb-3/4 md:pb-0 md:h-full">
                                        <img
                                            src={edu.image}
                                            alt={edu.school}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                            {/* School Info */}
                            <div className={`p-6 flex flex-col justify-between ${edu.image ? 'md:w-1/2' : 'w-full'}`}>
                                {/* School Name */}
                                <h1 className="font-bond text-2xl text-center mb-2">
                                    {edu.school}
                                </h1>
                                {/* Education Achievment */}
                                <p className="text-sm text-sky-400 text-center mb-4">
                                    {edu.title}
                                </p>
                                {/* time and location */}
                                <div className="flex justify-between items-center text-sm mb-2">
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {edu.year}
                                    </p>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {edu.location}
                                    </p>
                                </div>
                                {/* Summary */}
                                <p className="text-base text-gray-700 dark:text-gray-300 overflow-ellipsis truncate">
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