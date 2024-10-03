/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createLinkedinProfileRouter from "./LinkedinProfile.router";
import createSocialNetworkRouter from "./SocialNetwork.router";
import createGroupRouter from "./Group.router";
import createGroupMemberRouter from "./GroupMember.router";
import createInvitationRouter from "./Invitation.router";
import createConnectionRouter from "./Connection.router";
import createImportedGroupRouter from "./ImportedGroup.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as LinkedinProfileClientType } from "./LinkedinProfile.router";
import { ClientType as SocialNetworkClientType } from "./SocialNetwork.router";
import { ClientType as GroupClientType } from "./Group.router";
import { ClientType as GroupMemberClientType } from "./GroupMember.router";
import { ClientType as InvitationClientType } from "./Invitation.router";
import { ClientType as ConnectionClientType } from "./Connection.router";
import { ClientType as ImportedGroupClientType } from "./ImportedGroup.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        linkedinProfile: createLinkedinProfileRouter(router, procedure),
        socialNetwork: createSocialNetworkRouter(router, procedure),
        group: createGroupRouter(router, procedure),
        groupMember: createGroupMemberRouter(router, procedure),
        invitation: createInvitationRouter(router, procedure),
        connection: createConnectionRouter(router, procedure),
        importedGroup: createImportedGroupRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    linkedinProfile: LinkedinProfileClientType<AppRouter>;
    socialNetwork: SocialNetworkClientType<AppRouter>;
    group: GroupClientType<AppRouter>;
    groupMember: GroupMemberClientType<AppRouter>;
    invitation: InvitationClientType<AppRouter>;
    connection: ConnectionClientType<AppRouter>;
    importedGroup: ImportedGroupClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
