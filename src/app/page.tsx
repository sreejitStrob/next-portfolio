import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <div className="container mx-auto p-3 relative z-10">
        <div className="border-b border-gray-200/50 dark:border-gray-700/50 py-8 lg:py-15 backdrop-blur-sm">
          <div className="relative">
            {/* Glassmorphism card for hero section */}
            <div className="backdrop-blur-md bg-white/20 dark:bg-gray-800/20 rounded-3xl p-8 lg:p-12 border border-white/30 dark:border-gray-700/30 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Image 
                    src="/author.jpeg"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                    className="rounded-full border-4 border-white/50 dark:border-gray-600/50 shadow-lg">
                  </Image>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
              </div>
              
              <h1 className="pt-3 font-body text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-white dark:to-blue-300 md:text-6xl lg:text-7xl mb-6">
                Hi, I'm Sreejit M.
              </h1>
              
              <p className="pt-3 font-body text-xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Software engineer and open-source enthusiast building with JavaScript, React, Node, and Golang—chasing flow states and living the Mumbai life.
              </p>
              
              <Link 
                className="inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-secondary to-green-500 hover:from-green-500 hover:to-secondary px-8 py-4 text-center font-body text-xl font-semibold text-white transition-all duration-300 hover:scale-105 rounded-full shadow-lg hover:shadow-xl"
                href="/"
              >
                <span>Say Hello!</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200/50 dark:border-gray-700/50 py-8 lg:py-12">
          {/* Glassmorphism card for story section */}
          <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-2xl p-6 lg:p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <div className="flex items-center pb-6">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                <Image
                  src="/icon-story.png"
                  width={24}
                  height={24}
                  alt="Story icon"
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="ml-4 font-body text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-white dark:to-blue-300">
                My Story
              </h3>
            </div>
            <div className="space-y-4">
              <p className="font-body font-medium text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                From building sleek, scalable web applications to diving into the depths of open-source contributions, my journey as a software engineer has been shaped by curiosity and a drive to create. With expertise in JavaScript, React, Node, and Golang, I enjoy crafting digital experiences that are both functional and efficient.
              </p>
              <p className="font-body font-medium text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Beyond code, I explore flow states, constantly refining how I work and think to achieve deep focus and creativity. Whether leading a team, contributing to the community, or working on personal projects, I'm always pushing the boundaries of what's possible.
              </p>
              <p className="font-body font-medium text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Living the Mumbai life, I find inspiration in its energy—balancing work with moments spent bird-watching, playing chess, or tinkering with new ideas. My blog, autotelicdev.com, is a space where I share insights, experiments, and lessons from my journey in tech and beyond.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200/50 dark:border-gray-700/50 py-8 lg:py-12">
          <section>
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-manrope text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-white dark:to-blue-300 mb-4">
                  My latest blog
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-secondary to-green-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                {Array(3).fill(null).map((_, index) => (
                  <div
                  key={index}
                  className="
                    group w-full max-lg:max-w-xl lg:w-1/3
                    rounded-3xl border border-white/20 dark:border-gray-700/30
                    backdrop-blur-md bg-white/10 dark:bg-gray-800/10
                    transition-all duration-500
                    hover:-translate-y-3 hover:shadow-2xl
                    hover:border-white/40 dark:hover:border-gray-600/50
                    shadow-xl hover:shadow-2xl
                    overflow-hidden
                  "
                >
                    <div className="relative overflow-hidden">
                      <img
                        src="https://pagedone.io/asset/uploads/1696244317.png"
                        alt="blogs tailwind section"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 lg:p-8 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          Jan 01, 2023
                        </span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <h4 className="text-xl text-gray-900 dark:text-white font-bold leading-8 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Clever ways to invest in product to organize your portfolio
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-6 mb-6">
                        Discover smart investment strategies to streamline and organize your portfolio..
                      </p>
                      <a href="#" className="inline-flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group-hover:gap-3">
                        <span>Read more</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
        
      </div>

    </main>
  );
}
