import React, { useState } from 'react'
import { ContactProps } from "../interface/contact";
import { v4 as uuidv4 } from "uuid";

export const AddForm = ({ dispatch }) => {
    const [data, setData] = useState<ContactProps>({ nombre: "", numero: "" })
    const { nombre, numero } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
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
    return <div className="container">
        <label className="mx-1 d-grid gap-2">
            Nombre:{" "}
            <input onChange={handleChange} value={nombre} placeholder={"Steven Rogers"} name="nombre" type="text" className="form-control" autoComplete='off' />
        </label>
        <label className="mx-1 d-grid gap-2">
            Numero:{" "}
            <input onChange={handleChange} value={numero} placeholder={"3235-4500"} name="numero" type="phone" className="form-control" autoComplete='off' />
        </label>
        <label className="mx-1 d-grid gap-2">
            <button className="btn btn-info" onClick={handleAdd}>Agregar</button>
        </label>
    </div>
}