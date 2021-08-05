import React from 'react';
import "./Subtotal.css";
import CurrenyFormat from "react-currency-format";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrenyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
