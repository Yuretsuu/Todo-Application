import { useDispatch } from "react-redux";
import { TodoActions } from "../store/todoSlice";

const TodoRow = ({todo}) => {
    const dispatch = useDispatch();
    const HandleDelBtn = () => {
        dispatch(TodoActions.delTodo(todo));
    }
    return (
        <div className="todo-row-2">
            <div className="todo-name">{todo}</div>
            <button className="btn btn-danger" onClick={HandleDelBtn}> Delete</button>
        </div>
    )
}

export default TodoRow;