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

        createMany: procedure.input($Schema.ConnectionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).connection.createMany(input as any))),

        create: procedure.input($Schema.ConnectionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).connection.create(input as any))),

        deleteMany: procedure.input($Schema.ConnectionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).connection.deleteMany(input as any))),

        delete: procedure.input($Schema.ConnectionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).connection.delete(input as any))),

        findFirst: procedure.input($Schema.ConnectionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).connection.findFirst(input as any))),

        findMany: procedure.input($Schema.ConnectionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).connection.findMany(input as any))),

        findUnique: procedure.input($Schema.ConnectionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).connection.findUnique(input as any))),

        updateMany: procedure.input($Schema.ConnectionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).connection.updateMany(input as any))),

        update: procedure.input($Schema.ConnectionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).connection.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ConnectionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConnectionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConnectionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConnectionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ConnectionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConnectionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConnectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConnectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConnectionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConnectionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConnectionGetPayload<T>, Context>) => Promise<Prisma.ConnectionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ConnectionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConnectionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConnectionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConnectionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ConnectionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConnectionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConnectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConnectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConnectionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConnectionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConnectionGetPayload<T>, Context>) => Promise<Prisma.ConnectionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ConnectionFindFirstArgs, TData = Prisma.ConnectionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ConnectionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ConnectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConnectionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ConnectionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ConnectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ConnectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ConnectionFindManyArgs, TData = Array<Prisma.ConnectionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ConnectionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ConnectionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConnectionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ConnectionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ConnectionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ConnectionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ConnectionFindUniqueArgs, TData = Prisma.ConnectionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ConnectionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ConnectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConnectionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ConnectionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ConnectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ConnectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ConnectionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConnectionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConnectionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConnectionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ConnectionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConnectionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConnectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConnectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConnectionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConnectionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConnectionGetPayload<T>, Context>) => Promise<Prisma.ConnectionGetPayload<T>>
            };

    };
}
