import * as React from 'react';
import * as styles from './Input.styl';

export interface InputProps {
    inputProps: React.InputHTMLAttributes<EventTarget>;
    onChange: React.EventHandler<React.FormEvent<EventTarget>>;
}

/**
 * Just stateless input
 */
export class Input extends React.Component<InputProps, any> {
    render() {
        const { inputProps, onChange } = this.props;

        return (
            <label className={styles.label}>
                <input {...inputProps} className={styles.input} onChange={onChange} />
            </label>
        );
    }
}

export default Input;
