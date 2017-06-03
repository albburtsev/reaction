import * as  React from 'react';
import * as styles from './Input.styl';

/**
 * Primitive logo with react icon
 */
export default class Input extends React.Component<React.HTMLAttributes<EventTarget>, any> {
    static defaultProps = {
        type: 'text'
    }

    render() {
        return (
            <label className={styles.label}>
                <input
                    className={styles.input}
                    {...this.props}
                />
            </label>
        );
    }
};
