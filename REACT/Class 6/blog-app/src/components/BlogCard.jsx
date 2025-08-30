import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ imageLink, title, description }) {
  return (
    <Link
      to={"/"}
      className="rounded-xl bg-white shadow-md hover:shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] flex flex-col"
    >
      {/* Blog Image */}
      <div className="w-full h-48 sm:h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1755467020939-4c3e196545bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="blog"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-800">
          Nature
        </h2>
        <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui
          architecto nobis nostrum voluptatem sequi!
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
