import React from 'react';

const Products = ({products, showCategories}) => {

    return (
        <div className="products">

            {/* Dirección del sitio donde está ubicado el cliente */}
            <div className="products-header">
                <div className="direccion">
                    <a href="/"> Inicio</a>
                    <p> / </p>
                    <a href="/products-list"> Lista de Productos</a>
                </div>
            </div>

            {/* Body de la sección productos donde va el filtro y los productos */}
            <div className="product-body">
                <div className="products-sidebar">
                    <div className="products-sidebar-title">
                        Filtros
                    </div>
                    <button onClick={() => showCategories('Quimico')}> Químicos</button>
                    <button onClick={() => showCategories('Organico')}> Orgánicos</button>
                </div>

                <div className="products-list">
                    {products.map((product)=>(
                        <div className="product-item" key={product.id}>
                            <img src={product.urlImg} alt="" height="250px" width="300px"/>
                            <h1 className="product-title"> {product.name}</h1>
                            <p className="product-type"> Tipo: {product.Tipo}</p>
                        </div>         
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Products;