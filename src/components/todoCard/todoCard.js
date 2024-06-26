import "./todoCard.css"
import bin from "./bin.png"

function todoCard({index,task,categeory,deleteItem}) {
    const Category_Emoji = {
        Sports: "🏓",
        Learning: "📚",
        Work: "💻",
        Personal: "🔐",
        Shopping: "🛍️",
        Health: "🏥",
        Other: "📁"
    }
    const Category_Color = {
        Sports: "#4d4dff",
        Learning: "#bfff80",
        Work: "#86b300",
        Personal: "#00cc00",
        Shopping: "#ff1ab3",
        Health: "#0099ff",
        Other: "#ffad33"
    }

  return (
    <div className="todo-Card">
        {task}
        <span className="category categoryy" style={{backgroundColor: Category_Color[categeory]}}>
            {Category_Emoji[categeory]} {categeory}
        </span>
            <img src={bin} className="delete-icon categoryy" alt="deleteIcon" onClick={()=>{
                deleteItem(index)
            }}/>
        
    </div>
  )
}

export default todoCard