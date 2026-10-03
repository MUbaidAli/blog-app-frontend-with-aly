'use client'

import { SimpleEditor } from "./tiptap-templates/simple/simple-editor"

const Tiptap = ({handleChange}) => {


  return  <div className="w-full px-5 border-2 border-dashed border-slate-400 rounded-md">
  <SimpleEditor handleChange={handleChange}/>
  </div>
}

export default Tiptap