import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    listItem: {
        width: '100%',
        backgroundColor: '#eee',
        padding: 10,
        marginTop: 5
    }
});

const ListItem = (props) => (
    <View style={Styles.listItem}>
        <Text>
            {props.placeName}
        </Text>
    </View>
);

export default ListItem;