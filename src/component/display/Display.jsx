import List from "./List"
import {useSelector} from 'react-redux'
function Display() {
  const todoList= useSelector((state)=> state.todoList);
  
  return (
    <div style={{width:'100%',padding:'0px 200px'}}>
    {todoList.map((item)=> <List data={item} key={item.task} index={item.task}/> )}

    </div>
  )
}

export default Display