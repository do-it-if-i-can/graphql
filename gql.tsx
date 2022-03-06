import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Uint: any;
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

export type EditTodo = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
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
  editTodo: Scalars['Boolean'];
  editUser: User;
  moveTodo: Scalars['Boolean'];
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


export type MutationEditTodoArgs = {
  input: EditTodo;
};


export type MutationEditUserArgs = {
  input: EditUser;
};


export type MutationMoveTodoArgs = {
  input: MoveTodo;
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
