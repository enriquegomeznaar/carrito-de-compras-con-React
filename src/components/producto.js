import { Component } from "react";
import Boton from './boton';
const styles = {
    producto: {
        border: '1px solid #eee',
        boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        padding: '5px 15px',
        width: '30%'

    },
    img: {
        width: '100%'
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarrito } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Boton onClick={() => agregarAlCarrito(producto)}>
                    Agregar al carro
                </Boton>
            </div>
        )

    }
}

export default Producto