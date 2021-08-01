import { HIDDEN, INPUT, TEXTAREA, REQUIRED, LENGTH } from '../components/UI/FormInput/FormInput';

export const PROJECT = {
    name: {
        value: '',
        type: INPUT,
        label: 'Name',
        validators: [REQUIRED],
        [LENGTH]: 15
    },
    desc: {
        value: '',
        type: TEXTAREA,
        label: 'Description',
        validators: [REQUIRED],
        [LENGTH]: 250
    },
    owner: {
        value: '',
        type: INPUT,
        label: 'Owner',
        validators: [REQUIRED],
        [LENGTH]: 50
    },
    _id: {
        value: '',
        type: HIDDEN,
        label: '_id',
        validators: [REQUIRED]
    },
}