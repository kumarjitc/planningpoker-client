import React, { Component } from 'react';
import FormContainer from '../UI/FormContainer/FormContainer';
import FormGroup from '../UI/FormGroup/FormGroup';

export default class AddNewSession extends Component {
    state = {
        sessionName: {
            value: 'TEST VALUE',
            type: 'input'
        },
        sprint: {
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
        }
    };

    componentDidMount = () => {
        this.setState({
            ...this.state
        });
    };

    handleChange = (event, name) => {
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    };

    render() {
        const formValues = { ...this.state };

        return (
            <FormContainer header="Add New Session">
                <FormGroup {...this.state} />
            </FormContainer>
        );
    };
}
