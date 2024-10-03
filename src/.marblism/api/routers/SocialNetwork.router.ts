/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.SocialNetworkInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialNetwork.createMany(input as any))),

        create: procedure.input($Schema.SocialNetworkInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialNetwork.create(input as any))),

        deleteMany: procedure.input($Schema.SocialNetworkInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialNetwork.deleteMany(input as any))),

        delete: procedure.input($Schema.SocialNetworkInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialNetwork.delete(input as any))),

        findFirst: procedure.input($Schema.SocialNetworkInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).socialNetwork.findFirst(input as any))),

        findMany: procedure.input($Schema.SocialNetworkInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).socialNetwork.findMany(input as any))),

        findUnique: procedure.input($Schema.SocialNetworkInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).socialNetwork.findUnique(input as any))),

        updateMany: procedure.input($Schema.SocialNetworkInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialNetwork.updateMany(input as any))),

        update: procedure.input($Schema.SocialNetworkInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialNetwork.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SocialNetworkCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialNetworkCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialNetworkCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialNetworkCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SocialNetworkCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialNetworkCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialNetworkGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialNetworkGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialNetworkCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialNetworkCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialNetworkGetPayload<T>, Context>) => Promise<Prisma.SocialNetworkGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SocialNetworkDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialNetworkDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialNetworkDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialNetworkDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SocialNetworkDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialNetworkDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialNetworkGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialNetworkGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialNetworkDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialNetworkDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialNetworkGetPayload<T>, Context>) => Promise<Prisma.SocialNetworkGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SocialNetworkFindFirstArgs, TData = Prisma.SocialNetworkGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SocialNetworkFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SocialNetworkGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialNetworkFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SocialNetworkFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SocialNetworkGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SocialNetworkGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SocialNetworkFindManyArgs, TData = Array<Prisma.SocialNetworkGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SocialNetworkFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SocialNetworkGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialNetworkFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SocialNetworkFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SocialNetworkGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SocialNetworkGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SocialNetworkFindUniqueArgs, TData = Prisma.SocialNetworkGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SocialNetworkFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SocialNetworkGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialNetworkFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SocialNetworkFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SocialNetworkGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SocialNetworkGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SocialNetworkUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialNetworkUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialNetworkUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialNetworkUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SocialNetworkUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialNetworkUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialNetworkGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialNetworkGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialNetworkUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialNetworkUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialNetworkGetPayload<T>, Context>) => Promise<Prisma.SocialNetworkGetPayload<T>>
            };

    };
}
