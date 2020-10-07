import React, { Component } from 'react'; 
import { getAddressByCep } from '../API'; 
import Toast from '../components/Toast';

export default class SearchZipCode extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            zipCode: '',
            address: {}
        }
    }

    handleChangeInput = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value }); 
    }

    searchZipCode = async () => {        
        const { zipcode } = this.state;
        const { data } = await getAddressByCep(zipcode); 
        this.setState({ address: data }); 
        console.log('Request Ajax', data); 
    }

    isEmpty = (address) => {        
        return Object.keys(address).length === 0;
    }

    render() {        
        const { zipCode, address } = this.state;
        return (
            <div className="container">
                <div className="form-group">
                    <input 
                        type="text" 
                        name="zipcode" 
                        placeholder="Enter Zip Code" 
                        className="form-control"
                        valule={zipCode} 
                        onChange={this.handleChangeInput} />
                </div>    

                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={this.searchZipCode}>Search</button>
                </div>
                <hr />
                <Toast message="Search Address By Zip Code" />
                {                    
                    !this.isEmpty(address) ? 
                        <div className="address-info">
                            <ul className="list-group">
                                <li className="list-group-item"><b>Cep:</b> {address.cep}</li>
                                <li className="list-group-item"><b>Rua:</b> {address.logradouro}</li>
                                <li className="list-group-item"><b>Bairro:</b> {address.bairro}</li>
                                <li className="list-group-item"><b>Cidade:</b> {address.localidade}</li>
                                <li className="list-group-item"><b>Estado:</b> {address.uf}</li>
                                <li className="list-group-item"><b>DDD:</b> {address.ddd}</li>
                            </ul>
                        </div> 
                    : <p>Not Yet!</p>       
                }
            </div>
        ); 
    }

}