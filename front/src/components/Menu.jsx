import { Container, ListGroup } from "react-bootstrap";


const Menu = () => {

    const bebidas = [
        {id: 1, nombre: 'Coca-Cola', precio: 2.5},
        {id: 2, nombre: 'Fanta de Naranja', precio: 2.5}
    ]

    return (
        <>
            <Container fluid className="w-50">
                <h1 className="text-center">Menú</h1>
                <ListGroup >
                {bebidas.map(bebida => (
                    <ListGroup.Item className="d-flex justify-content-around" key={bebida.id}>
                        <div>
                        {bebida.nombre}
                        </div> 
                        <div>
                        {bebida.precio}€
                        </div>
                    </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </>
    )
}

export default Menu;