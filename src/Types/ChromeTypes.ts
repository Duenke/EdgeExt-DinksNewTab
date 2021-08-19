export interface BookmarkTreeNode {
    children?: BookmarkTreeNode[];
    dateAdded?: number;
    dateGroupModified?: number;
    id: string;
    index?: number;
    parentId?: string;
    title: string;
    unmodifiable?: object;
    url?: string;
}