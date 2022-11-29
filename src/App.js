import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctors Appointment", day: "Feb 5th", reminder: true },
    { id: 2, text: "Playing League", day: "Feb 7th", reminder: false },
    { id: 3, text: "Football", day: "Mar 12th", reminder: true },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 999999);
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Manager"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task recorded"
      )}
    </div>
  );
}

export default App;
