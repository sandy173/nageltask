function ExpenseItem(props) {
    
    return (
        <div>
            <div>{props.date.toISOString()}, {props.title}, ${props.amount}</div>
        </div>
    );
}

export default  ExpenseItem;