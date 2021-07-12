import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

export const AddForm = ({ dispatch }) => {
    const [data, setData] = useState({ nombre: "", numero: "" })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const { nombre, numero } = data;
    const actionAdd = {
        type: "add",
        payload: {
            id: uuidv4(),
            nombre,
            numero
        }
    }
    const handleAdd = () => {
        dispatch(actionAdd);
        setData({ nombre: "", numero: "" })
    }
    return <Fragment>
        <div className="container">
            <label className="mx-1 d-grid gap-2">
                Nombre:{" "}
                <input onChange={handleChange} value={nombre} name="nombre" type="text" className="form-control" autoComplete='off' />
            </label>
            <label className="mx-1 d-grid gap-2">
                Numero:{" "}
                <input onChange={handleChange} value={numero} name="numero" type="text" className="form-control" autoComplete='off' />
            </label>
            <label className="mx-1 d-grid gap-2">
                <button className="btn btn-info" onClick={handleAdd}>Agregar</button>
            </label>
        </div>
    </Fragment>
}