import React from 'react'

export function InputEl({ name, value, placeholder, busy, onInput }){
    return (
        <div className="form-group">
            <label htmlFor="{name}">{name[0].toUpperCase() + name.slice(1)}</label>
            <input type="text" defaultValue={value} onInput={(e) => onInput(name,e.target.value)} className="form-control" id="name" disabled={busy} placeholder={placeholder} />
        </div>
    )
}

export function ButtonEl(props){
    return(
        <button type="submit" className="m-auto btn btn-primary d-flex align-items-center">
            {props.children}
        </button>
    )
}

export function SelectEl({ options, onSelect, busy }) {
    return(
        <div className="form-group">
            <select className="custom-select" disabled={busy} onChange={onSelect} id="inputGroupSelect04">
                {options.map(({ value, text }) =>{
                    return <option key={value} value={value}>{text}</option>
                })}
            </select>
        </div>
    )
}