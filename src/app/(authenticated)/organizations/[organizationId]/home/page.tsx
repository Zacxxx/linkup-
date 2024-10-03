'use client'

import { Typography, Card, Row, Col, Button, List, Spin } from 'antd'
import {
  LinkOutlined,
  UsergroupAddOutlined,
  SendOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: connections, isLoading: isLoadingConnections } =
    Api.connection.findMany.useQuery({
      where: { OR: [{ user1Id: user?.id }, { user2Id: user?.id }] },
      include: { user1: true, user2: true },
      orderBy: { dateCreated: 'desc' },
      take: 5,
    })

  const { data: groupMembers, isLoading: isLoadingGroupMembers } =
    Api.groupMember.findMany.useQuery({
      where: { userId: user?.id },
      include: { group: true },
      orderBy: { dateCreated: 'desc' },
      take: 5,
    })

  const { data: sentInvitations, isLoading: isLoadingSentInvitations } =
    Api.invitation.findMany.useQuery({
      where: { senderId: user?.id },
      include: { receiver: true },
      orderBy: { dateCreated: 'desc' },
      take: 5,
    })

  const { mutateAsync: sendConnectionRequests } =
    Api.invitation.createMany.useMutation()

  const { data: organizationMembers } = Api.organizationRole.findMany.useQuery({
    where: { organizationId: params.organizationId, NOT: { userId: user?.id } },
    include: { user: true },
  })

  const handleLinkUp = async () => {
    try {
      const invitations = organizationMembers?.map(member => ({
        senderId: user?.id,
        receiverId: member.userId,
        status: 'PENDING',
      }))

      await sendConnectionRequests({ data: invitations || [] })
      enqueueSnackbar('Connection requests sent successfully!', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to send connection requests', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16}>
          <Title level={2}>Networking Activities Overview</Title>
          <Paragraph>
            Stay updated on your recent connections and group activities within{' '}
            {organization?.name}.
          </Paragraph>

          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card title="Quick Actions" extra={<LinkOutlined />}>
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  onClick={handleLinkUp}
                  block
                >
                  Link Up!
                </Button>
                <Button
                  style={{ marginTop: '10px' }}
                  icon={<UsergroupAddOutlined />}
                  onClick={() =>
                    router.push(
                      `/organizations/${params.organizationId}/import-group`,
                    )
                  }
                  block
                >
                  Import Existing Groups
                </Button>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Connection Requests Status" extra={<SendOutlined />}>
                {isLoadingSentInvitations ? (
                  <Spin />
                ) : (
                  <List
                    dataSource={sentInvitations}
                    renderItem={invitation => (
                      <List.Item>
                        <Text>
                          {invitation.receiver?.name} - {invitation.status}
                        </Text>
                      </List.Item>
                    )}
                    locale={{ emptyText: 'No pending requests' }}
                  />
                )}
              </Card>
            </Col>
          </Row>

          <Card
            title="Recent Connections"
            style={{ marginTop: '16px' }}
            extra={<LinkOutlined />}
          >
            {isLoadingConnections ? (
              <Spin />
            ) : (
              <List
                dataSource={connections}
                renderItem={connection => (
                  <List.Item>
                    <Text>
                      {connection.user1?.id === user?.id
                        ? connection.user2?.name
                        : connection.user1?.name}{' '}
                      - Connected on{' '}
                      {dayjs(connection.connectedAt).format('MMMM D, YYYY')}
                    </Text>
                  </List.Item>
                )}
                locale={{ emptyText: 'No recent connections' }}
              />
            )}
          </Card>

          <Card
            title="Recent Group Activities"
            style={{ marginTop: '16px' }}
            extra={<UsergroupAddOutlined />}
          >
            {isLoadingGroupMembers ? (
              <Spin />
            ) : (
              <List
                dataSource={groupMembers}
                renderItem={member => (
                  <List.Item>
                    <Text>
                      Joined {member.group?.name} on{' '}
                      {dayjs(member.joinedAt).format('MMMM D, YYYY')}
                    </Text>
                  </List.Item>
                )}
                locale={{ emptyText: 'No recent group activities' }}
              />
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
