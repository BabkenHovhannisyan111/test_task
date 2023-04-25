import style from './style.module.scss'
import { useState } from 'react'
export const Search = ({ filterUser }) => {
 
    const [isChecked, setIsChecked] = useState(false)

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }
    return <div className={style.container}>
        <input type="text" onChange={(e) => { filterUser(e.target.value,isChecked) }} />
        <label className={style.switch}>
            <input type="checkbox" checked={isChecked} onChange={checkHandler}/>
                <span className={style.slider}></span>
        </label>
    </div>
}