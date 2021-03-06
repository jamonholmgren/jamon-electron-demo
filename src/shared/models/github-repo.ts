export interface GithubRepo {
  name: string
  description?: string
  fullName: string
  language?: string
  private: boolean
  owner?: {
    login: string
    type: 'User' | 'Organization'
    avatarUrl: string,
  }
}
