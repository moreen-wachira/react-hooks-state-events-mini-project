// App.jsx
import React, { useState } from 'react';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import CategoryFilter from './CategoryFilter';

const App = ({ tasksData, categoriesData }) => {
  const [tasks, setTasks] = useState(tasksData);
  // Remove setCategories if you are not using it
  // const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleTaskFormSubmit = (newTask) => {
    // Assuming your tasks have unique IDs
    newTask.id = tasks.length + 1;
    setTasks([...tasks, newTask]);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === "all" ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter categories={categoriesData} onSelectCategory={handleSelectCategory} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={categoriesData} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
};

export default App;
