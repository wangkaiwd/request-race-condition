import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button, Card } from 'antd'
import { type OperationType, fetchDataCreator } from '../api'

const { run: fetchData, cancel: cancelFetchData } = fetchDataCreator()

const CancelPreviousRequest = () => {
  const [data, setData] = useState('')

  const getData = async (type: OperationType) => {
    if (cancelFetchData.current) {
      cancelFetchData.current()
    }
    const newData = await fetchData(type)
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

export const Route = createFileRoute('/cancelPreviousRequest')({
  component: CancelPreviousRequest,
})
