import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {

    const [text,setText] = useState('');
    const [todos,setTodo] = useState([]);

    const textChangeHandler = (value) => {
        setText(value);        
    }

    const createTodoHandler = () => {
        //todo make better error handling
        if(!text) {
           return alert('Missing Todo Text!')
        } ;
        const newTodo = {
            text,
            isCompleted : false,
        };
        setTodo(oldTodos => [...oldTodos,newTodo])
        setText('');
    }
    
  return (
    <View style={styles.body}>
        <View>
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
        alignItems : 'center',
        gap : 30,
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