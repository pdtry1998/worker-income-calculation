const Item = (props) => {

const {day,firstname,amount} = props

const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

    return (
        <div>
            <li>{day} <span>{firstname}</span> <span>{formatNumber(amount)}</span></li>
        </div>
    )
}

export default Item