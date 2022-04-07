export default function validateLogin(values) {
    let errors = {};

    //  Validate Username
    if( !values.username ) {
        errors.username = 'Username is required';
    } else if ( values.username !== 'Tractian' ) {
        errors.username= 'Username not valid'
    }

    //  Validate Password
    if( !values.password ) {
        errors.password = 'Password is required';
    } else if ( values.password !== 'Tractian' ) {
        errors.password= 'Password not valid'
    }

    return errors;
}