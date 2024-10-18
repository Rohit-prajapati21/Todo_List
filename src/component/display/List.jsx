import sty from './list.module.css'
import {useDispatch} from 'react-redux'
import { todoActions } from '../../store/store'
function List({data,index}) {
const dispatch = useDispatch()
const {deleteTodo} = todoActions
  function handleDelete(){
   dispatch(deleteTodo(index))
  }
  return (
    <div className={sty.list}>
      <div>
       <span>{data.task}</span>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default List