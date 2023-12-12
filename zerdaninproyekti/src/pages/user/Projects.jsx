import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { editProject, postProject } from '../../redux/slices/projectSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Projects() {
    let [projects, setProjects] = useState([])
    let [editedProject, setEditedProject] = useState({ id: '', name: '', description: '' })
    let [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        axios("http://localhost:80/projects").then((res) => {
            setProjects(res.data)
        })
    }, [])
  

let [searchinp, setSearchinp] = useState('')
let [ filteredBlogs, setFilteredBlogs] = useState([])
    const handleEdit = () => {
        dispatch(editProject(editedProject));
        setEditedProject({ id: '', name: '', descrription: '' });
        setEdit(true)
    };


    return (
        <>
          {/* <input type="text" placeholder='search blog...' value={searchinp} onChange={(e)=>{
            setSearchinp(e.target.value)
            console.log(e.target.value);
            let searchinp = e.target.value
            const filtereddata = blogs.filter((blog) => blog.name.toLowerCase().includes(searchinp.toLowerCase()));
            setFilteredBlogs(filtereddata)
          
        
            }} /> <button style={{marginTop:"10px"}}>search</button>
            <ul>
            {filteredBlogs.length>0 && filteredBlogs.map((filteredBlog)=>(
                    <li key={uuidv4()}>{filteredBlog.name}

                    {edit ?
                        (
                            <form onSubmit={() => {
                                dispatch(editBlog(editedBlog));
                                setEditedBlog({ id: '', name: '', descrription: '' });
                                setEdit(true)
                                axios.put(`https://6578b209f08799dc8045e198.mockapi.io/projects/${filteredBlog.id}`,{
                                    name:editedBlog.name,
                                    description:editedBlog.description
                                })
                            }}>
                                <input type="text" placeholder='change blog name' value={editedBlog.name} onChange={(e) => setEditedBlog({ ...editBlog, name: e.target.value })} />
                                <input type="text" placeholder='change blog description' value={editedBlog.description} onChange={(e) => setEditedBlog({ ...editedBlog, description: e.target.value })} />
                                <button type='submit' >Save</button>
                                <button onClick={()=>{
                                    axios.delete(`https://6578b209f08799dc8045e198.mockapi.io/projects/${filteredBlog.id}`)
                                    setBlogs(blogs.filter((b)=> b.id !== blog.id))
                                }}>delete</button>
                            </form>
                        ) : (
                            <button onClick={() => {
                                dispatch(editBlog(filteredBlog))
                                handleEdit(filteredBlog)
                               
                            }}>edit</button>
                        )
                    }

                </li>
                ))}
            </ul> */}
            <ul style={{margin:"10px"}}>
                {
                    projects && projects.map((project) => {
                        return (
                            <li key={uuidv4()}>{project.name}

                                {edit ?
                                    (
                                        <form onSubmit={() => {
                                            dispatch(editProject(editedProject));
                                            setEditedProject({ id: '', name: '', descrription: '' });
                                            setEdit(true)
                                            axios.put(`http://localhost:80/projects/${project.id}`,{
                                                name:editedProject.name,
                                                description:editedProject.description
                                            })
                                        }}>
                                            <input type="text" placeholder='change project name' value={editedProject.name} onChange={(e) => setEditedProject({ ...editedProject, name: e.target.value })} />
                                            <input type="text" placeholder='change project description' value={editedProject.description} onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })} />
                                            <button type='submit' >Save</button>
                                            <button onClick={()=>{
                                                axios.delete(`http://localhost:80/projects/${project.id}`)
                                                setProjects(projects.filter((p)=> p.id !== project.id))
                                            }}>delete</button>
                                        </form>
                                    ) : (
                                        <button onClick={() => {
                                            dispatch(editProject(project))
                                            handleEdit(project)
                                           
                                        }}>edit</button>
                                    )
                                }

                            </li>
                        )
                    })
                }
            </ul>

            <button type='submit'>Add Blog</button>
            <button onClick={()=>{
                setBlogs([...blogs].sort((a,b) => a.name.localeCompare(b.name)))
            }}>Sort Blogs</button>

          

        </>
    )
}

export default Projects