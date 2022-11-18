import React from 'react'

export const useRestOfElements = (arr) => {

    const resto = arr.slice(0, -1) || [];

    return resto;
}
