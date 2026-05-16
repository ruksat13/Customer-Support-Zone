import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import ticketsData from "./data/tickets";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [taskList, setTaskList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  const handleAddToTask = (ticket) => {
    const alreadyAdded = taskList.find((t) => t.id === ticket.id);
    if (alreadyAdded) {
      toast.warning("এই ticket টা already Task Status এ আছে!");
      return;
    }
    setTaskList([...taskList, ticket]);
    setInProgress(inProgress + 1);
    toast.success(`"${ticket.title}" Task Status এ যোগ হয়েছে! 🎉`);
  };

  const handleComplete = (task) => {
    setTaskList(taskList.filter((t) => t.id !== task.id));
    setResolvedList([...resolvedList, task]);
    setTickets(tickets.filter((t) => t.id !== task.id));
    setInProgress(inProgress - 1);
    setResolved(resolved + 1);
    toast.success(`"${task.title}" Resolved হয়েছে! ✅`);
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Banner inProgress={inProgress} resolved={resolved} />

      <div className="main-section">
        <div className="tickets-container">
          <h2 className="section-title">Customer Tickets</h2>
          <div className="tickets-grid">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onAddToTask={handleAddToTask}
              />
            ))}
          </div>
        </div>

        <div className="task-container">
          <TaskStatus
            taskList={taskList}
            resolvedList={resolvedList}
            onComplete={handleComplete}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;