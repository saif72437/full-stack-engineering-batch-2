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
    <div className="max-w-4xl mx-auto mt-10 flex flex-col items-center gap-10">
      <MyInput
        placeholder="Image link"
        type="url"
        onChange={(e) => setImageUrl(e.target.value)}
        value={imageUrl}   // ✅ bind state
      />
      <MyInput
        placeholder="Title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}   // ✅ bind state
      />
      <MyTextArea
        placeholder="What's on your mind..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}   // ✅ bind state
      />
      <MyButton
        onClick={async () => {
          if (!title || !imageUrl || !description) {
            toast.error("Please fill all the required fields");
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
            toast.success("Blog created successfully");
            setTitle("");       // ✅ clear form after submit
            setDescription("");
            setImageUrl("");
          }
        }}
        text="Upload Blog"
      />
    </div>
  );
}

export default CreateBlog;
