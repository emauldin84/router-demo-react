import React from 'react'

function KoaStuff({match}) {
    return (
        <div>
            {match.params.koastuff} is life
        </div>
    )
}

export default KoaStuff