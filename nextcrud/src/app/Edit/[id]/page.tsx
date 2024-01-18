import React from 'react'
import dbConnect from '@/app/dbConnect'
import Todo from '@/model/Todo'
import { redirect } from 'next/navigation'

export default async function page({params} : any) {
    dbConnect()
    const todos = await Todo.findOne({_id: params.id})
    
    async function updateNote(data : any){
        "use server";
        let title = data.get("title")?.valueOf();
        let note = data.get("note")?.valueOf();
        let updatedNote = await Todo.findByIdAndUpdate({_id: params.id },{ title, note });
        console.log(updatedNote);

        redirect(`/show`);
    }


  return (
    <div className="m-10 space-y-5">
        <h1 className="text-xl font-bold">Edit Note</h1>
        <form action={updateNote} >
            <div>
            <label className="block  text-lg font-medium text-dark ">Title</label>
            <br />
            <input
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={todos?.title}
                />
            </div>
            <div>
            <label className='block pt-2  text-lh font-medium text-dark'>Note</label>
            <br />
            <textarea
                name="note"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={todos?.note}
            ></textarea>
            </div>
            <button  type="submit" className="mt-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Update</button>
        </form>
    </div>
  )
}
