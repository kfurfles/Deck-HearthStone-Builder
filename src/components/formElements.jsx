import React from 'react'

export function InputEl({ name, placeholder, busy }){
    return (
        <div className="col">
            <div className="form-group">
                <label htmlFor="{name}">{name[0].toUpperCase() + name.slice(1)}</label>
                <input type="text" className="form-control" id="name" disabled={busy} placeholder={placeholder} />
            </div>
        </div>
    )
}