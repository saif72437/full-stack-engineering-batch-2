import React, { useState } from "react";
import MyInput from "../components/MyInput";
import MyTextArea from "../components/MyTextarea";
import MyButton from "../components/MyButton";
import { toast } from "sonner";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="max-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-4 py-10 mt-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col gap-6">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 text-center">
          Create Blog
        </h1>
        <p className="text-neutral-500 text-center text-base sm:text-lg">
          Share your thoughts and ideas with the world ✨
        </p>

        {/* Input Fields */}
        <div className="flex flex-col gap-5">
          <MyInput
            placeholder={"Image link"}
            type={"url"}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            value={""}
          />
          <MyInput
            placeholder={"Title"}
            type={"text"}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={""}
          />
          <MyTextArea
            placeholder={"What's on your mind..."}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={""}
          />
        </div>

        {/* Button */}
<MyButton
          text="Upload Blog"
          className="w-full mt-4"
          onClick={() => {
            if (!title || !imageUrl || !description) {
              toast.error("Please fill all the required fields");
              return;
            }
            toast.success("Blog uploaded successfully 🚀");
          }}
        />
      </div>
    </div>
  );
}

export default CreateBlog;
