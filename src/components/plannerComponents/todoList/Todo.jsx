import {  VStack,Text } from "@chakra-ui/react";
import {AddTodo} from "../todoList/AddTodo";
import {TodoList} from "../todoList/TodoList";
import React, { useState } from "react";


export function Todo(){
    const todosList = [
        { id: 1, text: 'Hacer Ejercicio'},
        { id: 2, text: 'Bañar al perro'},
        { id:3, text: 'Ver una Pelicula'}
      ];
      
      const [todos, setTodos] = useState(todosList);

      function deleteTodo(id){
        const newTodos = todos.filter((item)=> {
          return item.id !== id 
        })
        setTodos(newTodos)
        console.log(newTodos)
        }
        
        function addTodo(newTodo){
        setTodos([...todos,newTodo])
        }
        
        function editTodo(id,updatedTodo){
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
          });
        setTodos(updatedItem)
        }
        
        
      
        return (
          <VStack p={5}>
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
          <AddTodo addTodo={addTodo}/>
          </VStack>
        );
}