import Buttom from '@material-ui/core/Button';

//Types
import { CartItemType } from '../App';

//Styles
import { Wrapper } from './CartItem.styles';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price : ${item.price}</p>
                <p>Total : ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Buttom
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}
                > - </Buttom>
                <p>{item.amount}</p>
                <Buttom
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(item)}
                > + </Buttom>
            </div>
        </div>
        <img src={item.image} alt={item.title} />


    </Wrapper>
);

export default CartItem; 