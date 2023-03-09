import "../style/shop.css"
import MaterialIcon from 'material-icons-react';

const AmountAdjust = ({productId, amount, handleAmountChange, handleAmountDec, handleAmountInc}) => {

    return (
        <div className="amount">

            <div className="icon" onClick={handleAmountDec.bind(null, productId)} data-testid="remove-icon" >
                <MaterialIcon icon="remove" size={20}/>
            </div>
            <input type='text' id="amnt" placeholder="0" value={ amount } onChange={handleAmountChange.bind(null, productId)}></input>
            <div className="icon" onClick={handleAmountInc.bind(null, productId)} data-testid="add-icon">
                <MaterialIcon icon="add" size={20}/>
            </div>
                            
        </div>
    );
}

export default AmountAdjust;