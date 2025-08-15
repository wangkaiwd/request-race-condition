import { createFileRoute } from '@tanstack/react-router'
import { Button, Card } from 'antd'
import { useRequest } from 'ahooks'
import { useState } from 'react'
import { type OperationType, service } from '../api'

export const Route = createFileRoute('/useRequest')({
  component: UseRequest,
})

function UseRequest () {
  // useRequest 帮我们处理了竞态问题
  const { runAsync } = useRequest(service)
  const [content, setContent] = useState<null | string>(null)
  const onClick = async (type: OperationType) => {
    const res = await runAsync(type)
    setContent(res)
  }
  return (
    <div>
      <Button onClick={() => onClick('a')}>A</Button>
      <Button onClick={() => onClick('b')}>B</Button>
      <Card title={'内容'}>
        {content}
      </Card>
    </div>
  )
}
