import { Text, View } from 'react-native';
import AppBar from './AppBar.jsx';
import RepositoryList from './RepositoryList';
import { Navigate, Route, Routes } from 'react-router-native';

const Main = () => {
    return(
        <View style={{flex: 1}}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<Text>Working on it</Text>} />
            </Routes>
        </View>
    )
}

export default Main;