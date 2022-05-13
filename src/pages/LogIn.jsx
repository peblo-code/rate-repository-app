import { StyleSheet, View, Button } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from '../components/StyledTextInput';

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    }
});

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <StyledTextInput 
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        />
    )
}

export default function LoginInPage() {
    return <Formik initialValues={initialValues} onSubmit=
    {values => console.log(values)}>
        {({ handleChange, handleSubmit, values }) => {
            return (
            <View style={styles.form}>
                <FormikInputValue 
                    name="email"
                    placeholder="E-mail"
                />
                <FormikInputValue 
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                />
                <Button 
                    onPress={handleSubmit} 
                    title="Log In" 
                />
            </View>
            )
        }}
    </Formik>
}