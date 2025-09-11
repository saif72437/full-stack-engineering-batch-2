import React from "react";

function Create() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8">
          {/* Page Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create New Blog
          </h2>

          <form className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Blog Title
              </label>
              <input
                type="text"
                placeholder="Enter blog title"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Blog Content
              </label>
              <textarea
                rows="6"
                placeholder="Write your blog content here..."
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>

            {/* Category & Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none">
                  <option>Select category</option>
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Lifestyle</option>
                  <option>Education</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  placeholder="e.g. React, Tailwind, UI/UX"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Upload Image */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Upload Cover Image
              </label>
              <input
                type="file"
                className="w-full px-4 py-3 border rounded-lg shadow-sm bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="reset"
                className="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 rounded-lg text-white font-medium shadow hover:bg-blue-600 transition"
              >
                Publish Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
