import React, { useEffect, useReducer, useState } from 'react'
import { ContactProps } from "../interface/contact";
import { ContactsReducer } from "../reducers/ContactsReducer";
import { AddForm } from "./AddForm";
import { TableContacts } from './TableContacts';

const init = () => {
    const contacts: ContactProps[] = JSON.parse(localStorage.getItem("contactos"));
    return contacts ? contacts : [];
}

export const Contacts = () => {
    const [formView, setFormView] = useState(false);
    const [state, dispatch] = useReducer(ContactsReducer, [], init);
    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(state))
    }, [state])
    return <div className="container mt-3">
        <div className="container d-flex flex-row">
            {formView && <AddForm dispatch={dispatch} />}
            <button onClick={() => setFormView(!formView)} className="btn btn-success">
                {formView ? "Cerrar" : "Abrir"}
            </button>
        </div>
        <TableContacts state={state} dispatch={dispatch} />
    </div>
}


