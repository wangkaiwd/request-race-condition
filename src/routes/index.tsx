import { createFileRoute } from '@tanstack/react-router'
import { Card, List, Typography, Space, Divider } from 'antd'
import { Link } from '@tanstack/react-router'

const { Title, Paragraph, Text } = Typography

interface ExampleItem {
  title: string
  path: string
  description: string
  filePath: string
}

const examples: ExampleItem[] = [
  {
    title: '竞态示例',
    path: '/raceCondition',
    description: '展示请求竞态问题的基本情况',
    filePath: 'src/routes/raceCondition.tsx',
  },
  {
    title: '丢弃之前请求结果',
    path: '/discardPreviousRequest',
    description: '通过标记请求ID，丢弃旧请求的结果，保留最新请求',
    filePath: 'src/routes/discardPreviousRequest.tsx',
  },
  {
    title: '取消之前请求',
    path: '/cancelPreviousRequest',
    description: '使用AbortController取消之前的请求，减少不必要的网络开销',
    filePath: 'src/routes/cancelPreviousRequest.tsx',
  },
  {
    title: '取消之前Promise',
    path: '/cancelPreviousPromise',
    description: '自定义Promise取消机制，在更底层处理请求竞态',
    filePath: 'src/routes/cancelPreviousPromise.tsx',
  },
  {
    title: 'useRequest Hook',
    path: '/useRequest',
    description: '使用ahooks的useRequest优雅处理竞态问题，简化代码',
    filePath: 'src/routes/useRequest.tsx',
  },
]

const HomePage = () => {
  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '40px 20px',
      backgroundColor: '#fff'
    }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={2} style={{ marginBottom: '16px', fontSize: '28px', fontWeight: '600' }}>
            请求竞态处理示例
          </Title>
          <Paragraph style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto', color: '#666' }}>
            这个项目展示了不同的方法来处理React中的请求竞态问题。
            每种方案都有其特点，可根据实际需求选择合适的解决方案。
          </Paragraph>
        </div>
        
        <Divider style={{ margin: '16px 0' }} />
        
        <List
          itemLayout="vertical"
          size="large"
          dataSource={examples}
          split={false}
          renderItem={(item, index) => (
            <List.Item
              style={{
                padding: '16px 0',
                transition: 'all 0.3s ease',
                borderBottom: index < examples.length - 1 ? '1px solid #f0f0f0' : 'none'
              }}
            >
              <Card 
                bordered={false}
                style={{ 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                hoverable
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <Title level={4} style={{ marginBottom: '8px', fontSize: '18px' }}>
                      {item.title}
                    </Title>
                    <Paragraph style={{ color: '#666', margin: 0 }}>
                      {item.description}
                    </Paragraph>
                    <Text type="secondary" style={{ fontSize: '13px', display: 'block', marginTop: '8px' }}>
                      <code style={{ backgroundColor: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>
                        {item.filePath}
                      </code>
                    </Text>
                  </div>
                  <Link 
                    to={item.path}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      color: '#1890ff',
                      fontWeight: '500'
                    }}
                  >
                    <Text strong>查看示例 →</Text>
                  </Link>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </Space>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
