import * as  React from 'react';
import * as styles from './Input.styl';

interface InputProps {
    inputProps: React.HTMLAttributes<HTMLInputElement>,
    onChange: React.EventHandler<React.FormEvent<EventTarget>>
}

/**
 * Primitive logo with react icon
 */
const Input: React.SFC<InputProps> = ({inputProps, onChange}) =>
    <label className={styles.label}>
        <input
            {...inputProps}
            className={styles.input}
            onChange={onChange}
        />
    </label>;

export default Input;
