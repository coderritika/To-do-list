/*"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    //console.log(title)
    //console.log(desc)
    setMainTask([...mainTask, { title, desc }]);
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2> No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h4 className='text-2xl font-semibold'>{t.title}</h4>
            <h6 className='text-xl font-medium text-blue-600 italic'>{t.desc}</h6>

          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )
    })
  }
  return (
    <>
      <h1 className='bg-black text-white text-5xl p-5 text-center font-serif font-bold'>
        Ritika's To Do List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />

        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder="Enter your Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 '> Add Task</button>

      </form>
      <hr />
      <div className=' p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>

  )
}

export default page*/
"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc, done: false }])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  const completeHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask[i].done = !copyTask[i].done
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h4 className={`text-2xl font-semibold ${t.done ? 'line-through' : ''}`}>{t.title}</h4>
            <h6 className={`text-xl font-medium text-blue-600 italic ${t.done ? 'line-through' : ''}`}>{t.desc}</h6>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => completeHandler(i)}
              className='bg-green-400 text-white px-4 py-2 rounded font-bold mr-2'
            >
              {t.done ? 'Undo' : 'Done'}
            </button>
            <button
              onClick={() => deleteHandler(i)}
              className='bg-red-400 text-white px-4 py-2 rounded font-bold'
            >
              Delete
            </button>
          </div>
        </li>
      )
    })
  }

  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/unicorn.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
        <h1 className='text-white text-5xl p-5 text-center font-serif font-bold'>
          <span className="inline-flex items-center">
            <span className="text-white mr-2">+</span>
            Ritika's To Do List
          </span>
        </h1>
        <form onSubmit={submitHandler} className="text-center w-full max-w-md">
          <input
            type="text"
            className='text-2xl border-zinc-800 border-4 m-2 px-4 py-2 w-full'
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className='text-2xl border-zinc-800 border-4 m-2 px-4 py-2 w-full'
            placeholder="Enter your Description Here"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
        </form>
        <hr className='w-full max-w-md' />
        <div className='p-8 bg-slate-200 bg-opacity-75 w-full max-w-2xl mt-4 rounded overflow-y-auto'>
          <ul>{renderTask}</ul>
        </div>
      </div>
    </div>
  )
}

export default Page
