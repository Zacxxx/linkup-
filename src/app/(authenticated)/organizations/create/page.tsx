'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Space } from 'antd'
import { TeamOutlined, SettingOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateOrganizationPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const { mutateAsync: createOrganization } =
    Api.organization.create.useMutation()
  const { mutateAsync: createOrganizationRole } =
    Api.organizationRole.create.useMutation()

  const handleSubmit = async (values: {
    name: string
    description: string
  }) => {
    if (!user) {
      enqueueSnackbar('You must be logged in to create an organization', {
        variant: 'error',
      })
      return
    }

    setLoading(true)
    try {
      const newOrganization = await createOrganization({
        data: {
          name: values.name,
        },
      })

      await createOrganizationRole({
        data: {
          name: 'owner',
          userId: user.id,
          organizationId: newOrganization.id,
        },
      })

      enqueueSnackbar('Organization created successfully', {
        variant: 'success',
      })
      router.push(`/organizations/${newOrganization.id}/home`)
    } catch (error) {
      console.error('Error creating organization:', error)
      enqueueSnackbar('Failed to create organization', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <TeamOutlined /> Create a New Organization
        </Title>
        <Paragraph>
          Start a new networking group by creating your organization and setting
          its initial parameters.
        </Paragraph>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Organization Name"
            rules={[
              { required: true, message: 'Please enter the organization name' },
            ]}
          >
            <Input
              prefix={<TeamOutlined />}
              placeholder="Enter organization name"
            />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter a description' }]}
          >
            <Input.TextArea
              placeholder="Describe your organization's networking goals"
              rows={4}
            />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SettingOutlined />}
                loading={loading}
              >
                Create Organization
              </Button>
              <Button onClick={() => router.push('/home')}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
