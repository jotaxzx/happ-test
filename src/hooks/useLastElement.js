import React from 'react'


export const useLastElement = (arr) => {
  
    const ultimoElemento = arr[arr.length - 1] || ""

    return ultimoElemento;
}
