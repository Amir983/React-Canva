import { Link } from "react-router-dom";

const PageNotFounde = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className=" flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-[#3f3f47] text-9xl">404</h1>
            <p className="mb-2 text-2xl font-bold text-center md:text-3xl">
              <span className="text-[#53536f]">Oops!</span>{" "}
              <span>page not found</span>
            </p>
            <p className="mb-8 text-center mb:text-lg">
              The page youre looking for doesn,t exist{" "}
            </p>
            <Link
              to={"/"}
              className="inline-block bg-[#35353d] p-2 hover:!text-white rounded-md"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFounde;
