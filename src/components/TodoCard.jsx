import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoActions } from "../store/todoSlice";
import TodoRow from "./TodoRow";

const TodoCard = () => {
    const TodoItems = useSelector(store => store.TodoItems)
    const TodoElm = useRef();
    const dispatch = useDispatch();
    const HandleAddBtn = () => {
        let TodoName = TodoElm.current.value;
        dispatch(TodoActions.addTodo(TodoName));
        TodoElm.current.value = "";
    }

    return (
        <div className="todo-card">
            <div className="todo-head">
                TODO APP
            </div>
            <div className="todo-form">
                <div className="todo-row-1">
                    <input type="text" placeholder="Add a new todo..." ref= {TodoElm}/>
                    <button className= "btn btn-success" onClick= {HandleAddBtn}>Add</button>
                </div>
                <div className="todo-items-row">
                    {TodoItems.map((todo) => 
                    <TodoRow todo= {todo} key = {todo} />)}
                </div>
            </div>
        </div>
    )
}
export default TodoCard;