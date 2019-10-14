import { getUserHomepage } from "../lib/Auth"

export default class HomePage extends React.Component{
    state = {
        user: null
    }
    componentDidMount() {
        getUserHomepage().then(user => this.setState({ user }))
    }

    render(){
        return (
            <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
        )
    }

}