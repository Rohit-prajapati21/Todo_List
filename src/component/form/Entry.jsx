import { useRef } from 'react'
import sty from './entry.module.css'
import { todoActions } from '../../store/store'; 
import {useDispatch} from 'react-redux'
function Entry() {
  const{addTodo} =todoActions;
  const dispatch = useDispatch()
  const Task = useRef();
  function handleSubmit(e){
e.preventDefault();
  let task = Task.current.value;
  const obj ={task};
   dispatch(addTodo(obj));
  Task.current.value=""
  }
  return (
    <div className={sty.entry_Box}>
      <form action="">
        <input type="text" placeholder="Enter task here..." ref={Task}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default Entry