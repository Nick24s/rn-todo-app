import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import TodoItem from "./components/todoItem";

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
        // todo add ids
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
            onSubmitEditing={createTodoHandler}
            />
            <Button title="Create" onPress={createTodoHandler}/>
        </View>
        
        <View style={{width: '100%', }}>
            {todos.map(todo => <TodoItem key={todo.text} {...todo}/>)}
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