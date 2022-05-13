import { Text, View } from 'react-native';
import AppBar from './AppBar.jsx';
import RepositoryList from './RepositoryList';
import { Route, Routes } from 'react-router-native';
import LoginInPage from '../pages/LogIn.jsx';

const Main = () => {
    return(
        <View style={{flex: 1}}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<LoginInPage />} />
            </Routes>
        </View>
    )
}

export default Main;