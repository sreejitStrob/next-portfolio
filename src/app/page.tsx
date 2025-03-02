import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto p-3">
        <div className="border-b border-gray-200 py-16 lg:py-15">
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
              className="pt-3 font-body text-2xl font-extrabold text-primary dark:text-white md:text-5xl lg:text-5xl"
            >
              Hi, I’m Sreejit M.
            </h1>
            <p className="pt-3 font-body text-xl font-medium text-primary dark:text-white">
              Software engineer and open-source enthusiast building with JavaScript, React, Node, and Golang—chasing flow states and living the Mumbai life.
            </p>
            <Link 
                className="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-all duration-300 hover:bg-green hover:scale-105 sm:inline-block sm:text-left sm:text-2xl"
                href="/"
            >

              Say Hello!
            </Link>
        </div>
        <div className="border-b border-gray-200 py-16 lg:py-20">
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
      </div>

    </main>
  );
}
