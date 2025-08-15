import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import { Button, Card } from 'antd'
import { fetchTopics } from '../api'
import axios from 'axios'

const CancelPreviousRequest = () => {
  const [data, setData] = useState(undefined)
  const controllerRef = useRef<AbortController | null>(null)
  const getData = async (tab: string) => {
    const controller = controllerRef.current
    if (controller) {
      controller.abort('cancel previous request')
    }
    controllerRef.current = new AbortController()
    try {
      const res = await fetchTopics({
        params: {
          tab,
          limit: 2,
        },
        signal: controllerRef.current.signal,
      })
      setData(res.data)
    } catch (err: any) {
      if (axios.isCancel(err)) {
        console.log('cancel request', err)
        return
      }
      console.log('error', err)
    }
  }

  const onClick = async (tab: string) => {
    getData(tab)
  }
  return (
    <div>
      <Button onClick={() => onClick('ask')}>ask</Button>
      <Button onClick={() => onClick('share')}>share</Button>
      <Card title="Discard Previous Request">
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </Card>
    </div>
  )
}

export const Route = createFileRoute('/cancelPreviousRequest')({
  component: CancelPreviousRequest,
})
