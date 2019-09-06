import React,{Component} from 'react'
import Product from '../Product/Product';


class Dashboard extends Component {
    constructor() {
        super()
        
    }



    render() {
        
        return (
            <main>
                {this.props.inventory.map((element,index) => {
                    return (
                        <Product
                        key={index}
                        img={element.img}
                        name={element.name}
                        price={element.price}
                        />
                    )
                })}
            </main>
            
            
        )
        
    }

}

export default Dashboard