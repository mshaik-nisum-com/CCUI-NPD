import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Notification extends Component {

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

    closeMessage() {
        const self = this;
        if (self.props.enableCloseIcon) {
            self.refValue.current.classList.add('hidden')
        }
    }

    removeHiddenClass(self) {
        if (self.refValue && self.refValue.current) {
            self.refValue.current.classList.remove('hidden')
        }
    }

    addHiddenClass(self) {
        if (self.refValue && self.refValue.current) {
            self.refValue.current.classList.add('hidden')
        }
    }

    render() {
        this.removeHiddenClass(this)
        return (
            <div className={`alert ${this.notificationTypes[this.props.type]}`} ref={this.refValue}>{this.props.message}
                {this.props.enableCloseIcon ? <b className="close-icon" onClick={this.closeMessage.bind(this)}>x</b> : ''}
            </div>
        )
    }

    componentDidUpdate() {
        const self = this;
        const timer = parseInt(this.props.autoCloseTime);
        if (timer) {
            setTimeout(() => {
                self.addHiddenClass(self)
            }, timer)
        }
    }
}

Notification.propTypes = {
    type: PropTypes.string.isRequired,
    autoCloseTime: PropTypes.number,
    enableCloseIcon: PropTypes.bool,
    message: PropTypes.string.isRequired
}

export default Notification