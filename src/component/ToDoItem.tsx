import React from 'react'

interface ToDoItemProps {
  text: string
  complete: boolean
  onToggle: () => void
  onDelete: () => void
}

export default function ToDoItem({ text, complete, onToggle, onDelete }: ToDoItemProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #E2E8F0',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={onToggle}
          style={{
            width: '24px',
            height: '24px',
            padding: 0,
            borderRadius: '50%',
            border: `1px solid ${complete ? '#48BB78' : '#CBD5E0'}`,
            backgroundColor: complete ? '#48BB78' : 'white',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px'
          }}
        >
          {complete ? '✓' : ''}
        </button>
        <span style={{
          textDecoration: complete ? 'line-through' : 'none',
          color: complete ? '#718096' : '#2D3748'
        }}>
          {text}
        </span>
      </div>
      <button
        onClick={onDelete}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'transparent',
          color: '#E53E3E',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        削除
      </button>
    </div>
  )
}