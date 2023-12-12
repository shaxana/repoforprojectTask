import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'project',
  initialState:{
    projects:[]
  },
  reducers: {
    postProject: (state,action) => {
      state.projects.push(action.payload)
    },
    editProject: (state,action) => {
      const {id, name, description} = action.payload
     const existingProject = state.projects.find(project => project.id === id)
     if (existingProject){
      existingProject.name = name,
      existingProject.description = description
     }
    }
  },
})

export const { postProject,editProject} = projectSlice.actions

export default projectSlice.reducer