import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';


const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button
                title='Add Blog Post'
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create ({
    header_text: {
        color: 'red',
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 10,
    },
})

export default IndexScreen;