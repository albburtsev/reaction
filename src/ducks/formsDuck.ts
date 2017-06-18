const FORMS_UPDATE = 'FORMS_UPDATE';

export interface FormSigninStore {
    login: string,
    password: string
}

export interface FormSignupStore {
    name: string,
    login: string,
    password: string
}

export interface FormsStore {
    signin: FormSigninStore,
    signup: FormSignupStore
}

export interface UpdateAction {
    type: string,
    form: keyof FormsStore,
    name: string,
    value: string
}

const defaultState = (): FormsStore => ({
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
    form: keyof FormsStore,
    name: string,
    value: string
): UpdateAction =>
    ({type: FORMS_UPDATE, form, name, value});

export default (state: FormsStore = defaultState(), action: UpdateAction): FormsStore => {
    switch (action.type) {
        case FORMS_UPDATE:
            // @todo: waiting for immutable state
            (state[action.form] as any)[action.name] = action.value;
            return state;

        default:
            return state;
    }
};
