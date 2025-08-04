import toast from "react-hot-toast";
import api from "../lib/axios";
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";

const CreatePage = () => {
    const[title, setTitle]=useState("");
    const[loading, setLoading]=useState(false);

    const navigate=useNavigate();

    const handleCreate = async (e) => {
        e.preventDefault();

        if(!title.trim()) {
            toast.error("All fields are required!");
            return;
        }

        setLoading(true);
        try{
            await api.post("/tasks/create", {
                title
            });
            toast.success("Task created successfully!");
            navigate("/");
        } catch (error) {
            console.log("Error creating task!", error);
        } finally {
            setLoading(false);
        }
    };


  return (
    <div
      id="backdrop"
      onClick={(e) => {
    if (e.target.id === "backdrop") navigate("/");
  }}
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
    >
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-xl shadow-md w-[90%] max-w-sm relative border-2 border-red-500">
        <h2 className="text-lg font-semibold mb-4 text-center text-black">Create Task</h2>

        <form onSubmit={handleCreate} className="flex flex-col gap-4">
          <input
            type="text"
            className="border border-black p-2 rounded text-black"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={()=>navigate("/")}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={loading}
            >
              {loading?"Creating...":"Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePage