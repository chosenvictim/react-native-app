/**
 * Button
 *
    <Button
      text={text}
      type={'outlined'}
      size={'medium'}
      disabled={false}
      onPress={()=>{alert('Go To Entry View')}} />
 *
 */
'use strict';

import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'


class Button extends Component {
    static propTypes = {
        onPress: React.PropTypes.func.isRequired,
        type: React.PropTypes.oneOf(['', 'outlined']),
        text: React.PropTypes.string.isRequired,
        size: React.PropTypes.oneOf(['', 'small', 'medium', 'large']),
        disabled: React.PropTypes.bool,
    }

    static defaultProps = {
        onPress: () => {}, // Do nothing
        type: '',
        text: 'Click Here',
        size: 'medium',
        disabled: false,
    }

    render = ()=> {
        let { text, type, onPress, size, disabled } = this.props;

        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7} disabled={disabled}
                style={[styles.button, type == 'outlined' && styles.buttonOutline, size == 'small' && styles.buttonSml, size == 'large' && styles.buttonLrg, disabled && styles.disabled]}>
                <Text style={[AppStyles.baseText, styles.button_text, type == 'outlined' && styles.buttonOutline_text, size == 'small' && styles.buttonSml_text, size == 'large' && styles.buttonLrg_text]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    // Standard
    button: {
        backgroundColor: "#002a4e",
        height: 50,
        minWidth: 150,
        margin: 5,
        justifyContent: 'center',
        borderRadius: 3,
        paddingHorizontal: 10,
    },
    button_text: {
        color: "#ef5421",
        textAlign: 'center',
        fontSize: 15,
        lineHeight: parseInt(15 + (15 * 0.5)),
        fontFamily: AppConfig.baseFont,
        fontWeight: '800',
    },

    // Outlined
    buttonOutline: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: AppConfig.primaryColor,
    },
    buttonOutline_text: {
        color: AppConfig.primaryColor,
    },

    // Large
    buttonLrg: {
        height: 65,
    },
    buttonLrg_text: {
        fontSize: 18,
        lineHeight: parseInt(18 + (18 * 0.5)),
    },

    // Small
    buttonSml: {
        height: 35,
    },
    buttonSml_text: {
        fontSize: 12,
        lineHeight: parseInt(12 + (12 * 0.5)),
    },

    // Disabled
    disabled: {
        opacity: 25,
    },
});

export default Button;
