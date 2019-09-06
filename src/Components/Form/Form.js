import React,{Component} from 'react'
import Axios from 'axios';


class Form extends Component {
    constructor() {
        super()
        this.state = {
            img: '',
            name: '',
            price: ''

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className="Form">
                <form onSubmit={() => {
                    Axios.post("/api/inventory", {
                        img: this.state.img,
                        name: this.state.name,
                        price: this.state.price
                    })
                    .then (response => {
                        this.props.inventory(response.data)
                    })
                    .catch((err) => console.log(err))
                }}
                className="Form-Input">
                    <div className='Img'>

                    </div>

                    IMAGE URL:
                    <input
                    name="img"
                    onChange={this.handleChange}
                    value={this.state.img}
                    
                    />
                    PRODUCT NAME:
                    <input
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
                    PRICE:
                    <input
                    name="price"
                    onChange={this.handleChange}
                    value={this.state.price}
                    />
                    <div className="ButtonBox">
                    <button>CANCEL</button>
                    <button type="submit">Add to Inventory</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form