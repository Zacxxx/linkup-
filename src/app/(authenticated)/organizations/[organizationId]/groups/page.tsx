'use client'

import {
  Typography,
  Card,
  List,
  Button,
  Modal,
  Form,
  Input,
  Select,
} from 'antd'
import {
  GroupOutlined,
  WhatsAppOutlined,
  SlackOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GroupManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: groups,
    isLoading,
    refetch,
  } = Api.group.findMany.useQuery({
    where: { createdByUserId: user?.id },
    include: { importedGroups: { include: { sourceNetwork: true } } },
  })

  const { mutateAsync: createGroup } = Api.group.create.useMutation()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleCreate = async (values: any) => {
    try {
      await createGroup({
        data: {
          name: values.name,
          description: values.description,
          createdByUserId: user?.id as string,
          importedGroups: {
            create: {
              sourceNetworkId: values.platform,
              externalGroupId: values.externalGroupId,
            },
          },
        },
      })
      enqueueSnackbar('Group created successfully', { variant: 'success' })
      refetch()
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create group', { variant: 'error' })
    }
  }

  const getPlatformIcon = (platformName: string) => {
    switch (platformName.toLowerCase()) {
      case 'linkedin':
        return <GroupOutlined />
      case 'whatsapp':
        return <WhatsAppOutlined />
      case 'slack':
        return <SlackOutlined />
      default:
        return <GroupOutlined />
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Group Management</Title>
        <Text>
          View and manage your organization's groups across different platforms.
        </Text>

        <Card style={{ marginTop: 24 }}>
          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={groups}
            renderItem={group => (
              <List.Item>
                <List.Item.Meta
                  avatar={getPlatformIcon(
                    group.importedGroups?.[0]?.sourceNetwork?.name || '',
                  )}
                  title={group.name}
                  description={group.description}
                />
                <Text>{group.importedGroups?.[0]?.sourceNetwork?.name}</Text>
              </List.Item>
            )}
          />
        </Card>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showModal}
          style={{ marginTop: 16 }}
        >
          Create New Group
        </Button>

        <Modal
          title="Create New Group"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleCreate} layout="vertical">
            <Form.Item
              name="name"
              label="Group Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="platform"
              label="Platform"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="2">WhatsApp</Select.Option>
                <Select.Option value="3">Slack</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="externalGroupId"
              label="External Group ID"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Group
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
