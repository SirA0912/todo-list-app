import { Box, Button, HStack } from "@chakra-ui/react"

interface TodoItemProps {
  text: string
  complete: boolean
  onToggle: () => void
  onDelete: () => void
}

export function TodoItem({ text, complete, onToggle, onDelete }: TodoItemProps) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
      <HStack justifyContent="space-between">
        <Box
          onClick={onToggle}
          cursor="pointer"
          textDecoration={complete ? "line-through" : "none"}
        >
          {text}
        </Box>
        <Button size="sm" onClick={onDelete} colorScheme="red">
          削除
        </Button>
      </HStack>
    </Box>
  )
}
