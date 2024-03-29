import Todo from "../model/Todo"
const mongoose = require('mongoose')
import dbConnect from "./dbConnect";
import { redirect } from 'next/navigation'

export default function Home() {


  //function to save todo 
  async function newNote(data : any){
    "use server";
    let title = data.get('title')?.valueOf();
    let note = data.get('note')?.valueOf();

    try {
      dbConnect();
      let newNote = new Todo({title , note});
      await newNote.save();

    }catch(error){
      console.log(error)
    }
    redirect(`/show`) // Navigate to the new notes 
  }
  return (
    <main className='m-10 space-y-5'>
      <h1 className="text-xl font-bold"> Note</h1>
        <form action={newNote} >
          <div>
            <label className="block  text-lg font-medium text-dark ">Title</label>
            <br />
            <input
              type="text"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label className='block pt-2  text-lh font-medium text-dark'>Note</label>
            <br />
            <textarea
              name="note"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <button  type="submit" className="mt-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
        </form>

    </main>
  )
}
