import { useSelector } from "react-redux"
import AddForm from "./AddForm"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"

export default function todo(){

   const todos= useSelector((state)=> state.todos)
   console.log(todos)

   const dispatch=useDispatch();

   const clickHandler=(id)=>{
    console.log("delete",id)
    dispatch(deleteTodo(id))
   }
    

    return(
        <div>
            <AddForm/>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) =>(<li key={todo.id} >{todo.task}
                    <button onClick={()=> clickHandler(todo.id)}>Delete</button>
                </li>) )}
            </ul>
        </div>
    )
}