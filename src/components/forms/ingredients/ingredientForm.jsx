// IngredientForm.jsx
import React, { useState } from 'react';
import Boton from '../../buttons/login/loginButton';
import './ingredientStyle.css'

function IngredientForm() {
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [bestbyDate, setBestbyDate] = useState('');
    const [boughtDate, setBoughtDate] = useState('');
    const [price, setPrice] = useState(0);

    return (
        <form className="formulario-producto">
            <div>
                <label htmlFor="sku">SKU:</label>
                <input
                    id="sku"
                    type="text"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="quantity">Cantidad:</label>
                <input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="bestbyDate">Fecha de Vencimiento:</label>
                <input
                    id="bestbyDate"
                    type="date"
                    value={bestbyDate}
                    onChange={(e) => setBestbyDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="boughtDate">Fecha de Compra:</label>
                <input
                    id="boughtDate"
                    type="date"
                    value={boughtDate}
                    onChange={(e) => setBoughtDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Precio:</label>
                <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            {/* Botones */}
            <Boton className="boton-agregar" texto="Agregar" onClick={() => { /* Lógica del botón agregar */ }} />
            <Boton className="boton-editar" texto="Editar" onClick={() => { /* Lógica del botón editar */ }} />
            <Boton className="boton-eliminar" texto="Eliminar" onClick={() => { /* Lógica del botón eliminar */ }} />
            <Boton className="boton-limpiar" texto="Limpiar" onClick={() => { /* Lógica del botón limpiar */ }} />
        </form>
    );
}

export default IngredientForm;