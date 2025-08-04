import React from "react";
import { Link } from "react-router-dom";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

const TaskCard = ({ task, setTasks }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    try {
      await api.delete(`/tasks/delete/${id}`);
      setTasks((prev) => prev.filter((task) => task._id != id));
      toast.success("🎉 Task Completed!");
    } catch (error) {
      console.log("Unable to proceed your request!", error);
      toast.error("Try again later!");
    }
  };

  return (
      <div className="flex flex-col justify-items-end h-full w-full bg-black p-4 rounded-[20px] border-solid border-4 border-red-500">
        <h3 className="card-title text-[#ffffff]">{task.title}</h3>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60 text-[#22ff26]">
            {formatDate(new Date(task.createdAt))}
          </span>
          <div className="flex items-stretch gap-1">
            <button
              className="btn btn-ghost btn-xs text-error text-[#ffffff] bg-[#075aff] p-2 rounded-[10px]"
              onClick={(e) => handleDelete(e, task._id)}
            >
              Completed ✅
            </button>
          </div>
        </div>
      </div>
  );
};

export default TaskCard;
