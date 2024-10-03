'use client'

import { useState } from 'react'
import { Typography, Select, Button, Progress, Space, Card } from 'antd'
import {
  ImportOutlined,
  WhatsAppOutlined,
  SlackOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GroupImportPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [importProgress, setImportProgress] = useState<number>(0)
  const [isImporting, setIsImporting] = useState<boolean>(false)

  const { data: socialNetworks } = Api.socialNetwork.findMany.useQuery({
    where: { name: { in: ['WhatsApp', 'Slack'] } },
  })

  const { mutateAsync: createGroup } = Api.group.create.useMutation()
  const { mutateAsync: importGroup } = Api.importedGroup.create.useMutation()

  const handleImport = async () => {
    if (!selectedPlatform || !user?.id) {
      enqueueSnackbar(
        'Please select a platform to import from and ensure you are logged in',
        { variant: 'error' },
      )
      return
    }

    setIsImporting(true)
    setImportProgress(0)

    try {
      // Simulating import process
      for (let i = 0; i <= 100; i += 10) {
        setImportProgress(i)
        await new Promise(resolve => setTimeout(resolve, 500))
      }

      const sourceNetwork = socialNetworks?.find(
        sn => sn.name === selectedPlatform,
      )
      if (!sourceNetwork) {
        throw new Error('Selected platform not found')
      }

      // First, create the group
      const newGroup = await createGroup({
        data: {
          name: `Imported ${selectedPlatform} Group`,
          createdByUserId: user.id,
        },
      })

      // Then, create the imported group
      await importGroup({
        data: {
          groupId: newGroup.id,
          sourceNetworkId: sourceNetwork.id,
          importedAt: dayjs().toISOString(),
        },
      })

      enqueueSnackbar('Group imported successfully', { variant: 'success' })
      router.push(`/organizations/${params.organizationId}/groups`)
    } catch (error) {
      console.error('Import failed:', error)
      enqueueSnackbar('Failed to import group', { variant: 'error' })
    } finally {
      setIsImporting(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2}>Import External Groups</Title>
        <Text>
          Synchronize members from your WhatsApp or Slack groups with your
          organization.
        </Text>

        <Space direction="vertical" style={{ width: '100%', marginTop: 24 }}>
          <Select
            style={{ width: '100%' }}
            placeholder="Select platform to import from"
            onChange={value => setSelectedPlatform(value)}
            disabled={isImporting}
          >
            <Select.Option value="WhatsApp">
              <WhatsAppOutlined /> WhatsApp
            </Select.Option>
            <Select.Option value="Slack">
              <SlackOutlined /> Slack
            </Select.Option>
          </Select>

          <Button
            type="primary"
            icon={<ImportOutlined />}
            onClick={handleImport}
            disabled={!selectedPlatform || isImporting}
            loading={isImporting}
          >
            Import Group
          </Button>

          {isImporting && (
            <div style={{ marginTop: 16 }}>
              <Text>Importing members...</Text>
              <Progress percent={importProgress} status="active" />
            </div>
          )}
        </Space>
      </Card>
    </PageLayout>
  )
}
