import React, { Component } from 'react'

class Notifications extends Component {

    constructor(props) {
        super(props);
        this.notificationTypes = {
            error: 'alert-danger',
            success: 'alert-success',
            warning: 'alert-warning',
            info: 'alert-info'
        }
        this.refValue = React.createRef();
    }

    closeErrorMsg() {
        const self = this;
        if (self.props.closeOnClick) {
            self.refValue.current.classList.add('hidden')
        }
    }

    render() {
        return (
            <div>
                <div className={`alert ${this.notificationTypes[this.props.type]}`} ref={this.refValue}>{this.props.msg}
                    {this.props.closeOnClick ? <b className="close-icon" onClick={this.closeErrorMsg.bind(this)}>x</b> : ''}
                </div>
            </div>
        )
    }

    componentDidMount() {
        const self = this;
        const timer = parseInt(this.props.closeTime);
        if (timer) {
            setTimeout(() => {
                self.refValue.current.classList.add('hidden')
            }, timer)
        }
    }
}

export default Notifications