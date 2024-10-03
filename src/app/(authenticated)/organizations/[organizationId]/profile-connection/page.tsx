'use client'

import { useNango } from '@/core/hooks/nango'
import { Button, Typography, List, Card, Space } from 'antd'
import { LinkedinOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ProfileConnectionPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { nango } = useNango()

  const {
    data: linkedinProfiles,
    isLoading,
    refetch,
  } = Api.linkedinProfile.findMany.useQuery({
    where: { userId: user?.id },
  })

  const { mutateAsync: deleteProfile } =
    Api.linkedinProfile.delete.useMutation()

  const handleConnectLinkedIn = async () => {
    try {
      await nango.auth('linkedin', user?.id)
      enqueueSnackbar('LinkedIn profile connected successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to connect LinkedIn profile', {
        variant: 'error',
      })
    }
  }

  const handleDeleteProfile = async (profileId: string) => {
    try {
      await deleteProfile({ where: { id: profileId } })
      enqueueSnackbar('LinkedIn profile disconnected successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to disconnect LinkedIn profile', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Profile Connections</Title>
        <Text>
          Connect and manage your LinkedIn profile to participate in automatic
          connection features.
        </Text>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginTop: '24px' }}
        >
          <Button
            type="primary"
            icon={<LinkedinOutlined />}
            onClick={handleConnectLinkedIn}
            disabled={linkedinProfiles?.length > 0}
          >
            Connect LinkedIn Profile
          </Button>

          <List
            loading={isLoading}
            dataSource={linkedinProfiles}
            renderItem={profile => (
              <List.Item>
                <Card
                  title="LinkedIn Profile"
                  extra={
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDeleteProfile(profile.id)}
                    >
                      Disconnect
                    </Button>
                  }
                  style={{ width: '100%' }}
                >
                  <p>Profile URL: {profile.profileUrl || 'N/A'}</p>
                  <p>
                    Last Synced:{' '}
                    {profile.lastSyncDate
                      ? new Date(profile.lastSyncDate).toLocaleString()
                      : 'Never'}
                  </p>
                </Card>
              </List.Item>
            )}
          />
        </Space>
      </div>
    </PageLayout>
  )
}
