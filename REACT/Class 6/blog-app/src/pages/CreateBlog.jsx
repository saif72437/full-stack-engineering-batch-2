import React, { useState } from "react";
import MyInput from "../components/MyInput";
import MyTextArea from "../components/MyTextarea";
import MyButton from "../components/MyButton";
import { toast } from "sonner";
import { ID } from "appwrite";
import { tablesDB } from "../contants";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-10">
        {/* Page Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
          Create a Blog
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
          Share your thoughts and ideas with the world 🌍
        </p>

        {/* Form */}
        <div className="flex flex-col gap-5">
          <MyInput
            placeholder="Image link"
            type="url"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />

          <MyInput
            placeholder="Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <MyTextArea
            placeholder="What's on your mind..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <MyButton
            onClick={async () => {
              if (!title || !imageUrl || !description) {
                toast.error("⚠️ Please fill all the required fields");
                return;
              }

              const blog = await tablesDB.createRow(
                "68bf0ac1001cde0eb51b",
                "blogs",
                ID.unique(),
                {
                  blogImage: imageUrl,
                  blogTitle: title,
                  blogDescription: description,
                }
              );

              if (blog) {
                toast.success("Blog created successfully 🚀");
                setTitle("");
                setDescription("");
                setImageUrl("");
              }
            }}
            text="Upload Blog"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
