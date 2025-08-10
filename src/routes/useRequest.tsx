import { createFileRoute } from '@tanstack/react-router'
import { Button, Card } from 'antd'
import { useRequest } from 'ahooks'
import { useState } from 'react'
import { type OperationType, service } from '../api'

export const Route = createFileRoute('/useRequest')({
  component: UseRequest,
})

function UseRequest () {
  const { runAsync } = useRequest(service)
  const [content, setContent] = useState<null | string>(null)
  const onClick = async (type: OperationType) => {
    const res = await runAsync(type)
    setContent(res)
  }
  return (
    <div className="p-2">
      <Button onClick={() => onClick('a')}>A</Button>
      <Button onClick={() => onClick('b')}>B</Button>
      <Card title={'内容'}>
        {content}
      </Card>
    </div>
  )
}
