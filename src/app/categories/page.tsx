import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage() {
  // Sample categories data
  const categories = [
    {
      id: 1,
      name: "Web Development",
      description: "Frontend, backend, and full-stack development insights",
      postCount: 12,
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      id: 2,
      name: "JavaScript",
      description: "Modern JavaScript, frameworks, and best practices",
      postCount: 18,
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      id: 3,
      name: "React",
      description: "React ecosystem, hooks, and advanced patterns",
      postCount: 15,
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    },
    {
      id: 4,
      name: "Node.js",
      description: "Server-side JavaScript and backend development",
      postCount: 10,
      icon: "🟢",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      id: 5,
      name: "Database",
      description: "SQL, NoSQL, and database design principles",
      postCount: 8,
      icon: "🗄️",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      id: 6,
      name: "DevOps",
      description: "CI/CD, deployment, and infrastructure management",
      postCount: 6,
      icon: "🚀",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      id: 7,
      name: "UI/UX Design",
      description: "User interface and experience design principles",
      postCount: 9,
      icon: "🎨",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
    },
    {
      id: 8,
      name: "Mobile Development",
      description: "React Native, Flutter, and mobile app development",
      postCount: 7,
      icon: "📱",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20"
    },
    {
      id: 9,
      name: "Career & Growth",
      description: "Professional development and career advancement",
      postCount: 11,
      icon: "💼",
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20"
    }
  ];

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <div className="container mx-auto p-3 relative z-10">
        <div className="py-8 lg:py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/20 dark:bg-gray-800/20 rounded-3xl p-8 lg:p-12 border border-white/30 dark:border-gray-700/30 shadow-2xl max-w-4xl mx-auto">
              <h1 className="font-manrope text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-white dark:to-blue-300 mb-6">
                Categories
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Explore topics that interest you most. From web development to career growth, 
                find content tailored to your learning journey.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>{categories.length} Categories</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>{categories.reduce((sum, cat) => sum + cat.postCount, 0)} Total Posts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block"
              >
                <div className="
                  relative h-full
                  rounded-3xl border border-white/20 dark:border-gray-700/30
                  backdrop-blur-md bg-white/10 dark:bg-gray-800/10
                  transition-all duration-500
                  hover:-translate-y-4 hover:shadow-2xl
                  hover:border-white/40 dark:hover:border-gray-600/50
                  shadow-xl hover:shadow-2xl
                  overflow-hidden
                  cursor-pointer
                ">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon and count */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`
                        p-4 rounded-2xl bg-gradient-to-r ${category.color} 
                        shadow-lg group-hover:scale-110 transition-transform duration-300
                      `}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                          {category.postCount}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          posts
                        </div>
                      </div>
                    </div>

                    {/* Category name */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                      {category.description}
                    </p>

                    {/* Read more indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                        Explore Posts
                      </span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Suggest a new category or topic you'd like to see covered in future posts.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-green-500 hover:from-green-500 hover:to-secondary px-8 py-4 text-center font-body text-lg font-semibold text-white transition-all duration-300 hover:scale-105 rounded-full shadow-lg hover:shadow-xl"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
