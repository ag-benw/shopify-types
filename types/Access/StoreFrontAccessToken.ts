export interface StoreFrontAccessTokenReponse {
  id: Id
  access_token: AccessToken
  access_scope: AccessScope
  created_at: CreatedAt
  title: Title
}

export interface Id {
  id: number
}

export interface AccessToken {
  access_token: string
}

export interface AccessScope {
  access_scope: string
}

export interface CreatedAt {
  created_at: string
}

export interface Title {
  title: string
}
