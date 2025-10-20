import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  // Sample blog data - you can replace this with your actual data
  const blogPosts = [
    {
      id: 1,
      title: "Clever ways to invest in product to organize your portfolio",
      excerpt: "Discover smart investment strategies to streamline and organize your portfolio for maximum returns and minimal stress.",
      date: "Jan 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244317.png"
    },
    {
      id: 2,
      title: "5 Secrets to Building a Powerful Portfolio",
      excerpt: "Learn the hidden techniques top investors use to maximize returns and build wealth over time.",
      date: "Jan 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244340.png"
    },
    {
      id: 3,
      title: "How to Stay Ahead in the Market",
      excerpt: "Stay sharp and plan your moves with these market strategies that successful traders swear by.",
      date: "Feb 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244356.png"
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies that are shaping the future of web development.",
      date: "Feb 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244317.png"
    },
    {
      id: 5,
      title: "React vs Vue: A Comprehensive Comparison",
      excerpt: "Deep dive into the differences between React and Vue.js to help you choose the right framework.",
      date: "Mar 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244340.png"
    },
    {
      id: 6,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to create robust and scalable APIs using Node.js and modern development practices.",
      date: "Mar 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244356.png"
    },
    {
      id: 7,
      title: "The Art of Code Review",
      excerpt: "Master the skills needed to conduct effective code reviews that improve team productivity.",
      date: "Apr 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244317.png"
    },
    {
      id: 8,
      title: "Database Design Best Practices",
      excerpt: "Essential principles for designing efficient and maintainable database schemas.",
      date: "Apr 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244340.png"
    },
    {
      id: 9,
      title: "Microservices Architecture Patterns",
      excerpt: "Understanding different microservices patterns and when to use them in your applications.",
      date: "May 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244356.png"
    },
    {
      id: 10,
      title: "DevOps Culture and Practices",
      excerpt: "Building a strong DevOps culture that bridges the gap between development and operations.",
      date: "May 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244317.png"
    },
    {
      id: 11,
      title: "Cloud Computing Strategies",
      excerpt: "Choosing the right cloud platform and services for your application needs.",
      date: "Jun 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244340.png"
    },
    {
      id: 12,
      title: "Security in Modern Web Applications",
      excerpt: "Implementing security best practices to protect your web applications from threats.",
      date: "Jun 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244356.png"
    },
    {
      id: 13,
      title: "Performance Optimization Techniques",
      excerpt: "Proven methods to improve your application's performance and user experience.",
      date: "Jul 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244317.png"
    },
    {
      id: 14,
      title: "Mobile-First Design Principles",
      excerpt: "Creating responsive designs that work perfectly across all device sizes.",
      date: "Jul 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244340.png"
    },
    {
      id: 15,
      title: "Testing Strategies for Web Apps",
      excerpt: "Comprehensive testing approaches to ensure your applications are reliable and bug-free.",
      date: "Aug 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244356.png"
    },
    {
      id: 16,
      title: "AI and Machine Learning in Development",
      excerpt: "How artificial intelligence is transforming the way we build and deploy applications.",
      date: "Aug 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244317.png"
    },
    {
      id: 17,
      title: "Open Source Contribution Guide",
      excerpt: "Getting started with contributing to open source projects and building your reputation.",
      date: "Sep 01, 2023",
      image: "https://pagedone.io/asset/uploads/1696244340.png"
    },
    {
      id: 18,
      title: "Career Growth in Tech",
      excerpt: "Strategies for advancing your career in the technology industry and staying relevant.",
      date: "Sep 15, 2023",
      image: "https://pagedone.io/asset/uploads/1696244356.png"
    }
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <div className="container mx-auto p-3 relative z-10">
        <div className="py-8 lg:py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-manrope text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-white dark:to-blue-300 mb-4">
              Blog Posts
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Insights, tutorials, and thoughts on technology and development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="
                  group w-full
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
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 lg:p-8 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                      {post.date}
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="text-xl text-gray-900 dark:text-white font-bold leading-8 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-6 mb-6">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group-hover:gap-3"
                  >
                    <span>Read more</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
