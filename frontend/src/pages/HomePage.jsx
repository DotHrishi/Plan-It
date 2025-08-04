import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import api from "../lib/axios"
import toast from "react-hot-toast"
import TaskCard from "../components/TaskCard"

const HomePage = () => {
  const [loading, setLoading]= useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const fetchTasks = async () => {
      try{
        const res = await api.get("/tasks");
        if(res.status===200) {
          setTasks(res.data);
          console.log("Tasks fetched successfully!");
        }
      } catch (error) {
        toast.error("Failed to fetch tasks!");
        console.log("Error fetching tasks!", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  },[])

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading ? (
          <div className="text-center text-primary py-10">Loading Tasks...</div>
        ) : tasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} setTasks={setTasks}/>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No tasks found.</div>
        )}
      </div>
    </div>
  )
}

export default HomePage