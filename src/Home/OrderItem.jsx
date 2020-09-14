import React from '.react';

const OrderItem = () => {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Ordenar por" id="nav-dropdown">
                <NavDropdown.Item eventKey="1.1">Título</NavDropdown.Item>
                <NavDropdown.Item eventKey="1.2">Fecha</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}
export default OrderItem;