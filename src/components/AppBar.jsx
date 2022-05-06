import { StyleSheet, View, ScrollView } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
    },
    scroll: {
        paddingBottom: 15,
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10,
    }
})

const AppBarTab = ({active, children, to}) => {
    return(
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab active to='/'>Repositories</AppBarTab>
                <AppBarTab active to='/signin'>Sign In</AppBarTab>
                <AppBarTab active to='/'>Repositories</AppBarTab>
                <AppBarTab active to='/signin'>Sign In</AppBarTab>
                <AppBarTab active to='/'>Repositories</AppBarTab>
                <AppBarTab active to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar