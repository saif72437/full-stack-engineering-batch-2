import React, { useState } from "react";
import MyInput from "../components/MyInput";
import MyTextArea from "../components/MyTextarea";
import MyButton from "../components/MyButton";
import { toast } from "sonner";

function CreateBlog() {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [imageUrl,setImageUrl] = useState("")
  return (
    <div className="max-w-4xl  mx-auto mt-10 flex flex-col items-center gap-10">
      <MyInput
        placeholder={"Image link"}
        type={"url"}
        onChange={(e) => {setImageUrl(e.target.value)}}
        value={""}
      /> <MyInput
        placeholder={"Title"}
        type={"text"}
        onChange={(e) => {setTitle(e.target.value)}}
        value={""}
      />
      <MyTextArea
        placeholder={"Whats on your mind..."}
        onChange={(e) => {setDescription(e.target.value)}}
        value={""}
      />
      <MyButton onClick={()=>{

        if(!title || !imageUrl || !description){
          toast.error("Please fill all the required fields")
        }
      }} text={"Upload Blog"}/>
    </div>
  );
}

export default CreateBlog;
