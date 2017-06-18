import * as React from 'react';
import * as cx from 'classnames';

import {button, presetDefault, presetAccent} from './Button.styl';

export enum ButtonPreset {
    Default = presetDefault as any,
    Accent = presetAccent as any
}

export interface ButtonProps {
    preset?: ButtonPreset
}

/**
 * Plain button
 */
export class Button extends React.Component<ButtonProps, any> {
    render(): React.ReactElement<any> {
        const {preset, children} = this.props;

        return (
            <button className={cx(button, preset)}>
                {children}
            </button>
        );
    }
};

export default Button;
