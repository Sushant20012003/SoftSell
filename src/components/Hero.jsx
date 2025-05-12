import DarkModeToggle from "./DarkModeToggle";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <section className="relative py-24 overflow-hidden">

        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 drop-shadow-md dark:drop-shadow-lg">
              Monetize Your Unused <br className="hidden sm:inline" />
              Software Licenses — Instantly.
            </h1>
            <p className="text-xl text-gray-700 dark:text-white/80 mb-8">
              Turn idle licenses into cash with our secure, hassle-free platform.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-800 transition-all">
                Get a Quote
              </button>
              <button className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in-up">
            <img
              src={`/images/herobg2.png`}
              alt="Marketing Illustration"
              className="w-full max-w-md "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
