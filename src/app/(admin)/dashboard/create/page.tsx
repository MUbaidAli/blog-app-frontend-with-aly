"use client"

import Tiptap from '@/components/Tiptap'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/tiptap-ui-primitive/button/button'
import { SelectFields } from '@/components/selectFields'
import axios from '@/config/axios'
export default function page() {

  const [formData, setFormData] = useState({title: '', tags: [], content: '',status: "" ,coverImageUrl:""})
  
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

  // const { name, value } = e.target;
  // if(t)
// Client Side validations
  setFormData((prev) => ({...prev,  [e.target?.name]:   e.target?.value , tags: e.target.name === "tags"? e.target.value.split(",") : prev.tags }));

  console.log(formData)
}


  async function onSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      // await submitFormData()
     const response =  await axios.post("/post", formData)
      alert("Blog created successfully")
      console.log(response)
    }catch (error) {
      console.error(error)
      alert("Error creating blog")
    }
  }


  
  return (<>
  
    <div className=" w-full h-full gap-3 px-5 py-3">
<form onSubmit={onSubmit} className="flex flex-col gap-3">
    <Input placeholder="Title" className="max-w-md my-3 mx-1" name="title" onChange={handleChange} />
    <Input placeholder="tag1,tag2" type="text"  className="max-w-md my-3 mx-1" name="tags" onChange={handleChange}/>
  
    <SelectFields handleChange={handleChange} />
    <Tiptap handleChange={handleChange} />
     <Button type="submit" className="max-w-md my-3 mx-1">Submit</Button>
  </form>
    </div>
  
  </>
  )
}
