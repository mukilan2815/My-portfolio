import React from "react";

const Cardprojects = ({ title, description, imageSrc, readMoreHref }) => {
  return (
    <div className="max-w-sm m-5 flex flex-wrap bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" style={{ textDecoration: "none" }}>
        <div
          className="rounded-t-lg overflow-hidden"
          style={{ maxHeight: "200px", overflow: "hidden" }}
        >
          <img
            src={imageSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="p-5">
          <a href="#" style={{ textDecoration: "none" }}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <a
            href={readMoreHref} // Use the readMoreHref prop here
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </a>
    </div>
  );
};

export default Cardprojects;
