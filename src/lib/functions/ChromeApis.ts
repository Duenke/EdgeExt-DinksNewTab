import { mockTopLevelNodeTree, type BookmarkTreeNode } from "$lib/types/ChromeTypes"

export async function getBrowserData(): Promise<BookmarkTreeNode[]> {
	const topLevelNodeTree: BookmarkTreeNode[] = await Promise.resolve(mockTopLevelNodeTree)
	// const topLevelNodeTree: BookmarkTreeNode[] = (await chrome.bookmarks.getTree()) as BookmarkTreeNode[]

	let folderNodes: BookmarkTreeNode[] = getFoldersFromNodeTree(topLevelNodeTree[0]).filter((node) => node.title || node.children!.length > 0)

	// folderNodes = $sort.sortFunction(folderNodes);

	return folderNodes
}

function getFoldersFromNodeTree(nodeTree: BookmarkTreeNode): BookmarkTreeNode[] {
	const thisNodesBookmarks: BookmarkTreeNode[] = nodeTree.children!.filter((node) => node.url)
	const thisNodeWithJustBookmarks: BookmarkTreeNode = {
		...nodeTree,
		children: thisNodesBookmarks
	}

	const thisNodesFolders: BookmarkTreeNode[] = nodeTree.children!.filter((node) => !node.url)
	const nestedNodeTrees: BookmarkTreeNode[] = thisNodesFolders.flatMap((folder) => getFoldersFromNodeTree(folder))

	return [thisNodeWithJustBookmarks, ...nestedNodeTrees]
}
