import React from "react"

export const TableContacts = ({ state, dispatch }) => {
    const handleDelete = (id) => {
        const deleteAction = {
            type: "delete",
            payload: id
        }
        dispatch(deleteAction)
    }
    return <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Numero</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {state.map(contact => {
                return <tr id={contact.id.split("-")[0]}>
                    <td>{contact.id.split("-")[0]}</td>
                    <td>{contact.nombre}</td>
                    <td>{contact.numero}</td>
                    <td><button className="btn btn-danger" onClick={() => handleDelete(contact.id)}>Eliminar</button></td>
                </tr>
            })}
        </tbody>
    </table>
}