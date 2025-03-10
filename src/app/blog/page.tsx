import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
  <div className="container mx-auto p-3">
    <div className="border-b border-gray-200 py-16 lg:py-15">
      <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8">
        <div className="group w-full max-lg:max-w-xl lg:w-2/3 border border-gray-300 rounded-2xl flex flex-col lg:flex-row">
          {/* Image on the left */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://pagedone.io/asset/uploads/1696244317.png"
              alt="blogs tailwind section"
              className="rounded-l-2xl w-full h-full object-cover"
            />
          </div>

          {/* Text on the right */}
          <div className="p-4 lg:p-6 transition-all duration-300 rounded-r-2xl group-hover:bg-gray-50 w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-indigo-600 font-medium mb-3 block">
              Jan 01, 2023
            </span>
            <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
              Clever ways to invest in product to organize your portfolio
            </h4>
            <p className="text-gray-500 leading-6 mb-6">
              Discover smart investment strategies to streamline and organize your portfolio..
            </p>
            <a href="#" className="cursor-pointer text-lg text-indigo-600 font-semibold">
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
