import { Button, Text, View } from "react-native";

export default function TodoItem({text, isCompleted}){
    return (
        <View style={{flexDirection : 'row', justifyContent : 'space-between', marginBottom : 5}}>
            <Text style={{fontSize : 20,  }}>{text}</Text>
            
            <View style={{flexDirection : 'row', gap : 5}}>
                <Button title="Done"/>
                <Button title="Delete"/>
            </View>

        </View>
    )
}