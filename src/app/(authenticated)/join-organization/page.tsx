'use client'

import { useState, useEffect } from 'react'
import { Typography, Card, Button, Input, Space, Spin } from 'antd'
import {
  TeamOutlined,
  LinkOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function JoinOrganizationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [organizationCode, setOrganizationCode] = useState('')
  const [organization, setOrganization] = useState<any>(null)

  const { mutateAsync: joinOrganization } =
    Api.organizationRole.create.useMutation()

  const { data: organizationData, isLoading } =
    Api.organization.findFirst.useQuery(
      { where: { id: organizationCode } },
      { enabled: !!organizationCode },
    )

  useEffect(() => {
    const code = params.code as string
    if (code) {
      setOrganizationCode(code)
    }
  }, [params.code])

  useEffect(() => {
    if (organizationData) {
      setOrganization(organizationData)
    }
  }, [organizationData])

  const handleJoinOrganization = async () => {
    if (!organization) {
      enqueueSnackbar('Please enter a valid organization code', {
        variant: 'error',
      })
      return
    }

    try {
      await joinOrganization({
        data: {
          name: 'member',
          userId: user?.id || '',
          organizationId: organization.id,
        },
      })
      enqueueSnackbar('Successfully joined the organization', {
        variant: 'success',
      })
      router.push(`/organizations/${organization.id}/home`)
    } catch (error) {
      enqueueSnackbar('Failed to join the organization', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Join an Organization</Title>
        <Paragraph>
          Enter the organization code or use the provided link to join a
          networking group.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Input
              prefix={<LinkOutlined />}
              placeholder="Enter organization code"
              value={organizationCode}
              onChange={e => setOrganizationCode(e.target.value)}
            />
            <Button
              type="primary"
              icon={<TeamOutlined />}
              onClick={() => setOrganizationCode(organizationCode)}
              block
            >
              View Organization Details
            </Button>
          </Space>
        </Card>

        {isLoading && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Spin size="large" />
          </div>
        )}

        {organization && !isLoading && (
          <Card style={{ marginTop: '20px' }}>
            <Title level={4}>Organization Details</Title>
            <Paragraph>
              <strong>Name:</strong> {organization.name}
            </Paragraph>
            {organization.pictureUrl && (
              <img
                src={organization.pictureUrl}
                alt={organization.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  marginBottom: '10px',
                }}
              />
            )}
            <Button
              type="primary"
              icon={<CheckCircleOutlined />}
              onClick={handleJoinOrganization}
              block
            >
              Join Organization
            </Button>
          </Card>
        )}
      </div>
    </PageLayout>
  )
}
