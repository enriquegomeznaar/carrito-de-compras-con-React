import { Component } from "react";
const styles = {
    button: {
        background: '#0a283e',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}
class Boton extends Component {
    render() {
        return <button style={styles.button}{...this.props} />
    }
}


export default Boton