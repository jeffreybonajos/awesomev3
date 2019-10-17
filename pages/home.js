// import Router from 'next/router'
// import nextCookie from 'next-cookies'

// const Home = ({user}) => (
//     <div>
//         {user}
//     </div>
// )

// Home.getInitialProps = async ctx => {
//     const { token } = nextCookie(ctx)
//     try{
//         const response = await fetch('/api/home', {
//             credentials: 'include',
//             headers: {
//                 Authorization: token
//             }
//         })
//         if(response === 200){
//             const user = await response.json()
//             console.log('user', user)
//             return user
//         }else {
//             console.log('failed')
//         }
//     } catch(e){
//         throw new Error ('error')
//     }
// }

// export default Home