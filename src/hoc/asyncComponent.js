import React, { Component } from 'react'

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default})
                })
        }

        render() {
            return (
                <div>

                </div>
            );
        }

    }
}