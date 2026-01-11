import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {

    const [text,setText] = useState('');

    const textChangeHandler = (value) => {
        setText(value);        
    }

    const createTodoHandler = () => {
        alert(text)
    }
    
  return (
    <View style={styles.body}>
        <View style={{marginBottom : 20}}>
            <Text style={styles.heading}>Todo List</Text>
        </View>
        
        <View style={styles.control}>
            <TextInput 
            placeholder="go to the gym!"
            value={text}
            onChangeText={textChangeHandler}
            />
            <Button title="Create" onPress={createTodoHandler}/>
        </View>
        
        <View>
            <Text>View</Text>
        </View>
    </View>
  )
}

const styles = {
    body : {
        padding : 20,
        alignItems : 'center'
    },
    heading : {
        fontSize : 30,
        marginTop : 30,
        fontWeight: 'bold'
    },
    control : {
        flexDirection : 'row',
        borderWidth :  1,
        justifyContent : 'space-between',
        width : '100%',
        borderRadius : 5,
    }  
}