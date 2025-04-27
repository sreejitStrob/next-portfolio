import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto p-3">
        <div className="border-b border-gray-200 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Blog Card 1 */}
            <div className="group w-full border border-gray-300 rounded-2xl flex flex-col overflow-hidden">
              <div className="w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696244317.png"
                  alt="blogs tailwind section"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 transition-all duration-300 group-hover:bg-gray-50 w-full flex flex-col justify-center">
                <span className="text-indigo-600 font-medium mb-2 block">
                  Jan 01, 2023
                </span>
                <h4 className="text-lg text-gray-900 font-medium leading-7 mb-3">
                  Clever ways to invest in product to organize your portfolio
                </h4>
                <p className="text-gray-500 text-sm leading-5 mb-4">
                  Discover smart investment strategies to streamline and organize your portfolio...
                </p>
                <a href="#" className="cursor-pointer text-indigo-600 text-sm font-semibold">
                  Read more..
                </a>
              </div>
            </div>

            {/* You can duplicate the card for more posts */}
            <div className="group w-full border border-gray-300 rounded-2xl flex flex-col overflow-hidden">
              <div className="w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696244317.png"
                  alt="blogs tailwind section"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 transition-all duration-300 group-hover:bg-gray-50 w-full flex flex-col justify-center">
                <span className="text-indigo-600 font-medium mb-2 block">
                  Jan 01, 2023
                </span>
                <h4 className="text-lg text-gray-900 font-medium leading-7 mb-3">
                  5 Secrets to Building a Powerful Portfolio
                </h4>
                <p className="text-gray-500 text-sm leading-5 mb-4">
                  Learn the hidden techniques top investors use to maximize returns...
                </p>
                <a href="#" className="cursor-pointer text-indigo-600 text-sm font-semibold">
                  Read more..
                </a>
              </div>
            </div>

            {/* Another card */}
            <div className="group w-full border border-gray-300 rounded-2xl flex flex-col overflow-hidden">
              <div className="w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696244317.png"
                  alt="blogs tailwind section"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 transition-all duration-300 group-hover:bg-gray-50 w-full flex flex-col justify-center">
                <span className="text-indigo-600 font-medium mb-2 block">
                  Jan 01, 2023
                </span>
                <h4 className="text-lg text-gray-900 font-medium leading-7 mb-3">
                  How to Stay Ahead in the Market
                </h4>
                <p className="text-gray-500 text-sm leading-5 mb-4">
                  Stay sharp and plan your moves with these market strategies...
                </p>
                <a href="#" className="cursor-pointer text-indigo-600 text-sm font-semibold">
                  Read more..
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
