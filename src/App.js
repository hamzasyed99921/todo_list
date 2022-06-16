import React , {useState} from 'react';
import ToDoList from './ToDoList';
import './App.css';
import './index.css';

function App() {

    const [inputList, setInputList] = useState("");
    const [items , setItems] = useState([]);

    const itemEvent = (event) => {
      setInputList(event.target.value)
    }
    
    const listofItems = () => {
      setItems( (oldItems) =>{
        return [...oldItems , inputList];
      });
      setInputList("");
    }

    const deleteItems = (id) => {
      console.log("delete");
     setItems( (oldItems) => {
      return oldItems.filter((arrElem , index) => {
        return index !== id;
      })
     }) 
    }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" value={inputList} placeholder="Add a items" onChange={itemEvent} />
          <button type="" onClick={listofItems}> + </button>

          <ol> 
            {/* <li>{inputList}</li> */}

            {
              items.map( (Itemsval , index) => {
                return <ToDoList 
                key={index} 
                id={index}
                onSelect={deleteItems} 
                text={Itemsval}/>
              } )
              
            }

          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
