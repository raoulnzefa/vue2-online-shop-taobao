export const setLocalToken = (value) => {
    if(typeof value === 'object') {
        value = JSON.stringify(value)
    }
    localStorage.setItem('token', value)
}

export const getLocalToken = () => localStorage.getItem('token')


