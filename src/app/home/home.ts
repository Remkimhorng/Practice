export class ModeOption {
    page!: number
    size?: number
    ownerId?: any
    searchText?: string
    isAudit?: boolean
    sort?: string
    isMultipleMove?: boolean = false
    id?: number | [];
    parentId?: number | null;
}