import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button, Card } from 'antd'
import { fetchData, type OperationType } from '../api'

const CancelPreviousRequest = () => {
  const [data, setData] = useState('')

  const getData = async (type: OperationType) => {
    if (fetchData.canceller.cancel) {
      fetchData.canceller.cancel()
    }
    try {
      const newData = await fetchData.run(type)
      setData(newData)
    } catch (err: any) {
      if (err?.name === 'cancel') {
        console.log('cancel request', err)
      }
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
        {data || '内容为空'}
      </Card>
    </div>
  )
}

export const Route = createFileRoute('/cancelPreviousPromise')({
  component: CancelPreviousRequest,
})
