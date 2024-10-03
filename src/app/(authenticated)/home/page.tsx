'use client'

import { Typography, Button, Space } from 'antd'
import { DashboardOutlined, InfoCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Move any React Query hooks to the top level if needed
  // For example:
  // const { data: someData } = Api.someModel.someFunction.useQuery({})

  const handleDashboardAccess = () => {
    if (user?.id) {
      router.push(`/organizations/${user.id}/home`)
    } else {
      enqueueSnackbar('Please log in to access the dashboard', {
        variant: 'info',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={1}>Welcome to Our Application</Title>
          <Paragraph>
            <InfoCircleOutlined style={{ marginRight: '8px' }} />
            This application helps you manage your connections and groups
            efficiently.
          </Paragraph>
          <Paragraph>
            Here's how it works:
            <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
              <li>Connect with other users and expand your network</li>
              <li>Create and manage groups for better organization</li>
              <li>Import groups from other social networks</li>
              <li>View and manage your connection status</li>
            </ul>
          </Paragraph>
          <Button
            type="primary"
            size="large"
            icon={<DashboardOutlined />}
            onClick={handleDashboardAccess}
          >
            Access Dashboard
          </Button>
        </Space>
      </div>
    </PageLayout>
  )
}
