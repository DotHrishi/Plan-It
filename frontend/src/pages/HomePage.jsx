import { useEffect } from "react";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

function HomePage() {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTasks= async () => {
            try{
                const res=await ArrowPathIcon.get("/tasks");
                console.log(res.data);
                setTasks(res.data);
                setIsRateLimited(false);
            } catch (error) {
                console.log("Error fetching tasks.");
                if(error.response.status===429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed loading tasks!");
                }
            } finally {
                setLoading(false);
            }
        }

        getTasks();
    },[]);
    
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
    </div>
  )
}

export default HomePage;
