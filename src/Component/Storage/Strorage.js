export const getStore =() =>{
    const find = localStorage.getData('theme')
    return find
}

export const setStore = (value) =>{
    localStorage.setData('theme',value)
}