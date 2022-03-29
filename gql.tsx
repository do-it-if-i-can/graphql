import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
  Uint: number;
};

export enum Category {
  SOMEDAY = 'SOMEDAY',
  TODAY = 'TODAY',
  TOMORROW = 'TOMORROW'
}

export type CopyTodo = {
  todoId: Scalars['Uint'];
};

export type DeleteTodo = {
  todoId: Scalars['Uint'];
};

export type GetTodosByCategory = {
  category: Category;
  userId: Scalars['ID'];
};

export type GetTodosByUser = {
  userId: Scalars['ID'];
};

export type GetUserById = {
  userId: Scalars['ID'];
};

export type MoveTodo = {
  afterTodoIds: Array<Scalars['Uint']>;
  category: Category;
  todoId: Scalars['Uint'];
};

export type Mutation = {
  __typename?: 'Mutation';
  copyTodo: Scalars['Boolean'];
  createTodo: Scalars['Boolean'];
  deleteTodo: Scalars['Boolean'];
  moveTodo: Scalars['Boolean'];
  updateTodo: Scalars['Boolean'];
  updateTodoDone: Scalars['Boolean'];
  upsertUser: User;
};


export type MutationCopyTodoArgs = {
  input: CopyTodo;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodo;
};


export type MutationMoveTodoArgs = {
  input: MoveTodo;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodo;
};


export type MutationUpdateTodoDoneArgs = {
  input: UpdateTodoDone;
};


export type MutationUpsertUserArgs = {
  input: UpsertUser;
};

export type NewTodo = {
  category: Category;
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getTodosByCategory: Array<Todo>;
  getTodosByUser: Array<Maybe<Todo>>;
  getUserById?: Maybe<User>;
};


export type QueryGetTodosByCategoryArgs = {
  input: GetTodosByCategory;
};


export type QueryGetTodosByUserArgs = {
  input: GetTodosByUser;
};


export type QueryGetUserByIdArgs = {
  input: GetUserById;
};

export type Todo = {
  __typename?: 'Todo';
  category: Category;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
  id: Scalars['Uint'];
  priority: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type UpdateTodo = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  todoId: Scalars['Uint'];
};

export type UpdateTodoDone = {
  done: Scalars['Boolean'];
  todoId: Scalars['Uint'];
};

export type UpsertUser = {
  avatar?: InputMaybe<Scalars['String']>;
  displayName: Scalars['String'];
  userId: Scalars['ID'];
  userName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  id: Scalars['ID'];
  todos: Array<Maybe<Todo>>;
  updatedAt: Scalars['DateTime'];
  userName: Scalars['String'];
};

export type GetTodosByCategoryQueryVariables = Exact<{
  input: GetTodosByCategory;
}>;


export type GetTodosByCategoryQuery = (
  { __typename?: 'Query' }
  & { getTodosByCategory: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'done' | 'priority'>
  )> }
);

export type GetTodosByUserQueryVariables = Exact<{
  input: GetTodosByUser;
}>;


export type GetTodosByUserQuery = (
  { __typename?: 'Query' }
  & { getTodosByUser: Array<Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'category' | 'title' | 'done' | 'priority'>
  )>> }
);

export type UpdateTodoDoneMutationVariables = Exact<{
  input: UpdateTodoDone;
}>;


export type UpdateTodoDoneMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateTodoDone'>
);

export type CopyTodoMutationVariables = Exact<{
  input: CopyTodo;
}>;


export type CopyTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'copyTodo'>
);

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodo;
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTodo'>
);

export type CreateTodoMutationVariables = Exact<{
  input: NewTodo;
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createTodo'>
);

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodo;
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateTodo'>
);


export const GetTodosByCategoryDocument = gql`
    query getTodosByCategory($input: GetTodosByCategory!) {
  getTodosByCategory(input: $input) {
    id
    title
    done
    priority
  }
}
    `;

/**
 * __useGetTodosByCategoryQuery__
 *
 * To run a query within a React component, call `useGetTodosByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosByCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTodosByCategoryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTodosByCategoryQuery, GetTodosByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTodosByCategoryQuery, GetTodosByCategoryQueryVariables>(GetTodosByCategoryDocument, options);
      }
export function useGetTodosByCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodosByCategoryQuery, GetTodosByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTodosByCategoryQuery, GetTodosByCategoryQueryVariables>(GetTodosByCategoryDocument, options);
        }
export type GetTodosByCategoryQueryHookResult = ReturnType<typeof useGetTodosByCategoryQuery>;
export type GetTodosByCategoryLazyQueryHookResult = ReturnType<typeof useGetTodosByCategoryLazyQuery>;
export type GetTodosByCategoryQueryResult = ApolloReactCommon.QueryResult<GetTodosByCategoryQuery, GetTodosByCategoryQueryVariables>;
export const GetTodosByUserDocument = gql`
    query getTodosByUser($input: GetTodosByUser!) {
  getTodosByUser(input: $input) {
    id
    category
    title
    done
    priority
  }
}
    `;

/**
 * __useGetTodosByUserQuery__
 *
 * To run a query within a React component, call `useGetTodosByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosByUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTodosByUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTodosByUserQuery, GetTodosByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTodosByUserQuery, GetTodosByUserQueryVariables>(GetTodosByUserDocument, options);
      }
export function useGetTodosByUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodosByUserQuery, GetTodosByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTodosByUserQuery, GetTodosByUserQueryVariables>(GetTodosByUserDocument, options);
        }
export type GetTodosByUserQueryHookResult = ReturnType<typeof useGetTodosByUserQuery>;
export type GetTodosByUserLazyQueryHookResult = ReturnType<typeof useGetTodosByUserLazyQuery>;
export type GetTodosByUserQueryResult = ApolloReactCommon.QueryResult<GetTodosByUserQuery, GetTodosByUserQueryVariables>;
export const UpdateTodoDoneDocument = gql`
    mutation updateTodoDone($input: UpdateTodoDone!) {
  updateTodoDone(input: $input)
}
    `;
export type UpdateTodoDoneMutationFn = ApolloReactCommon.MutationFunction<UpdateTodoDoneMutation, UpdateTodoDoneMutationVariables>;

/**
 * __useUpdateTodoDoneMutation__
 *
 * To run a mutation, you first call `useUpdateTodoDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoDoneMutation, { data, loading, error }] = useUpdateTodoDoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoDoneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTodoDoneMutation, UpdateTodoDoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateTodoDoneMutation, UpdateTodoDoneMutationVariables>(UpdateTodoDoneDocument, options);
      }
export type UpdateTodoDoneMutationHookResult = ReturnType<typeof useUpdateTodoDoneMutation>;
export type UpdateTodoDoneMutationResult = ApolloReactCommon.MutationResult<UpdateTodoDoneMutation>;
export type UpdateTodoDoneMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTodoDoneMutation, UpdateTodoDoneMutationVariables>;
export const CopyTodoDocument = gql`
    mutation copyTodo($input: CopyTodo!) {
  copyTodo(input: $input)
}
    `;
export type CopyTodoMutationFn = ApolloReactCommon.MutationFunction<CopyTodoMutation, CopyTodoMutationVariables>;

/**
 * __useCopyTodoMutation__
 *
 * To run a mutation, you first call `useCopyTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopyTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copyTodoMutation, { data, loading, error }] = useCopyTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopyTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CopyTodoMutation, CopyTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CopyTodoMutation, CopyTodoMutationVariables>(CopyTodoDocument, options);
      }
export type CopyTodoMutationHookResult = ReturnType<typeof useCopyTodoMutation>;
export type CopyTodoMutationResult = ApolloReactCommon.MutationResult<CopyTodoMutation>;
export type CopyTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CopyTodoMutation, CopyTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($input: DeleteTodo!) {
  deleteTodo(input: $input)
}
    `;
export type DeleteTodoMutationFn = ApolloReactCommon.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = ApolloReactCommon.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($input: NewTodo!) {
  createTodo(input: $input)
}
    `;
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($input: UpdateTodo!) {
  updateTodo(input: $input)
}
    `;
export type UpdateTodoMutationFn = ApolloReactCommon.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = ApolloReactCommon.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;