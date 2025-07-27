'use client'

import { useSearchParams } from 'next/navigation'

export default function Pesquisa() {
    
    const params = useSearchParams();

    const lote = params.get('lote');
    
    return (
        <>
        <p>{lote}</p>
        </>
    )
}