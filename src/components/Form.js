import { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid'
import './Form.css'

const Form = (props) => {

    const [day,setDay] = useState('')
    const [firstname,setFirstName] = useState('')
    const [amount,setAmount] = useState(0)

    const inputDay = (event) => {
        setDay(event.target.value);
    }
    const inputName = (event) => {
        setFirstName(event.target.value);
    }
    const inputAmount = (event) => {
        setAmount(event.target.value);
    }
    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            day:day,
            firstname:firstname,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setDay('')
        setFirstName('')
        setAmount(0)
    }

    const [formValid,setFormvalid] = useState(false)

    useEffect(()=>{
        const checkData = day.trim().length>0&&firstname.trim().length>0&&amount!==0
        setFormvalid(checkData)
    },[day,firstname,amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <div>
                    <label>วันที่</label>
                    <input type="text" placeholder="กรอกวันที่" onChange={inputDay} value={day}/>
                </div>
                <div>
                    <label>ชื่อ</label>
                    <input type="text" placeholder="กรอกชื่อคนงาน" onChange={inputName} value={firstname}/>
                </div>
                <div>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="กรอกจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className="btn" type="submit" disabled={!formValid}>บันทึก</button>
                </div>
            </form>
        </div>
    )
}
export default Form