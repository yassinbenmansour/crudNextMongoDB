import Todo from "@/model/Todo";
import Link from "next/link";
import { redirect } from 'next/navigation'
import dbConnect from "../dbConnect";

export default async function show() {
  dbConnect()

  const todos = await Todo.find();


  //function to delete note
  async function deleteNote(data : any) {
    "use server";

    let id = JSON.parse(data.get("id")?.valueOf());

    await Todo.deleteOne({ _id: id });
    redirect("/show");
  }

  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Notes</h1>



    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right ">
            <thead className="text-xs  text-white uppercase bg-gray-300  dark:text-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
            {todos.map((element : any) => {
            return (
                <>
                <tr key={element._id} className="bg-white dark:bg-gray-800 ">
                    <th scope="row" className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {element.title}
                    </th>
                    <td className="px-6">
                        {element.note}
                    </td>
                    <td className="flex">
                        <form action={deleteNote}>
                            <input type="hidden" value={JSON.stringify(element._id)} name="id"/>
                        <button
                            type="submit"
                            className="p-2 m-2 bg-red-600 rounded text-white hover:cursor-pointer"
                        >
                            Delete
                        </button>
                        </form>

                        {/* <Delete id={element._id}/> */}
                        <Link href={"/Edit/" + element._id}>
                        <button className="p-2 m-2 bg-green-500 rounded text-white hover:cursor-pointer">
                            Edit
                        </button>
                        </Link>
                    </td>
                    
                </tr>
                </>
            );
            })}
            </tbody>
        </table>
    </div>

     
    </main>
  );
}