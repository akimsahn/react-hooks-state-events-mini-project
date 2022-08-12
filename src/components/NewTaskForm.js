import React,{useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")
  
  function handleTextChange(event) {
    setText(event.target.value)
  }
  
  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {text: text, category: category}
    onTaskFormSubmit(newTask)
    setText("")
    setCategory("Code")
  }

  const categoriesArray = categories.filter(category => category==="All" ? false : true)

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextChange} type="text" name="text" value={text}/>
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category" value={category}>
          {categoriesArray.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
