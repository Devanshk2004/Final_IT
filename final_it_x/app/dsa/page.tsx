import Link from 'next/link';

const topics = [
  { name: 'Array', color: 'bg-blue-100 text-blue-800' },
  { name: 'String', color: 'bg-green-100 text-green-800' },
  { name: 'Linked List', color: 'bg-purple-100 text-purple-800' },
  { name: 'Stack', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Queue', color: 'bg-red-100 text-red-800' },
];

export default function DSA() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="text-center mb-16 pt-12">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
          Data Structures & Algorithms
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Master fundamental data structures and algorithms with our comprehensive collection of problems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-12">
        {topics.map((topic) => (
          <Link
            key={topic.name}
            href={`/dsa/${topic.name.toLowerCase().replace(' ', '-')}`}
            className="transform transition-transform hover:scale-105"
          >
            <div className={`${topic.color} rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300`}>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">{topic.name}</h2>
                <p className="text-sm opacity-75">
                  Practice problems and learn concepts
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 