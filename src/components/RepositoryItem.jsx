import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const RepositoryItem = (props) => {
    return(
        <View key={props.id} style={styles.container}>
            <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyledText>
            <StyledText >Description: {props.description}</StyledText>
            <StyledText >Language: {props.language}</StyledText>
            <StyledText >Stars: {props.stargazersCount}</StyledText>
            <StyledText >Forks: {props.forksCount}</StyledText>
            <StyledText >Review: {props.reviewCount}</StyledText>
            <StyledText >Rating: {props.ratingAverage}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
})

export default RepositoryItem;