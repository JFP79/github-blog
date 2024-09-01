
export interface IGitProfile {
    name: string;
    bio: string;
    avatar_url: string;
    location: string;
    followers: number;
    following: number;
}

export interface Issue {
    id: number
    number: number
    title: string
    body: string
    url: string
    created_at: string
    user: IGitProfile
}





