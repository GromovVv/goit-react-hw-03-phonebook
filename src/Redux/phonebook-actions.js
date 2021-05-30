import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('phonebook/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number
    },
}));

export const deleteContact = createAction('phonebook/delete');

export const changeFilter=createAction('phonebook/changeFilter')
