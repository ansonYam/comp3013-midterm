export type BookType = {
    id: number;
    name: string;
    author: string;
    coauthor?: string;
    coverImg: string;
    sequels?: string[];
    rating: number;
}