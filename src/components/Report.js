import { useContext } from "react"
import Data from "./Data"
import './Report.css'

const Report = () => {

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const {answer} = useContext(Data)

    return (
    <div className="report-container">
        <div>
            <h2>รายจ่ายให้คนงานทั้งหมด (บาท)</h2>
            <p className="report">฿{formatNumber((answer).toFixed(2))}</p>
        </div>
    </div>

    )
}

export default Report