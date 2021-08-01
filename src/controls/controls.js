import { HIDDEN, INPUT, REQUIRED } from '../components/UI/FormInput/FormInput';

export const PROJECT = {
    name: {
        value: '',
        type: INPUT,
        label: 'Project Code',
        validators: [REQUIRED]
    },
    desc: {
        value: '',
        type: INPUT,
        label: 'Project Description',
        validators: [REQUIRED]
    },
    owner: {
        value: '',
        type: INPUT,
        label: 'Project Owner',
        validators: [REQUIRED]
    },
    _id: {
        value: '',
        type: HIDDEN,
        label: '_id',
        validators: [REQUIRED]
    },
}