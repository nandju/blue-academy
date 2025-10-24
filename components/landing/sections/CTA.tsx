import Link from 'next/link';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA({
  title = "Ready to make a difference?",
  description = "Join our community of changemakers and help us create a plastic-free future.",
  buttonText = "Get Involved",
  buttonLink = "/landing/volunteer",
  secondaryButtonText,
  secondaryButtonLink,
}: CTAProps) {
  return (
    <div className="bg-blue-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">{title}</span>
          <span className="block text-blue-200">{description}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0
         space-x-4">
          <div className="inline-flex rounded-md shadow">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              {buttonText}
            </Link>
          </div>
          {secondaryButtonText && (
            <div className="ml-3 inline-flex">
              <Link
                href={secondaryButtonLink || '#'}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
              >
                {secondaryButtonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
