import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="text-center mb-16 pt-12">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
          Welcome to Final IT
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your comprehensive platform for mastering DSA, Aptitude, and Interview preparation
        </p>
      </div>

      {/* Main Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-12">
        {/* DSA Box */}
        <Link href="/dsa" className="group h-full">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
            <div className="text-center flex-grow">
              <h2 className="text-2xl font-bold text-white mb-4">DSA</h2>
              <p className="text-blue-100">
                Master Data Structures and Algorithms with our comprehensive collection of problems and solutions
              </p>
            </div>
          </div>
        </Link>

        {/* Aptitude Box */}
        <Link href="/aptitude" className="group h-full">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
            <div className="text-center flex-grow">
              <h2 className="text-2xl font-bold text-white mb-4">Aptitude</h2>
              <p className="text-emerald-100">
                Enhance your logical reasoning and problem-solving skills with our aptitude practice tests
              </p>
            </div>
          </div>
        </Link>

        {/* Interview Box */}
        <Link href="/interview" className="group h-full">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
            <div className="text-center flex-grow">
              <h2 className="text-2xl font-bold text-white mb-4">Interview</h2>
              <p className="text-purple-100">
                Prepare for technical interviews with our curated collection of interview questions and mock interviews
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
