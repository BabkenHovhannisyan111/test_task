import { useForm } from "react-hook-form";
import style from './style.module.scss'
import axios from "axios";
import { useEffect } from "react";
const role = ['CEO', 'Manager', 'Account Manager', 'Owner', 'Operations', 'Board Member']

export const Form = ({addUser}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    
    const createUser=(user)=>{
        addUser({...user,selected:false})
        reset()
    }
    const clear = () => {
        reset()
    }
    return <div className={style.container}>
        <form className={style.form}>
            <input type="text" placeholder="First Name"
                {...register('firstname', { required: true })}
            />
            <input type="text" placeholder="Last Name"
                {...register("lastname", { required: true })}
            />
            <input type="text" placeholder="Organization"
                {...register("organization", { required: true })}
            />
            <select name="role"
                {...register("role", { required: true })}
                style={{background:"#777"}}
            >
                <option disabled selected >Role</option>

                {
                    role.map((elem, index) => {
                        return <option value={elem} key={index}>{elem}</option>
                    })
                }
            </select>
            <input type="text" placeholder="Email"
                {...register("email", {
                    required: true,
                    // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
            />
            <input type="text" placeholder="Phone"
                {...register("phone", {
                    required: true,
                    // pattern: /^(\+\d{1,2}\s)\(\d{3}\)\s\d{3}-\d{4}/,
                })}
            />
            <div>
                <button onClick={handleSubmit(createUser)}>Save</button>
                <button onClick={clear}>Clear</button>
            </div>
        </form>
    </div>
}