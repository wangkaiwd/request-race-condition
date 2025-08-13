import { createFileRoute } from '@tanstack/react-router'
import { type OperationType, service } from '../api'
import { useState } from 'react'
import { Button, Card } from 'antd'

const RaceCondition = () => {
  const [data, setData] = useState('')

  const getData = async (type: OperationType) => {
    const newData = await service(type)
    setData(newData)
  }

  const onClick = async (type: OperationType) => {
    getData(type)
  }
  return (
    <div>
      <Button onClick={() => onClick('a')}>A</Button>
      <Button onClick={() => onClick('b')}>B</Button>
      <Card title="Discard Previous Request">
        {data || '内容为空'}
      </Card>
    </div>
  )
}

export const Route = createFileRoute('/raceCondition')({
  component: RaceCondition,
})
