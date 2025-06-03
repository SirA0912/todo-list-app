
import { ChakraProvider, Container, VStack, Heading, Input, Button, HStack } from '@chakra-ui/react'
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
    <ChakraProvider>
      <Container maxW="container.sm" py={8}>
        <VStack spacing={8}>
          <Heading size="lg" fontWeight="bold">to do list</Heading>

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
                add
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
    </ChakraProvider>
  )
}
=======
import { useState } from 'react'
import ToDoItem from './component/ToDoItem'

interface ToDo {
  id: number;
  text: string;
  complete: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<ToDo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim() === '') return
    
    setTodos(prev => [...prev, {
      id: Date.now(),
      text: newTodo.trim(),
      complete: false
    }])
    setNewTodo('')
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F7FAFC',
      padding: '2rem 0'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              ToDo List
            </h1>
          </div>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="新しいタスクを入力"
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #E2E8F0',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.5rem 2rem',
                  backgroundColor: '#3182CE',
                  color: 'white',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                追加
              </button>
            </div>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {todos.map(todo => (
              <ToDoItem
                key={todo.id}
                text={todo.text}
                complete={todo.complete}
                onToggle={() => {
                  setTodos(todos.map(t =>
                    t.id === todo.id ? { ...t, complete: !t.complete } : t
                  ))
                }}
                onDelete={() => {
                  setTodos(todos.filter(t => t.id !== todo.id))
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
