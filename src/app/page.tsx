import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto p-3">
        <div className="border-b border-gray-200 dark:border-gray-700 py-16 lg:py-15">
          <div className="">
            <Image 
              src="/author.jpeg"
              width={50}
              height={50}
              alt="Picture of the author"
              className="mr-3 rounded-full">
            </Image>
          </div>
          <h1
  className="pt-3 font-body text-2xl font-extrabold text-primary dark:text-secondary md:text-5xl lg:text-5xl"
>
  Hi, I’m Sreejit M.
</h1>
            <p className="pt-3 font-body text-xl font-medium text-primary dark:text-white">
              Software engineer and open-source enthusiast building with JavaScript, React, Node, and Golang—chasing flow states and living the Mumbai life.
            </p>
            <Link 
                className="mt-10 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-all duration-300 hover:bg-green hover:scale-105 sm:inline-block sm:text-left sm:text-2xl"
                href="/"
            >

              Say Hello!
            </Link>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-700 py-2 lg:py-5">
          <div className="flex items-center pb-6">
            
              <Image
                        src="/icon-story.png"
                        width={20}
                        height={20}
                        alt="Picture of the author"
                        className="mr-3"
                      />
            <h3
              className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white"
            >
              My Story
            </h3>
          </div>
          <div>
            <p className="font-body font-medium text-primary dark:text-white">
            From building sleek, scalable web applications to diving into the depths of open-source contributions, my journey as a software engineer has been shaped by curiosity and a drive to create. With expertise in JavaScript, React, Node, and Golang, I enjoy crafting digital experiences that are both functional and efficient.

      Beyond code, I explore flow states, constantly refining how I work and think to achieve deep focus and creativity. Whether leading a team, contributing to the community, or working on personal projects, I’m always pushing the boundaries of what’s possible.


              <br />
              <br />
              Living the Mumbai life, I find inspiration in its energy—balancing work with moments spent bird-watching, playing chess, or tinkering with new ideas. My blog, autotelicdev.com, is a space where I share insights, experiments, and lessons from my journey in tech and beyond.
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-700 py-2 lg:py-5">
          <section>
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-manrope text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
                My latest blog
              </h2>
              
              <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                {Array(3).fill(null).map((_, index) => (
                  <div key={index} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-gray-400 dark:hover:border-gray-600">
                    <div className="flex items-center">
                      <img
                        src="https://pagedone.io/asset/uploads/1696244317.png"
                        alt="blogs tailwind section"
                        className="rounded-t-2xl w-full object-cover"
                      />
                    </div>
                    <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
                      <span className="text-indigo-600 font-medium mb-3 block dark:text-blue-400">Jan 01, 2023</span>
                      <h4 className="text-xl text-gray-900 dark:text-white font-medium leading-8 mb-5">
                        Clever ways to invest in product to organize your portfolio
                      </h4>
                      <p className="text-gray-500 leading-6 mb-10">
                        Discover smart investment strategies to streamline and organize your portfolio..
                      </p>
                      <a href="#" className="text-lg text-indigo-600 font-semibold transition-all duration-300 hover:text-indigo-800 dark:hover:text-blue-300 hover:underline">
                        Read more..
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
