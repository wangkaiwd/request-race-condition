import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { type OperationType, service } from '../api'
import { useEffect, useState } from 'react'
import { Button, Card } from 'antd'

const TanstackQuery = () => {
  const [type, setType] = useState<OperationType>('a')
  const { data, refetch } = useQuery({
    queryKey: ['tanstackQuery'],
    enabled: false,
    queryFn: async () => {
      return service(type)
    },
  })
  useEffect(() => {
  }, [])
  const onClick = (a: OperationType) => {
    setType(a)
    refetch()
  }
  return (
    <div>
      <Button onClick={() => onClick('a')}>A</Button>
      <Button onClick={() => onClick('b')}>B</Button>
      <Card title="Tanstack Query">
        {data}
      </Card>
    </div>
  )
}

export const Route = createFileRoute('/tanstackQuery')({
  component: TanstackQuery,
})
