import Link from 'next/link';

export default function BlueAcademy() {
  const courses = [
    {
      name: 'Plastic Pollution 101',
      description: 'Understand the scale and impact of plastic pollution on our planet.',
      level: 'Beginner',
      duration: '2 weeks',
    },
    {
      name: 'Sustainable Living',
      description: 'Learn practical ways to reduce your plastic footprint in daily life.',
      level: 'Beginner',
      duration: '3 weeks',
    },
    {
      name: 'Community Organizing',
      description: 'Develop skills to lead environmental initiatives in your community.',
      level: 'Intermediate',
      duration: '4 weeks',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Blue Academy</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Education for a Plastic-Free Future
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Empower yourself with knowledge and skills to make a difference.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {courses.map((course) => (
              <div key={course.name} className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <Link href="/landing/academy" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {course.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{course.description}</p>
                </div>
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {course.level}
                  </span>
                  <span className="ml-4">{course.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/landing/academy"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Explore Blue Academy
          </Link>
        </div>
      </div>
    </section>
  );
}
