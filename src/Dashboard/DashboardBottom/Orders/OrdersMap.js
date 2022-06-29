import './Orders.scss'
function OrdersMap(props){
    return(
        <div className='orderDiv'>
            <div className='orderLeft'>
                <img src={props.orderIcon} alt="orderIcon" />
                <hr />
            </div>
            <div className='orderRight'>
                <h4>{props.orderName}</h4>
                <p>{props.orderDate}</p>
            </div>
        </div>
    )
}

export default OrdersMap;