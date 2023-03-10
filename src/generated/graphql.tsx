import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type FieldError = {
  __typename?: 'FieldError';
  field?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  images?: Maybe<Array<Scalars['String']>>;
  videos?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostResponse;
  deletePost: Scalars['Boolean'];
  editProfile: UserResponse;
  login?: Maybe<UserResponse>;
  logout: Scalars['Boolean'];
  notAuthModifyPassword: UserResponse;
  revokeRefreshTokensForUser: Scalars['Boolean'];
  sendRecoveryEmail: UserResponse;
  signup?: Maybe<UserResponse>;
  updatePost: PostResponse;
  verifyEmailAddress: UserResponse;
};


export type MutationCreatePostArgs = {
  content: Scalars['String'];
  type: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationEditProfileArgs = {
  bio: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  profileBanner: Scalars['String'];
  profilePicture: Scalars['String'];
  website: Scalars['String'];
};


export type MutationLoginArgs = {
  clientName: Scalars['String'];
  clientOS: Scalars['String'];
  deviceLocation: Scalars['String'];
  input: Scalars['String'];
  password: Scalars['String'];
};


export type MutationNotAuthModifyPasswordArgs = {
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  id: Scalars['Float'];
};


export type MutationSendRecoveryEmailArgs = {
  email: Scalars['String'];
};


export type MutationSignupArgs = {
  birthDate: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  content: Scalars['String'];
  postId: Scalars['String'];
  type: Scalars['String'];
};


export type MutationVerifyEmailAddressArgs = {
  token: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  author: User;
  authorId: Scalars['Float'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  media?: Maybe<Media>;
  postId: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PostResponse = {
  __typename?: 'PostResponse';
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
  status?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']>;
  profileBanner?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findPost?: Maybe<Post>;
  findUser?: Maybe<User>;
  me?: Maybe<User>;
  postFeed: Array<Post>;
  userPostFeed: Array<Post>;
};


export type QueryFindPostArgs = {
  postId?: InputMaybe<Scalars['String']>;
};


export type QueryFindUserArgs = {
  username?: InputMaybe<Scalars['String']>;
};


export type QueryUserPostFeedArgs = {
  userId?: InputMaybe<Scalars['Float']>;
};

export type Session = {
  __typename?: 'Session';
  clientName: Scalars['String'];
  clientOS: Scalars['String'];
  creationDate: Scalars['String'];
  deviceLocation: Scalars['String'];
  id: Scalars['Int'];
  sessionId: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  birthDate: Scalars['String'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  profile?: Maybe<Profile>;
  sessions?: Maybe<Array<Session>>;
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<FieldError>>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CreatePostMutationVariables = Exact<{
  type: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'PostResponse', post?: { __typename?: 'Post', id: number, postId: string, authorId: number, type: string, content: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', username: string, firstName: string, lastName: string, email: string, id: number, birthDate: string, gender: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined }, media?: { __typename?: 'Media', images?: Array<string> | null | undefined, videos?: Array<string> | null | undefined } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field?: string | null | undefined, message: string }> | null | undefined } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type EditProfileMutationVariables = Exact<{
  website: Scalars['String'];
  bio: Scalars['String'];
  profileBanner: Scalars['String'];
  profilePicture: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
}>;


export type EditProfileMutation = { __typename?: 'Mutation', editProfile: { __typename?: 'UserResponse', status?: string | null | undefined, errors?: Array<{ __typename?: 'FieldError', field?: string | null | undefined, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, firstName: string, lastName: string, username: string, email: string, gender: string, birthDate: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined, sessions?: Array<{ __typename?: 'Session', id: number, sessionId: string, clientOS: string, clientName: string, deviceLocation: string, creationDate: string }> | null | undefined, posts?: Array<{ __typename?: 'Post', id: number, postId: string, authorId: number, type: string, content: string, createdAt: string, updatedAt: string, media?: { __typename?: 'Media', images?: Array<string> | null | undefined, videos?: Array<string> | null | undefined } | null | undefined }> | null | undefined } | null | undefined } };

export type FindPostQueryVariables = Exact<{
  postId?: InputMaybe<Scalars['String']>;
}>;


export type FindPostQuery = { __typename?: 'Query', findPost?: { __typename?: 'Post', id: number, postId: string, authorId: number, type: string, content: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', username: string, firstName: string, lastName: string, email: string, id: number, birthDate: string, gender: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined }, media?: { __typename?: 'Media', images?: Array<string> | null | undefined, videos?: Array<string> | null | undefined } | null | undefined } | null | undefined };

export type FindUserQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type FindUserQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', id: number, username: string, firstName: string, lastName: string, email: string, birthDate: string, gender: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined, posts?: Array<{ __typename?: 'Post', id: number, postId: string, authorId: number, type: string, content: string, createdAt: string, updatedAt: string, media?: { __typename?: 'Media', images?: Array<string> | null | undefined, videos?: Array<string> | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type LoginMutationVariables = Exact<{
  input: Scalars['String'];
  password: Scalars['String'];
  clientOS: Scalars['String'];
  clientName: Scalars['String'];
  deviceLocation: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserResponse', accessToken?: string | null | undefined, status?: string | null | undefined, user?: { __typename?: 'User', id: number, username: string, firstName: string, lastName: string, email: string, birthDate: string, gender: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined, sessions?: Array<{ __typename?: 'Session', id: number, sessionId: string, clientOS: string, clientName: string, deviceLocation: string, creationDate: string }> | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field?: string | null | undefined, message: string }> | null | undefined } | null | undefined };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, firstName: string, lastName: string, email: string, birthDate: string, gender: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined, sessions?: Array<{ __typename?: 'Session', id: number, sessionId: string, clientOS: string, clientName: string, deviceLocation: string, creationDate: string }> | null | undefined, posts?: Array<{ __typename?: 'Post', id: number, postId: string, authorId: number, type: string, content: string, createdAt: string, updatedAt: string, media?: { __typename?: 'Media', images?: Array<string> | null | undefined, videos?: Array<string> | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type NotAuthModifyPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
}>;


export type NotAuthModifyPasswordMutation = { __typename?: 'Mutation', notAuthModifyPassword: { __typename?: 'UserResponse', status?: string | null | undefined, errors?: Array<{ __typename?: 'FieldError', field?: string | null | undefined, message: string }> | null | undefined } };

export type PostFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type PostFeedQuery = { __typename?: 'Query', postFeed: Array<{ __typename?: 'Post', id: number, postId: string, authorId: number, type: string, content: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', username: string, firstName: string, lastName: string, email: string, id: number, birthDate: string, gender: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined }, media?: { __typename?: 'Media', images?: Array<string> | null | undefined, videos?: Array<string> | null | undefined } | null | undefined }> };

export type SendRecoveryEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendRecoveryEmailMutation = { __typename?: 'Mutation', sendRecoveryEmail: { __typename?: 'UserResponse', status?: string | null | undefined, errors?: Array<{ __typename?: 'FieldError', field?: string | null | undefined, message: string }> | null | undefined } };

export type SignupMutationVariables = Exact<{
  birthDate: Scalars['DateTime'];
  gender: Scalars['String'];
  password: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'UserResponse', status?: string | null | undefined, user?: { __typename?: 'User', id: number, username: string, email: string, firstName: string, lastName: string, gender: string, birthDate: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field?: string | null | undefined, message: string }> | null | undefined } | null | undefined };

export type UpdatePostMutationVariables = Exact<{
  postId: Scalars['String'];
  type: Scalars['String'];
  content: Scalars['String'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'PostResponse', post?: { __typename?: 'Post', id: number, postId: string, authorId: number, type: string, content: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', username: string, firstName: string, lastName: string, email: string, id: number, birthDate: string, gender: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined }, media?: { __typename?: 'Media', images?: Array<string> | null | undefined, videos?: Array<string> | null | undefined } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field?: string | null | undefined, message: string }> | null | undefined } };

export type UserPostFeedQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Float']>;
}>;


export type UserPostFeedQuery = { __typename?: 'Query', userPostFeed: Array<{ __typename?: 'Post', id: number, postId: string, authorId: number, type: string, content: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', username: string, firstName: string, lastName: string, email: string, id: number, birthDate: string, gender: string, emailVerified: boolean, profile?: { __typename?: 'Profile', profilePicture?: string | null | undefined, profileBanner?: string | null | undefined, bio?: string | null | undefined, website?: string | null | undefined } | null | undefined }, media?: { __typename?: 'Media', images?: Array<string> | null | undefined, videos?: Array<string> | null | undefined } | null | undefined }> };

export type VerifyEmailAddressMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyEmailAddressMutation = { __typename?: 'Mutation', verifyEmailAddress: { __typename?: 'UserResponse', status?: string | null | undefined } };


export const CreatePostDocument = gql`
    mutation createPost($type: String!, $content: String!) {
  createPost(type: $type, content: $content) {
    post {
      id
      postId
      authorId
      type
      content
      createdAt
      updatedAt
      author {
        username
        firstName
        lastName
        email
        id
        birthDate
        gender
        emailVerified
        profile {
          profilePicture
          profileBanner
          bio
          website
        }
      }
      media {
        images
        videos
      }
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      type: // value for 'type'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($postId: String!) {
  deletePost(postId: $postId)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const EditProfileDocument = gql`
    mutation EditProfile($website: String!, $bio: String!, $profileBanner: String!, $profilePicture: String!, $lastName: String!, $firstName: String!) {
  editProfile(
    website: $website
    bio: $bio
    profileBanner: $profileBanner
    profilePicture: $profilePicture
    lastName: $lastName
    firstName: $firstName
  ) {
    errors {
      field
      message
    }
    user {
      id
      firstName
      lastName
      username
      email
      gender
      birthDate
      emailVerified
      profile {
        profilePicture
        profileBanner
        bio
        website
      }
      sessions {
        id
        sessionId
        clientOS
        clientName
        deviceLocation
        creationDate
      }
      posts {
        id
        postId
        authorId
        type
        content
        createdAt
        updatedAt
        media {
          images
          videos
        }
      }
    }
    status
  }
}
    `;
export type EditProfileMutationFn = Apollo.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      website: // value for 'website'
 *      bio: // value for 'bio'
 *      profileBanner: // value for 'profileBanner'
 *      profilePicture: // value for 'profilePicture'
 *      lastName: // value for 'lastName'
 *      firstName: // value for 'firstName'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: Apollo.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, options);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = Apollo.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = Apollo.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;
export const FindPostDocument = gql`
    query findPost($postId: String) {
  findPost(postId: $postId) {
    id
    postId
    authorId
    type
    content
    createdAt
    updatedAt
    author {
      username
      firstName
      lastName
      email
      id
      birthDate
      gender
      emailVerified
      profile {
        profilePicture
        profileBanner
        bio
        website
      }
    }
    media {
      images
      videos
    }
  }
}
    `;

/**
 * __useFindPostQuery__
 *
 * To run a query within a React component, call `useFindPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useFindPostQuery(baseOptions?: Apollo.QueryHookOptions<FindPostQuery, FindPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPostQuery, FindPostQueryVariables>(FindPostDocument, options);
      }
export function useFindPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPostQuery, FindPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPostQuery, FindPostQueryVariables>(FindPostDocument, options);
        }
export type FindPostQueryHookResult = ReturnType<typeof useFindPostQuery>;
export type FindPostLazyQueryHookResult = ReturnType<typeof useFindPostLazyQuery>;
export type FindPostQueryResult = Apollo.QueryResult<FindPostQuery, FindPostQueryVariables>;
export const FindUserDocument = gql`
    query findUser($username: String) {
  findUser(username: $username) {
    id
    username
    firstName
    lastName
    email
    birthDate
    gender
    emailVerified
    profile {
      profilePicture
      profileBanner
      bio
      website
    }
    posts {
      id
      postId
      authorId
      type
      content
      createdAt
      updatedAt
      media {
        images
        videos
      }
    }
  }
}
    `;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions?: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: String!, $password: String!, $clientOS: String!, $clientName: String!, $deviceLocation: String!) {
  login(
    input: $input
    password: $password
    clientOS: $clientOS
    clientName: $clientName
    deviceLocation: $deviceLocation
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      birthDate
      gender
      emailVerified
      profile {
        profilePicture
        profileBanner
        bio
        website
      }
      sessions {
        id
        sessionId
        clientOS
        clientName
        deviceLocation
        creationDate
      }
    }
    errors {
      field
      message
    }
    accessToken
    status
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *      password: // value for 'password'
 *      clientOS: // value for 'clientOS'
 *      clientName: // value for 'clientName'
 *      deviceLocation: // value for 'deviceLocation'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    firstName
    lastName
    email
    birthDate
    gender
    emailVerified
    profile {
      profilePicture
      profileBanner
      bio
      website
    }
    sessions {
      id
      sessionId
      clientOS
      clientName
      deviceLocation
      creationDate
    }
    posts {
      id
      postId
      authorId
      type
      content
      createdAt
      updatedAt
      media {
        images
        videos
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const NotAuthModifyPasswordDocument = gql`
    mutation notAuthModifyPassword($token: String!, $confirmPassword: String!, $password: String!) {
  notAuthModifyPassword(
    token: $token
    confirmPassword: $confirmPassword
    password: $password
  ) {
    status
    errors {
      field
      message
    }
  }
}
    `;
export type NotAuthModifyPasswordMutationFn = Apollo.MutationFunction<NotAuthModifyPasswordMutation, NotAuthModifyPasswordMutationVariables>;

/**
 * __useNotAuthModifyPasswordMutation__
 *
 * To run a mutation, you first call `useNotAuthModifyPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNotAuthModifyPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [notAuthModifyPasswordMutation, { data, loading, error }] = useNotAuthModifyPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      confirmPassword: // value for 'confirmPassword'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useNotAuthModifyPasswordMutation(baseOptions?: Apollo.MutationHookOptions<NotAuthModifyPasswordMutation, NotAuthModifyPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NotAuthModifyPasswordMutation, NotAuthModifyPasswordMutationVariables>(NotAuthModifyPasswordDocument, options);
      }
export type NotAuthModifyPasswordMutationHookResult = ReturnType<typeof useNotAuthModifyPasswordMutation>;
export type NotAuthModifyPasswordMutationResult = Apollo.MutationResult<NotAuthModifyPasswordMutation>;
export type NotAuthModifyPasswordMutationOptions = Apollo.BaseMutationOptions<NotAuthModifyPasswordMutation, NotAuthModifyPasswordMutationVariables>;
export const PostFeedDocument = gql`
    query postFeed {
  postFeed {
    id
    postId
    authorId
    type
    content
    createdAt
    updatedAt
    author {
      username
      firstName
      lastName
      email
      id
      birthDate
      gender
      emailVerified
      profile {
        profilePicture
        profileBanner
        bio
        website
      }
    }
    media {
      images
      videos
    }
  }
}
    `;

/**
 * __usePostFeedQuery__
 *
 * To run a query within a React component, call `usePostFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostFeedQuery(baseOptions?: Apollo.QueryHookOptions<PostFeedQuery, PostFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostFeedQuery, PostFeedQueryVariables>(PostFeedDocument, options);
      }
export function usePostFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostFeedQuery, PostFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostFeedQuery, PostFeedQueryVariables>(PostFeedDocument, options);
        }
export type PostFeedQueryHookResult = ReturnType<typeof usePostFeedQuery>;
export type PostFeedLazyQueryHookResult = ReturnType<typeof usePostFeedLazyQuery>;
export type PostFeedQueryResult = Apollo.QueryResult<PostFeedQuery, PostFeedQueryVariables>;
export const SendRecoveryEmailDocument = gql`
    mutation sendRecoveryEmail($email: String!) {
  sendRecoveryEmail(email: $email) {
    status
    errors {
      field
      message
    }
  }
}
    `;
export type SendRecoveryEmailMutationFn = Apollo.MutationFunction<SendRecoveryEmailMutation, SendRecoveryEmailMutationVariables>;

/**
 * __useSendRecoveryEmailMutation__
 *
 * To run a mutation, you first call `useSendRecoveryEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRecoveryEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRecoveryEmailMutation, { data, loading, error }] = useSendRecoveryEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendRecoveryEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendRecoveryEmailMutation, SendRecoveryEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendRecoveryEmailMutation, SendRecoveryEmailMutationVariables>(SendRecoveryEmailDocument, options);
      }
export type SendRecoveryEmailMutationHookResult = ReturnType<typeof useSendRecoveryEmailMutation>;
export type SendRecoveryEmailMutationResult = Apollo.MutationResult<SendRecoveryEmailMutation>;
export type SendRecoveryEmailMutationOptions = Apollo.BaseMutationOptions<SendRecoveryEmailMutation, SendRecoveryEmailMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($birthDate: DateTime!, $gender: String!, $password: String!, $lastName: String!, $firstName: String!, $username: String!, $email: String!) {
  signup(
    birthDate: $birthDate
    gender: $gender
    password: $password
    lastName: $lastName
    firstName: $firstName
    username: $username
    email: $email
  ) {
    user {
      id
      username
      email
      firstName
      lastName
      gender
      birthDate
      emailVerified
      profile {
        profilePicture
        profileBanner
        bio
        website
      }
    }
    errors {
      field
      message
    }
    status
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      birthDate: // value for 'birthDate'
 *      gender: // value for 'gender'
 *      password: // value for 'password'
 *      lastName: // value for 'lastName'
 *      firstName: // value for 'firstName'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UpdatePostDocument = gql`
    mutation updatePost($postId: String!, $type: String!, $content: String!) {
  updatePost(postId: $postId, type: $type, content: $content) {
    post {
      id
      postId
      authorId
      type
      content
      createdAt
      updatedAt
      author {
        username
        firstName
        lastName
        email
        id
        birthDate
        gender
        emailVerified
        profile {
          profilePicture
          profileBanner
          bio
          website
        }
      }
      media {
        images
        videos
      }
    }
    errors {
      field
      message
    }
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      type: // value for 'type'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const UserPostFeedDocument = gql`
    query userPostFeed($userId: Float) {
  userPostFeed(userId: $userId) {
    id
    postId
    authorId
    type
    content
    createdAt
    updatedAt
    author {
      username
      firstName
      lastName
      email
      id
      birthDate
      gender
      emailVerified
      profile {
        profilePicture
        profileBanner
        bio
        website
      }
    }
    media {
      images
      videos
    }
  }
}
    `;

/**
 * __useUserPostFeedQuery__
 *
 * To run a query within a React component, call `useUserPostFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPostFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPostFeedQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserPostFeedQuery(baseOptions?: Apollo.QueryHookOptions<UserPostFeedQuery, UserPostFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPostFeedQuery, UserPostFeedQueryVariables>(UserPostFeedDocument, options);
      }
export function useUserPostFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPostFeedQuery, UserPostFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPostFeedQuery, UserPostFeedQueryVariables>(UserPostFeedDocument, options);
        }
export type UserPostFeedQueryHookResult = ReturnType<typeof useUserPostFeedQuery>;
export type UserPostFeedLazyQueryHookResult = ReturnType<typeof useUserPostFeedLazyQuery>;
export type UserPostFeedQueryResult = Apollo.QueryResult<UserPostFeedQuery, UserPostFeedQueryVariables>;
export const VerifyEmailAddressDocument = gql`
    mutation verifyEmailAddress($token: String!) {
  verifyEmailAddress(token: $token) {
    status
  }
}
    `;
export type VerifyEmailAddressMutationFn = Apollo.MutationFunction<VerifyEmailAddressMutation, VerifyEmailAddressMutationVariables>;

/**
 * __useVerifyEmailAddressMutation__
 *
 * To run a mutation, you first call `useVerifyEmailAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailAddressMutation, { data, loading, error }] = useVerifyEmailAddressMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailAddressMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailAddressMutation, VerifyEmailAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailAddressMutation, VerifyEmailAddressMutationVariables>(VerifyEmailAddressDocument, options);
      }
export type VerifyEmailAddressMutationHookResult = ReturnType<typeof useVerifyEmailAddressMutation>;
export type VerifyEmailAddressMutationResult = Apollo.MutationResult<VerifyEmailAddressMutation>;
export type VerifyEmailAddressMutationOptions = Apollo.BaseMutationOptions<VerifyEmailAddressMutation, VerifyEmailAddressMutationVariables>;