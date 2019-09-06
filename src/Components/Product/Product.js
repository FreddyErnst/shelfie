import React,{Component} from 'react'


class Product extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div className="productbox">
            <img src={this.props.img} className="images" />
            <h1>{this.props.name}</h1>
            <h2>{this.props.price}</h2>
            </div>

        )
    }
}

export default Product;