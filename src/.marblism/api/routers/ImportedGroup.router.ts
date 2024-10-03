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

        createMany: procedure.input($Schema.ImportedGroupInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).importedGroup.createMany(input as any))),

        create: procedure.input($Schema.ImportedGroupInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).importedGroup.create(input as any))),

        deleteMany: procedure.input($Schema.ImportedGroupInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).importedGroup.deleteMany(input as any))),

        delete: procedure.input($Schema.ImportedGroupInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).importedGroup.delete(input as any))),

        findFirst: procedure.input($Schema.ImportedGroupInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).importedGroup.findFirst(input as any))),

        findMany: procedure.input($Schema.ImportedGroupInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).importedGroup.findMany(input as any))),

        findUnique: procedure.input($Schema.ImportedGroupInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).importedGroup.findUnique(input as any))),

        updateMany: procedure.input($Schema.ImportedGroupInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).importedGroup.updateMany(input as any))),

        update: procedure.input($Schema.ImportedGroupInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).importedGroup.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ImportedGroupCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImportedGroupCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImportedGroupCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImportedGroupCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ImportedGroupCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImportedGroupCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ImportedGroupGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ImportedGroupGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImportedGroupCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImportedGroupCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ImportedGroupGetPayload<T>, Context>) => Promise<Prisma.ImportedGroupGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ImportedGroupDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImportedGroupDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImportedGroupDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImportedGroupDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ImportedGroupDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImportedGroupDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ImportedGroupGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ImportedGroupGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImportedGroupDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImportedGroupDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ImportedGroupGetPayload<T>, Context>) => Promise<Prisma.ImportedGroupGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ImportedGroupFindFirstArgs, TData = Prisma.ImportedGroupGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ImportedGroupFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ImportedGroupGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ImportedGroupFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ImportedGroupFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ImportedGroupGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ImportedGroupGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ImportedGroupFindManyArgs, TData = Array<Prisma.ImportedGroupGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ImportedGroupFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ImportedGroupGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ImportedGroupFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ImportedGroupFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ImportedGroupGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ImportedGroupGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ImportedGroupFindUniqueArgs, TData = Prisma.ImportedGroupGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ImportedGroupFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ImportedGroupGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ImportedGroupFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ImportedGroupFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ImportedGroupGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ImportedGroupGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ImportedGroupUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImportedGroupUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImportedGroupUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImportedGroupUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ImportedGroupUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImportedGroupUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ImportedGroupGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ImportedGroupGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImportedGroupUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImportedGroupUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ImportedGroupGetPayload<T>, Context>) => Promise<Prisma.ImportedGroupGetPayload<T>>
            };

    };
}
