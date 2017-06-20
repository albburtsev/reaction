const FORMS_UPDATE = 'FORMS_UPDATE';

export interface IFormSigninStore {
    login: string;
    password: string;
}

export interface IFormSignupStore {
    name: string;
    login: string;
    password: string;
}

export interface IFormsStore {
    signin: IFormSigninStore;
    signup: IFormSignupStore;
}

export interface IUpdateAction {
    type: string;
    form: keyof IFormsStore;
    name: string;
    value: string;
}

const defaultState = (): IFormsStore => ({
    signin: {
        login: '',
        password: ''
    },
    signup: {
        name: '',
        login: '',
        password: ''
    }
});

/**
 * Creates action for updating field value
 */
export const update = (
    form: keyof IFormsStore,
    name: string,
    value: string
): IUpdateAction =>
    ({type: FORMS_UPDATE, form, name, value});

export default (state: IFormsStore = defaultState(), action: IUpdateAction): IFormsStore => {
    switch (action.type) {
        case FORMS_UPDATE:
            // @todo: waiting for immutable state
            (state[action.form] as any)[action.name] = action.value;
            return state;

        default:
            return state;
    }
};
