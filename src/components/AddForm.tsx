import React, { useState } from 'react'
import { ContactProps } from "../interface/contact";
import { v4 as uuidv4 } from "uuid";

export const AddForm = ({ dispatch }) => {
    const [data, setData] = useState<ContactProps>({ nombre: "", numero: "", email: "" })
    const { nombre, numero, email } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const actionAdd = {
        type: "add",
        payload: {
            id: uuidv4(),
            nombre,
            numero,
            email
        }
    }
    const handleAdd = () => {
        dispatch(actionAdd);
        setData({ nombre: "", numero: "", email: "" })
    }
    return <div className="container">
        <Control onChange={handleChange} value={nombre} placeholder={"Steven Rogers"} name={"nombre"} type={"text"} />
        <Control onChange={handleChange} value={numero} placeholder={"3235-4500"} name={"numero"} type={"tel"} />
        <Control onChange={handleChange} value={email} placeholder={"captainamerica@gmail.com"} name={"email"}
            type={"email"} />
        <label className="mx-1 mt-3 d-grid gap-2">
            <button className="btn btn-info" onClick={handleAdd}>Agregar</button>
        </label>
    </div>
}

export const Control = ({ onChange, value, placeholder, name, type }) => {
    return <label className="mx-1 mt-2 d-grid gap-2">
        <input onChange={onChange} value={value} type={type} placeholder={placeholder} name={name}
            className="form-control" autoComplete='off' />
    </label>
}