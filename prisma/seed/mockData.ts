import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e13dc065-d5a3-4e69-b146-d22b0a5d5910', '10Jairo.Lehner@yahoo.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv445566', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4e46bf37-3839-43c9-a404-512b5e7e79d7', '19Tyreek81@gmail.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv445566', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('235d3e05-31ea-46c1-8f5b-64817cfddf84', '28Petra_Gusikowski@hotmail.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv123456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e2b9559a-f098-4d4e-bcf0-78b51a7acc33', '37Daren.Murphy@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inv112233', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('872a05a5-4da6-47da-8b32-62ea0f23b868', '46Heather84@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv112233', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('44ed530f-87dd-49dc-8421-a9ca26dfcea5', '55Laurie.OKon69@hotmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv112233', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9b1a673b-de67-49f2-8fc2-ea22dfb45cbd', '64Hershel.White@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv654321', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ad9cdda9-890e-423a-bf12-33a8b57c8faf', '73Lavon_Reichert@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv112233', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('a76f5b1f-accb-47ec-bcba-f140385371d5', '82Lina28@hotmail.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv654321', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b77a50d8-5902-49f1-b81c-82ee2a071639', 'Professional Connectors', 'https://i.imgur.com/YfJQV5z.png?id=92');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('fd56fc92-22c4-4c70-b3ed-89bd27f72a25', 'Digital Entrepreneurs Network', 'https://i.imgur.com/YfJQV5z.png?id=95');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('5c86d349-06f5-4e60-a509-976ceb19549f', 'Professional Connectors', 'https://i.imgur.com/YfJQV5z.png?id=98');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('f4141191-18cd-4a22-81eb-d93e970bb505', 'Digital Entrepreneurs Network', 'https://i.imgur.com/YfJQV5z.png?id=101');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('fc2bf64a-2220-4f76-aa6c-26a1f3461229', 'Professional Connectors', 'https://i.imgur.com/YfJQV5z.png?id=104');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('abf35ca6-2a43-4103-bfed-90a3b4f5d251', 'Business Leaders Alliance', 'https://i.imgur.com/YfJQV5z.png?id=107');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('effa2cc2-a88d-4819-afa4-398677426160', 'Professional Connectors', 'https://i.imgur.com/YfJQV5z.png?id=110');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('666bb792-57f2-4ca8-b21f-f024fd56ce91', 'Tech Innovators Group', 'https://i.imgur.com/YfJQV5z.png?id=113');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('607b5e40-99d9-41e9-9338-b019ec84f263', 'Tech Innovators Group', 'https://i.imgur.com/YfJQV5z.png?id=116');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ad7eb632-70be-46fb-a8bf-6362d1ae6df9', 'Professional Connectors', 'https://i.imgur.com/YfJQV5z.png?id=119');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('4a960f84-443b-4f12-98b4-d5fa1e040151', 'Administrator', '872a05a5-4da6-47da-8b32-62ea0f23b868', 'effa2cc2-a88d-4819-afa4-398677426160');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('66e9506d-3041-43be-a3ad-bcac538cafc9', 'Contributor', '4e46bf37-3839-43c9-a404-512b5e7e79d7', 'b77a50d8-5902-49f1-b81c-82ee2a071639');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('9dc0ed92-89b5-410c-87c9-132f4fee4f76', 'Member', 'ad9cdda9-890e-423a-bf12-33a8b57c8faf', 'b77a50d8-5902-49f1-b81c-82ee2a071639');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ccb280f9-98ff-4a3a-a099-8c3c1ab02453', 'Administrator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '666bb792-57f2-4ca8-b21f-f024fd56ce91');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c6553fa5-b81d-4f71-a5c8-1a2d09ee53fa', 'Moderator', 'a76f5b1f-accb-47ec-bcba-f140385371d5', 'abf35ca6-2a43-4103-bfed-90a3b4f5d251');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('dff8868e-01fe-408c-909f-64b36bed4a93', 'Guest', 'a76f5b1f-accb-47ec-bcba-f140385371d5', 'fd56fc92-22c4-4c70-b3ed-89bd27f72a25');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('cd746fe0-bada-45af-a0e7-72bf91b11a1a', 'Contributor', '235d3e05-31ea-46c1-8f5b-64817cfddf84', 'abf35ca6-2a43-4103-bfed-90a3b4f5d251');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('02da4f3f-4ed9-47d0-8730-2a12e30d7994', 'Member', '4e46bf37-3839-43c9-a404-512b5e7e79d7', '666bb792-57f2-4ca8-b21f-f024fd56ce91');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('29fbb1fd-3aab-4cb1-9d92-1ea4de922e36', 'Guest', 'ad9cdda9-890e-423a-bf12-33a8b57c8faf', 'f4141191-18cd-4a22-81eb-d93e970bb505');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('1f28b5e0-416d-45b2-b9b2-ea58a51616f2', 'Moderator', '4e46bf37-3839-43c9-a404-512b5e7e79d7', 'fd56fc92-22c4-4c70-b3ed-89bd27f72a25');

INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('44f3165b-c9f8-4158-b3a0-ceae9a3933ea', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=141', '2024-07-25T04:14:53.476Z', '4e46bf37-3839-43c9-a404-512b5e7e79d7');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('a5510539-e113-4633-acf1-b12ac25a1a13', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=144', '2025-07-06T15:51:42.103Z', '872a05a5-4da6-47da-8b32-62ea0f23b868');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('5ac44325-a891-4920-9fca-861236b8e063', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=147', '2025-07-16T15:53:59.152Z', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('e0797598-4731-4ec3-b1df-c3a12e0c86ca', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=150', '2025-07-22T20:52:18.842Z', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('ce09b3a4-a59b-4dd3-aaa9-5d679d726de3', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=153', '2024-04-18T05:51:33.130Z', 'a76f5b1f-accb-47ec-bcba-f140385371d5');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('dc068015-77f1-4914-bea3-58b398ffed53', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=156', '2024-07-24T23:49:18.579Z', 'ad9cdda9-890e-423a-bf12-33a8b57c8faf');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('9a21453b-8c26-46de-b2b5-e1c53f3a52b9', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=159', '2024-07-24T01:56:05.646Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('d9cebfc9-132c-4c70-99c2-18e563dcc0de', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=162', '2025-01-24T22:25:21.088Z', 'a76f5b1f-accb-47ec-bcba-f140385371d5');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('4163f531-c130-4fde-99a8-c1de5df54bfa', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=165', '2024-10-09T23:36:33.794Z', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd');
INSERT INTO "LinkedinProfile" ("id", "profileUrl", "lastSyncDate", "userId") VALUES ('964a2c51-957a-4c48-8f89-f3971a776d14', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=168', '2024-12-27T10:38:39.914Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('24b50081-3ef1-473e-a8a2-60d462931217', 'Facebook', 'https://i.imgur.com/YfJQV5z.png?id=172');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('65ad0da7-f9a1-414f-922e-64800d9de1e0', 'Twitter', 'https://i.imgur.com/YfJQV5z.png?id=175');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('6169f7ac-fec2-46a2-be4d-59e97a067e34', 'Snapchat', 'https://i.imgur.com/YfJQV5z.png?id=178');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('2e5549bf-1308-4f29-9e65-956f84451542', 'Twitter', 'https://i.imgur.com/YfJQV5z.png?id=181');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('ac19d395-4479-4059-babf-13a516f1e49e', 'Twitter', 'https://i.imgur.com/YfJQV5z.png?id=184');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('09a4ce35-ed92-43ac-be86-e94ef9730b9c', 'Facebook', 'https://i.imgur.com/YfJQV5z.png?id=187');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('7a903689-c8a7-4b82-a39b-b88969c11e01', 'Facebook', 'https://i.imgur.com/YfJQV5z.png?id=190');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('79c6debe-9a2b-43b1-b37d-c631f2bcaca3', 'Facebook', 'https://i.imgur.com/YfJQV5z.png?id=193');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('82203ece-6b11-4337-bafb-52e4f4996c41', 'Twitter', 'https://i.imgur.com/YfJQV5z.png?id=196');
INSERT INTO "SocialNetwork" ("id", "name", "iconUrl") VALUES ('045107a7-3c39-48a8-8a99-3bb636c23798', 'Snapchat', 'https://i.imgur.com/YfJQV5z.png?id=199');

INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('b759412c-0cb5-4fa5-9cda-f95d7ea2f561', 'Startup Pioneers', 'A platform for startup founders to connect and grow their ventures.', '872a05a5-4da6-47da-8b32-62ea0f23b868');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('a35e874b-2e8e-464d-83f4-fa6e6177e6df', 'Startup Pioneers', 'A creative hub for designers to collaborate and inspire each other.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('0a31be16-6a71-4c97-8910-801ee16a51f7', 'Marketing Gurus', 'A platform for startup founders to connect and grow their ventures.', '872a05a5-4da6-47da-8b32-62ea0f23b868');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('1fe843bb-0f87-42bd-81ae-4ed18d9e7835', 'Tech Innovators', 'A group for tech enthusiasts to share and discuss the latest innovations.', 'e13dc065-d5a3-4e69-b146-d22b0a5d5910');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('e17cb0a7-fc53-4879-8e98-346b1c1251ed', 'Design Enthusiasts', 'A creative hub for designers to collaborate and inspire each other.', 'ad9cdda9-890e-423a-bf12-33a8b57c8faf');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('6c4f26ec-2ea6-4358-bdaf-b66b16c5abe8', 'Tech Innovators', 'Connecting marketing professionals to exchange ideas and strategies.', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('5d7f8965-9fbc-4f7e-8560-a4bd606e0868', 'Finance Wizards', 'A creative hub for designers to collaborate and inspire each other.', '235d3e05-31ea-46c1-8f5b-64817cfddf84');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('2314a81c-a83e-4b26-9eed-ce0c41dfaba6', 'Tech Innovators', 'A community for finance experts to network and share insights.', '4e46bf37-3839-43c9-a404-512b5e7e79d7');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('80f2bf0d-baf7-485a-8a33-77fce5d325b1', 'Startup Pioneers', 'A creative hub for designers to collaborate and inspire each other.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Group" ("id", "name", "description", "createdByUserId") VALUES ('48127d18-f537-4d73-9d85-3d16eb0d167a', 'Finance Wizards', 'Connecting marketing professionals to exchange ideas and strategies.', 'a76f5b1f-accb-47ec-bcba-f140385371d5');

INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('e6e6c84b-bb63-4028-ac54-59406820e92e', '2024-12-19T15:56:02.295Z', '48127d18-f537-4d73-9d85-3d16eb0d167a', 'e2b9559a-f098-4d4e-bcf0-78b51a7acc33');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('cdfae68e-9b51-4614-b788-c21f50fcab8c', '2024-10-18T07:39:11.749Z', 'e17cb0a7-fc53-4879-8e98-346b1c1251ed', 'ad9cdda9-890e-423a-bf12-33a8b57c8faf');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('4d5a3a92-572e-4747-8996-0e5c03968a7b', '2023-12-07T21:06:11.935Z', 'e17cb0a7-fc53-4879-8e98-346b1c1251ed', 'a76f5b1f-accb-47ec-bcba-f140385371d5');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('2fb1e2b5-8b34-4fb2-b170-ef36fc0cb261', '2024-12-24T00:10:44.933Z', '2314a81c-a83e-4b26-9eed-ce0c41dfaba6', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('9aff54c5-9937-4571-a2dd-eac6568f83a9', '2024-08-14T20:42:46.120Z', '80f2bf0d-baf7-485a-8a33-77fce5d325b1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('fe16cae8-b6d6-44a2-a613-9af3f6b14572', '2024-09-28T09:13:37.330Z', '48127d18-f537-4d73-9d85-3d16eb0d167a', '872a05a5-4da6-47da-8b32-62ea0f23b868');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('b36bbc1f-5fde-499e-a104-0f8fbd1975a9', '2025-07-09T16:42:18.315Z', '5d7f8965-9fbc-4f7e-8560-a4bd606e0868', '872a05a5-4da6-47da-8b32-62ea0f23b868');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('7d0db37f-9423-4875-91c8-53b3b145e105', '2024-01-01T21:14:56.751Z', '5d7f8965-9fbc-4f7e-8560-a4bd606e0868', '4e46bf37-3839-43c9-a404-512b5e7e79d7');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('74d4ac37-9697-49bf-8ead-20fc488994ee', '2025-04-23T09:22:18.554Z', '80f2bf0d-baf7-485a-8a33-77fce5d325b1', 'e2b9559a-f098-4d4e-bcf0-78b51a7acc33');
INSERT INTO "GroupMember" ("id", "joinedAt", "groupId", "userId") VALUES ('b3a5a5c3-8fac-47eb-83f8-a000bca4b263', '2023-10-21T12:31:20.440Z', '5d7f8965-9fbc-4f7e-8560-a4bd606e0868', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('80dc6d45-7bd1-439e-93f6-f4afe27c831a', 'declined', '235d3e05-31ea-46c1-8f5b-64817cfddf84', 'ad9cdda9-890e-423a-bf12-33a8b57c8faf');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('fef40eb5-fe5f-4c0a-a099-f68ca13c38b6', 'accepted', 'e13dc065-d5a3-4e69-b146-d22b0a5d5910', '4e46bf37-3839-43c9-a404-512b5e7e79d7');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('3e237414-5952-4135-ad86-df9a49ba3917', 'accepted', '235d3e05-31ea-46c1-8f5b-64817cfddf84', 'a76f5b1f-accb-47ec-bcba-f140385371d5');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('ae825028-70ab-4b66-a07d-870c3115c0f2', 'expired', '235d3e05-31ea-46c1-8f5b-64817cfddf84', 'e13dc065-d5a3-4e69-b146-d22b0a5d5910');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('455f81a8-b2ab-42e9-bc32-fcfc06ddce0f', 'declined', '4e46bf37-3839-43c9-a404-512b5e7e79d7', '4e46bf37-3839-43c9-a404-512b5e7e79d7');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('112e2527-56c6-40d9-8c2f-f66f9976053a', 'pending', '235d3e05-31ea-46c1-8f5b-64817cfddf84', 'a76f5b1f-accb-47ec-bcba-f140385371d5');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('aae29db6-acc7-4da1-8d1a-4a96ac45c21b', 'expired', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e13dc065-d5a3-4e69-b146-d22b0a5d5910');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('a1e7566c-ee4a-472c-b345-60c50c609630', 'expired', 'e2b9559a-f098-4d4e-bcf0-78b51a7acc33', 'a76f5b1f-accb-47ec-bcba-f140385371d5');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('bf5efc74-2ef6-4351-a59c-93feec30c6a5', 'expired', '44ed530f-87dd-49dc-8421-a9ca26dfcea5', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd');
INSERT INTO "Invitation" ("id", "status", "senderId", "receiverId") VALUES ('b6c85a9d-a005-4ece-937a-718ae127536c', 'pending', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd', '44ed530f-87dd-49dc-8421-a9ca26dfcea5');

INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('c66201e1-fb8e-4934-a4f4-f30749f6e80f', '2023-10-19T19:43:56.620Z', '44ed530f-87dd-49dc-8421-a9ca26dfcea5', 'ad9cdda9-890e-423a-bf12-33a8b57c8faf');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('78fef9b9-a6d8-444e-bb09-5cb78672c908', '2025-10-02T20:00:25.493Z', '235d3e05-31ea-46c1-8f5b-64817cfddf84', 'e2b9559a-f098-4d4e-bcf0-78b51a7acc33');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('ecb65afc-7ab6-4d35-aecd-fa672e520129', '2023-10-24T09:21:12.391Z', 'e13dc065-d5a3-4e69-b146-d22b0a5d5910', 'a76f5b1f-accb-47ec-bcba-f140385371d5');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('93535631-98e0-4cd8-b283-771c5f69575b', '2024-08-31T11:10:57.801Z', '872a05a5-4da6-47da-8b32-62ea0f23b868', '235d3e05-31ea-46c1-8f5b-64817cfddf84');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('a4ca8bc5-284e-446e-8d0f-bb2cf3ae6732', '2023-10-22T13:34:23.619Z', '235d3e05-31ea-46c1-8f5b-64817cfddf84', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('3121299b-da1e-47a9-8975-8cd8a01a1465', '2025-05-17T15:26:52.514Z', '9b1a673b-de67-49f2-8fc2-ea22dfb45cbd', 'e13dc065-d5a3-4e69-b146-d22b0a5d5910');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('62c9e99d-7a4f-46d7-8a02-98d7bb2c4e8d', '2024-01-09T16:00:18.348Z', '44ed530f-87dd-49dc-8421-a9ca26dfcea5', 'e13dc065-d5a3-4e69-b146-d22b0a5d5910');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('7b5a6c45-c69d-4dd3-9f18-358c104d724c', '2025-06-12T18:24:41.074Z', 'e2b9559a-f098-4d4e-bcf0-78b51a7acc33', 'e2b9559a-f098-4d4e-bcf0-78b51a7acc33');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('ee3704d3-12ca-4d46-a472-946b96c7b854', '2024-01-01T12:46:46.914Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Connection" ("id", "connectedAt", "user1Id", "user2Id") VALUES ('18e8854a-e8fc-46dc-a80c-ed2b218fa72f', '2024-01-06T16:34:11.493Z', 'e13dc065-d5a3-4e69-b146-d22b0a5d5910', '235d3e05-31ea-46c1-8f5b-64817cfddf84');

INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('f11fa420-0c05-496e-80c2-78fbefe032ea', 'grp_12345abc', '2023-12-24T03:41:24.570Z', 'b759412c-0cb5-4fa5-9cda-f95d7ea2f561', '2e5549bf-1308-4f29-9e65-956f84451542');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('be6e6c70-8b23-43fb-b474-01a8a96f8b43', 'grp_11223rst', '2024-06-01T06:10:33.828Z', '5d7f8965-9fbc-4f7e-8560-a4bd606e0868', '79c6debe-9a2b-43b1-b37d-c631f2bcaca3');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('19ad722f-5613-49c3-b299-3f951b8270c7', 'grp_11223rst', '2025-09-26T19:31:56.561Z', '2314a81c-a83e-4b26-9eed-ce0c41dfaba6', '09a4ce35-ed92-43ac-be86-e94ef9730b9c');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('2b17047f-17d1-4090-bb09-5ce1190b25e4', 'grp_67890def', '2025-09-26T09:06:22.106Z', 'a35e874b-2e8e-464d-83f4-fa6e6177e6df', '24b50081-3ef1-473e-a8a2-60d462931217');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('530ae01b-9bbb-46d9-8bed-0d14b4dec63b', 'grp_09876uvw', '2023-11-05T17:54:10.498Z', '80f2bf0d-baf7-485a-8a33-77fce5d325b1', '09a4ce35-ed92-43ac-be86-e94ef9730b9c');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('600851a5-9ebf-4d83-9962-3ad79fb053b3', 'grp_54321xyz', '2024-11-17T20:29:03.139Z', '48127d18-f537-4d73-9d85-3d16eb0d167a', '79c6debe-9a2b-43b1-b37d-c631f2bcaca3');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('1c1adddf-5b98-4ed0-bb49-011137dfacd4', 'grp_54321xyz', '2025-01-29T04:33:13.783Z', 'a35e874b-2e8e-464d-83f4-fa6e6177e6df', '24b50081-3ef1-473e-a8a2-60d462931217');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('cff8f010-e6ea-4ceb-bb6d-70083296acc8', 'grp_67890def', '2024-04-06T18:35:51.265Z', '0a31be16-6a71-4c97-8910-801ee16a51f7', 'ac19d395-4479-4059-babf-13a516f1e49e');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('16ca22d2-dc6b-413e-9d41-94f32714a529', 'grp_67890def', '2024-04-25T21:22:30.346Z', '0a31be16-6a71-4c97-8910-801ee16a51f7', '09a4ce35-ed92-43ac-be86-e94ef9730b9c');
INSERT INTO "ImportedGroup" ("id", "externalGroupId", "importedAt", "groupId", "sourceNetworkId") VALUES ('f171b917-630f-4690-ae89-2504878719e9', 'grp_12345abc', '2025-07-27T16:55:49.960Z', '2314a81c-a83e-4b26-9eed-ce0c41dfaba6', 'ac19d395-4479-4059-babf-13a516f1e49e');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
