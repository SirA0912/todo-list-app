
import { Box, Container, VStack, HStack, Heading, Input, Button } from '@chakra-ui/react'
import { useState, FormEvent, ChangeEvent } from 'react'
import { TodoItem } from './component/app-function'

interface Todo {
  id: number
  text: string
  complete: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = (e: FormEvent) => {
    e.preventDefault()
    if (newTodo.trim() === "") return
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        complete: false
      }
    ])
    setNewTodo("")
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo: Todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    ))
  }

  return (
    <Container maxW="container.sm" py={8}>
      <VStack spacing={8}>
        <Heading size="lg" fontWeight="bold">To Do List</Heading>

        <form onSubmit={addTodo} style={{ width: "100%" }}>
          <HStack>
            <Input
              value={newTodo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
              placeholder="新しいタスクを入力"
              size="md"
              borderRadius="md"
            />
            <Button type="submit" colorScheme="blue" size="md" borderRadius="md">
              追加
            </Button>
          </HStack>
        </form>

        <VStack width="100%" spacing={4}>
          {todos.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              complete={todo.complete}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </VStack>
      </VStack>
    </Container>
  )
}
