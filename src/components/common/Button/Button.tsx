import * as React from 'react';
import * as cx from 'classnames';

import * as styles from './Button.styl';

export enum ButtonPreset {
    Default = styles.presetDefault as any,
    Accent = styles.presetAccent as any
}

export interface ButtonProps {
    preset?: ButtonPreset
}

export default class Button extends React.Component<ButtonProps, any> {
    render(): React.ReactElement<any> {
        const {preset, children} = this.props;

        return (
            <button className={cx(styles.button, preset)}>
                {children}
            </button>
        );
    }
};
