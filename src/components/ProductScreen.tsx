import React from 'react';
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image, Footer, Anchor} from 'grommet';
import List from './List';
import CheckoutScreen from './CheckoutScreen/CheckoutScreen';
import { Basket } from 'grommet-icons';

/**
 * Product page with dog and cat food
 */
export interface Food {
    id: number
    type: string
    animal: string
    img: string
  }
export type Cart = {
    id: number
    type: string
    animal: string
    img: string
  }
  
  interface Props {}

  interface State {
    dcfood: Food[]
    cart: Cart[]
  
  }

 class ProductScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
          dcfood: [{
            id: 0,
            type: 'dry',
            animal: 'dog',
            img: 'https://cdn.royalcanin-weshare-online.io/XiKc-mQBaxEApS7LrwSZ/v2/mini-dental-ccn-packshot?w=320&auto=compress&fm=jpg'
          }, {
            id: 1,
            type: 'wet',
            animal: 'dog',
            img: 'https://cdn.royalcanin-weshare-online.io/zCJQa2sBaxEApS7LRh5U/v80/ad-jack-russel-packshot-bhn18?w=320&auto=compress&fm=jpg'
          }, {
            id: 2,
            type: 'dry',
            animal: 'cat',
            img: 'https://cdn.royalcanin-weshare-online.io/m2kUrmsBG95Xk-RB3Pu-/v4/hairskin-ne-fcn-packshot?w=320&auto=compress&fm=jpg'
          }, {
            id: 3,
            type: 'wet',
            animal: 'cat',
            img: 'https://cdn.royalcanin-weshare-online.io/-Gkua2QBG95Xk-RBidKW/v2/16-kitten-sterilised-b1-ne?w=320&auto=compress&fm=jpg'
        }],
            cart: []
        }
      }

      addFood = (food: Food)=>{
        this.setState({
            cart: [...this.state.cart, food]
          })
      }
      handleRemove = (food: Food) => {
        let index = this.state.cart.indexOf(food);
        this.setState({
          cart: [
            ...this.state.cart.slice(0, index),
            ...this.state.cart.slice(index + 1)
          ]
        });
      };

      render() {
        return (
          <Grommet theme={header}>
          <Header background="brand" pad="large">
          <Menu label="MENU" items={[{ label: 'Home'}]} />
      <h1>pet store</h1>
      <Button icon={<Basket />} hoverIndicator />
    </Header>
           
                <div className="ProductScreen">
                  <Main pad="small" justify="center" align="center">
                    <h2>ONLINE SHOP</h2>
                    <h3>Add petfood to your cart</h3>
                    </Main>
                    <List items={this.state.dcfood} addFood={this.addFood}/>
                    <CheckoutScreen handleRemove={this.handleRemove} cart={this.state.cart}/>
    
    <Footer background="#DADADA" pad="small">
  <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
  <Anchor label="INFORMATION" />
</Footer>
                </div>
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

export default ProductScreen;