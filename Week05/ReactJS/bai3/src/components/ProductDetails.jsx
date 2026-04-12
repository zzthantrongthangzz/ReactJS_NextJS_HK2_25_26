import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    var {id} = useParams();
    return (
        <div>
            detail of {id}
            render--that id
        </div>
    )
}