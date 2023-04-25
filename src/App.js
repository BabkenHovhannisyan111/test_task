import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from './component/form/Form';
import { ListItem } from './component/listItem/ListItem';
import { Search } from './component/search/Search';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios
          .get("http://localhost:7000/users")
          .then((res) => {
              setUsers([...res.data]);
          })
          .catch((e) => {
              console.log(e);
          });
  }, []);

  const addUser = (user) => {
    axios.post('http://localhost:7000/users', user)
      .then( (response)=>
      // console.log(response.data)
      setUsers([...users,response.data])
      )
      .catch( (error)=>
      console.log(error)
      );
  }
  const deleteUser=(index)=>{
    const newUsers=users.filter(elem=>elem.id!==index)
    axios.delete(`http://localhost:7000/users/${index}`)
    .then( (response)=>{
      setUsers([...newUsers])
      }
      )
      .catch( (error)=>
      console.log(error)
      );
  }
  const filterUser=(value,isChecked)=>{
    // console.log(isChecked);
    if(value.length>=3){
    console.log(value);
    axios.get(`http://localhost:7000/users?firstname_like=${value}`)
    .then( (response)=>{
      // console.log(response.data);
      if(isChecked){
        console.log(response.data);
        let newData=response.data.filter(elem=>elem.selected===isChecked)
        setUsers([...newData])
      }else{
      setUsers([...response.data])
      }
    }
      )
      .catch( (error)=>
      console.log(error)
      );
     }else{
      axios
          .get("http://localhost:7000/users")
          .then((res) => {
              setUsers([...res.data]);
          })
          .catch((e) => {
              console.log(e);
          });
     }
     }
  return (
    <div >
     <Form addUser={addUser}/>
     <Search filterUser={filterUser}/>
     <ListItem  users={users} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
