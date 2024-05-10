import React from 'react'

import { Route,
   createBrowserRouter,
    createRoutesFromElements, 
    RouterProvider } from 'react-router-dom'
import MainLayout from './mainlayout/MainLayout'
import HomePages from './pages/HomePages'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import Jobpage, { jobLoader } from './pages/Jobpage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'



const App = () => {
  const addJob = async function(newJob){
    try{
        const res = await fetch('/api/jobs', {
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(newJob)
        })
    }
    catch(err){
      console.error(err)
    }
  }

  const deleteJob = async function(id){
    try{
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      })
    }
    catch(err){
      console.error(err)
    }
  }

  const editJob = async function(id){
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
    }
     catch (error) {
      console.error(error)
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
          <Route index element = {<HomePages/>}/>
          <Route path='jobs' element = {<JobsPage/>}/>
          <Route path='add-job' element = {<AddJobPage addJobSubmit={addJob}/>}/>
          <Route path='jobs/:id' element={<Jobpage/>} 
            loader = {jobLoader} deleteJob = {deleteJob}/>
          <Route path='edit-job/:id' element={<EditJobPage/>}
            loader = {jobLoader} editJob = {editJob}/>
          <Route path='*' element = {<NotFound/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router = {router}/>
  )
}

export default App

