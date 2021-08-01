import { HIDDEN, INPUT, TEXTAREA, REQUIRED } from '../components/UI/FormInput/FormInput';

export const PROJECT = {
    name: {
        value: '',
        type: INPUT,
        label: 'Name',
        validators: [REQUIRED]
    },
    desc: {
        value: '',
        type: TEXTAREA,
        label: 'Description',
        validators: [REQUIRED]
    },
    owner: {
        value: '',
        type: INPUT,
        label: 'Owner',
        validators: [REQUIRED]
    },
    _id: {
        value: '',
        type: HIDDEN,
        label: '_id',
        validators: [REQUIRED]
    },
}