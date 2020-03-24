import React from 'react';
import { Cart } from './App'
import { Food } from './App'
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image, Footer, Anchor} from 'grommet';
import { Basket } from 'grommet-icons';
import CheckOutForm from './CheckOutForm'

interface Props {
    cart: Cart[]
    food: Food
    handleRemove: (food: Food) => void
    removeOne: (food: Food) => void
    addOne: (food: Food) => void
}

interface State {
   
}
/**
 * Checkout page with chart, payment method and customer information
 */

class CheckoutScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
           
        }
    }

    onClick(){
        this.props.addOne({id: this.props.food.id,type: this.props.food.type, animal: this.props.food.animal, img: this.props.food.img, count: this.props.food.count})
      }

    
    render() {
        return (
            <Grommet theme={header}>
            <Header background="brand" pad="large">
            <Menu label="MENU" items={[{ label: 'Home'}]} />
         <h1>pet store</h1>
         <Button icon={<Basket />} hoverIndicator />
       </Header>

                <Main pad="medium" justify="center" align="center">
                    <h2>Your cart</h2>
                </Main>
                
                {this.props.cart.map(food => (
                    <>
                        <Box justify="center" align="center"
                            width="medium" height="medium" direction="row"
                            border={{ color: 'brand', size: 'small' }}
                            pad="small" margin="small">
                            <Box justify="center" align="center"
                                width="medium" height="medium"
                                pad="small" margin="small">
                                <Box justify="center" width="small"
                                    height="small" direction="row"
                                    pad="small" margin="small"><h2>Food</h2>
                                </Box>
                                <Box width="small"
                                    height="small" justify="center"
                                    pad="small" margin="small">
                                    <ul className="added_item">
                                        <li className="food" key={food.id}>{food.type}</li>
                                        <li className="food" key={food.id}>{food.animal}</li>
                                    </ul>
                                </Box>
                                <Box width="medium" justify="center"
                                    height="medium" direction="row"
                                    pad="small" margin="small">
                                    <img key={food.id} src={food.img} />
                                </Box>
                                <Box justify="center" width="small"
                                    height="small"
                                    pad="small" margin="medium">
                                    <Button
                                    label="Remove"
                                    color='brand'
                                    onClick={() => this.props.handleRemove(food)}
                                    />
                                </Box>
                                <Box justify="center" height="xlarge" width="small" direction="row"
                                    pad="small" margin="medium">
                                    <Button
                                    label="+"
                                    color='accent-3'
                                    onClick={() => this.props.addOne(food)}
                                    />
                                    <span className="CartItem-count">{food.count}</span>
                                    <Button
                                    label="&ndash;"
                                    color='accent-3'
                                    onClick={() => this.props.removeOne(food)}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </>
                ))}
                <CheckOutForm />
                   <Footer background="#DADADA" pad="small">
  <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
  <Anchor label="INFORMATION" />
</Footer> 
            </Grommet>
        )
    }

 }

 const header = {
    global: {
      font: {
        family: 'Roboto',
        size: '15px',
        color: "brand",
        height: '20px',
        justify: 'center',
        align: 'center'
      },
    },
  };
  
 export default CheckoutScreen;
