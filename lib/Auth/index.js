
import fetch from 'isomorphic-unfetch'


export const login = ({ token }) => {
  cookie.set('token', token, { expires: 1 })
  Router.push('/profile')
}

export const loginUser = async (username, password) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    if(response.ok){
        const data = await response.json()
        console.log(data)
    } else {
        console.log('login failed')
    }

}
