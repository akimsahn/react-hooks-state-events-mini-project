import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [taskList, setTaskList] = useState(TASKS)

  function handleCategoryFilter(event) {
    setCategoryFilter(event.target.value)
  }
  
  function handleFormSubmit(newTask) {
    const tasksArray = [...taskList, newTask]
    setTaskList(tasksArray)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryFilter={categoryFilter} onCategoryFilter={handleCategoryFilter} />
      <NewTaskForm onTaskFormSubmit={handleFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={taskList.filter(task => categoryFilter==="All" ? true : task.category===categoryFilter)} />
    </div>
  );
}

export default App;
