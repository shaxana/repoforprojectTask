import React, { useRef } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { postProject } from '../../redux/slices/projectSlice'
import { useNavigate } from 'react-router-dom'
function PostProject() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const projectname = useRef()
    const projectdescription = useRef()
  return (
   <form onSubmit={()=>{
    axios.post("http://localhost:80/projects/", {
        name: projectname.current.value,
        description: projectdescription.current.value
    })
    dispatch(postProject(projects))
   }} >
    <label htmlFor="projectName">Project name</label>
    <input type="text" placeholder='enter projectName' id='projectName' ref={projectname}/>
    <br /> <br />
    <label htmlFor="projectDescription">Project description</label>
    <input type="text" id='projectDescription' placeholder='enter project description'  ref={projectdescription} />
    <br /> <br />
    <button type='submit' onSubmit={()=>{
      navigate("/")
    }}>submit</button>
   </form>
  )
}

export default PostProject