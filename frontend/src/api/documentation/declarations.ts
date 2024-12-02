type TDownloadsItem = {
    id: number,
    label: string,
    path: string,
    tags?: string[]
}

export type TDownloadsDB = TDownloadsItem[]