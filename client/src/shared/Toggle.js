import {Component} from 'react'

class Toggle extends Component {
    constructor(){
        super()
        this.state= {
            isToggled: false
        }
        toggler = () => {
            this.setState(prevState => ({
                isToggled: !prevState.isToggled
            }))
        }
    }
    render() {
        return this.props.render({isToggled: this.props.isToggled , toggle: this.toggler})
    }
}

export default Toggle 