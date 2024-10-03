'use client'

import { Typography, Card, Statistic, Row, Col, List, Avatar } from 'antd'
import {
  UserOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ConnectionStatusPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: invitations, isLoading: isLoadingInvitations } =
    Api.invitation.findMany.useQuery({
      where: { senderId: user?.id },
      include: { receiver: true },
    })

  const { data: connections, isLoading: isLoadingConnections } =
    Api.connection.findMany.useQuery({
      where: { OR: [{ user1Id: user?.id }, { user2Id: user?.id }] },
      include: { user1: true, user2: true },
    })

  const acceptedConnections = connections?.filter(conn => conn.connectedAt)
  const pendingInvitations = invitations?.filter(
    inv => inv.status === 'PENDING',
  )
  const acceptanceRate =
    connections && invitations
      ? ((acceptedConnections?.length || 0) / (invitations.length || 1)) * 100
      : 0

  const networkGrowth = connections?.length || 0

  if (isLoadingInvitations || isLoadingConnections) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Connection Status</Title>
        <Text>Track your LinkedIn connection requests and network growth.</Text>

        <Row gutter={16} style={{ marginTop: 24, marginBottom: 24 }}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic
                title="Acceptance Rate"
                value={acceptanceRate.toFixed(2)}
                suffix="%"
                prefix={<CheckCircleOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic
                title="Network Growth"
                value={networkGrowth}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic
                title="Pending Invitations"
                value={pendingInvitations?.length || 0}
                prefix={<ClockCircleOutlined />}
              />
            </Card>
          </Col>
        </Row>

        <Title level={3}>Connection Requests</Title>
        <List
          itemLayout="horizontal"
          dataSource={invitations}
          renderItem={invitation => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={invitation.receiver?.name || 'Unknown User'}
                description={
                  <>
                    <Text>Status: {invitation.status}</Text>
                    <br />
                    <Text>
                      Sent:{' '}
                      {dayjs(invitation.dateCreated).format('MMMM D, YYYY')}
                    </Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </PageLayout>
  )
}
