import style from './style.module.scss'
import { useState } from 'react'
import axios from 'axios'
export const Item=({user,deleteUser})=>{
    const [styles,setStyles]=useState(user.selected?'border':'')
    
    const click=(user)=>{
        styles?setStyles(''):setStyles('border')
        let newUser={...user,selected:!user.selected}
        console.log(newUser);
        axios.put(`http://localhost:7000/users/${user.id}`, newUser)
      .then( (response)=>
      console.log(response.data)
      )
      .catch( (error)=>
      console.log(error)
      );

    }
    return <div className={style.container+' '+style[styles]} onDoubleClick={()=>{click(user)}}>
                <button onClick={()=>{deleteUser(user.id)}}>X</button>
                <p>{user.firstname} {user.lastname}</p>
                <p>{user.role}/{user.organization}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
    </div>
}