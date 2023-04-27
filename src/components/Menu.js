import react from "react";
import {Text,View } from 'react-native';
import PropTypes from 'prop-types'


export default function Menu(props) {

    const {user} = props;
    return( 
        <View>
            <Text style={{color:'white'}}>Hola {user}</Text>
        </View>
    )
}

Menu.defaultProps = {
    user: 'Victor Perozo',
}

Menu.propTypes = {
    user: PropTypes.string.isRequired,
};