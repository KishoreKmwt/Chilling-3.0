export const paginationQuery = (pageIndex:any,pageSize:any,sorting:any,globalFilter:any,columnFilters:any) => {
    let query: any = {
      page: pageIndex,
      pageSize: pageSize,
      orderBy: { field: sorting ? sorting[0]?.id : 'dd' },
      search: globalFilter,
      orderDirection:(sorting.length > 0 ? sorting[0]?.desc ? 'DESC' : 'ASC' : 'DESC'),
      columnFilters,
    }
    return query;
  }