import React, { Component } from 'react';
import FormContainer from '../UI/FormContainer/FormContainer';
import FormGroup from '../UI/FormGroup/FormGroup';
import { INPUT, LABEL, REQUIRED } from '../UI/FormInput/FormInput'

export default class StartNewgame extends Component {
    state = {
        id: {
            value: 'This is an ID',
            type: LABEL
        },
        product: {
            value: '',
            type: INPUT,
            label: 'Product',
            validators: [REQUIRED]
        },
        sprint: {
            value: '',
            type: INPUT,
            label: 'Sprint',
            validators: [REQUIRED]
        },
        /*sprint: {
            value: 'TEST SPRINT',
            type: 'date'
        },
        total: {
            type: 'select',
            options: [
                {
                    value: 'USD',
                    label: '$',
                },
                {
                    value: 'EUR',
                    label: '€',
                },
                {
                    value: 'BTC',
                    label: '฿',
                },
                {
                    value: 'JPY',
                    label: '¥',
                },
            ]
        },
        start: {
            type: 'switch'
        },
        description: {
            type: 'textarea'
        }*/
    };

    componentDidMount = () => {
        this.setState({
            ...this.state
        });
    };

    onChange = (name, value) => {
        this.setState({
            ...this.state,
            [name]: {
                ...this.state[name],
                value: value
            }
        })
    };

    onBlur = (name) => {
        this.setState({
            ...this.state,
            [name]: {
                ...this.state[name],
                invalid: true
            }
        })
    };

    render() {
        return (
            <FormContainer header="Start New Game">
                <FormGroup {...this.state} onChange={this.onChange} onBlur={this.onBlur} />
            </FormContainer>
        );
    };
}
