import { Item } from "../item/Item"
import style from'./style.module.scss'


export const ListItem=({users,deleteUser})=>{
    return <div className={style.container}>
            {
                users?.map((elem,index)=>{
                    return <Item user={elem} key={index} deleteUser={deleteUser}/>
                })
            }
    </div>
}