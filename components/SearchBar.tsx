import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
    onSearch: (text: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [text, setText] = useState('');

    const handleSearch = () => {
        onSearch(text);
        setText('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Pesquisar..."
                onSubmitEditing={handleSearch}
                returnKeyType="search"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
    },
});
