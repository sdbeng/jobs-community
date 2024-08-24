export interface PostData {
    id: number;
    text: string;
    authorId: string;
    createdAt: Date;
    //include the user property in the PostData interface
    author: User;
    // author: {
    //     imageUrl?: string | null;
    // };
}

export interface User {
    id: number;
    name: string;
    email: string;
    imageUrl?: string | null;
}