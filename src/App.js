import { Component } from 'react'
import Productos from './components/productos';
import Navbar from './components/navbar'
import Title from './components/title';
import Layout from './components/layout'


class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ],
    carro: [],
    esCarroVisible: false,
  }
  agregarAlCarrito = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1

        })
        : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }
  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }
  render() {
    const { esCarroVisible } = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          />
        </Layout>
      </div >
    )
  }
}

export default App;
