import { createFileRoute } from '@tanstack/react-router'
import { type OperationType, service } from '../api'
import { useRef, useState } from 'react'
import { Button, Card } from 'antd'

const DiscardPreviousRequest = () => {
  const [data, setData] = useState('')
  const countRef = useRef(0)

  const getData = async (type: OperationType) => {
    countRef.current++
    const currentCount = countRef.current
    const newData = await service(type)
    if (currentCount === countRef.current) {
      setData(newData)
    }
  }

  const onClick = async (type: OperationType) => {
    getData(type)
  }
  return (
    <div>
      <Button onClick={() => onClick('a')}>A</Button>
      <Button onClick={() => onClick('b')}>B</Button>
      <Card title="Discard Previous Request">
        {data}
      </Card>
    </div>
  )
}

export const Route = createFileRoute('/discardPreviousRequest')({
  component: DiscardPreviousRequest,
})
