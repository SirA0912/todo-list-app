import { useState } from 'react'
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Box,
} from '@chakra-ui/react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import ToDoItem from './component/ToDoItem'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false }
      ])
      setNewTodo('')
    }
  }

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container maxW="container.sm" py={10}>
      <VStack spacing={8} width="100%">
        <Heading>ToDo List</Heading>
        <Box width="100%" display="flex" gap={4}>
          <Input
            value={newTodo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleAddTodo()}
          />
          <Button onClick={handleAddTodo} colorScheme="blue">
            Add
          </Button>
        </Box>
        <VStack width="100%" spacing={2} align="stretch">
          {todos.map(({ id, text, completed }) => (
            <Box key={id}>
              <ToDoItem
                text={text}
                completed={completed}
                onToggle={() => handleToggle(id)}
                onDelete={() => handleDelete(id)}
              />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  )
}

export default App
