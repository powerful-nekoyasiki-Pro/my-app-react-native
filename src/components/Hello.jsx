import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { string, bool, shape } from 'prop-types';

export default function Hello(props) {
    const { children, bang, style } = props;
    return (
        <View>
            <Text style={[styles.text, style]}>
                Hello {`${children}${bang ? '!' : ''}`}{' '}
            </Text>
        </View>
    );
}

Hello.propTypes = {
    children: string.isRequired,
    bang: bool,
    style: shape()
};
Hello.defaultProps = {
    bang: false,
    style: null,
};

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    },
});
