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

export type EditUser = {
  avatar?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
  userName?: InputMaybe<Scalars['String']>;
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
  editUser: User;
  moveTodo: Scalars['Boolean'];
  updateTodo: Scalars['Boolean'];
  updateTodoDone: Scalars['Boolean'];
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


export type MutationEditUserArgs = {
  input: EditUser;
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