import { StyleSheet } from 'react-native';
import { colors } from '../assets/colors';

export const GlobalStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.background.basic,
        paddingHorizontal: '100%',
    },
    TextBase: {
        color: colors.text.primary,
    },
});
