export interface ILink {
  name: string,
  path: string,
}

export interface IOption {
  name: string,
  value: number | string,
}

export interface IPaginateMeta {
  currentPage: number,
  lastPage: number,
}

export interface IPaginate<T> {
  data: T[],
  meta: IPaginateMeta,
}

export interface IRange {
  startDate: string | Date,
  endDate: string | Date,
}

export interface ISeo {
  description: string,
  title: string,
}

export interface ITab {
  active?: boolean,
  badge?: number,
  disabled?: boolean,
  href?: string,
  name: string,
  tag: 'nuxt-link' | 'div' | 'button' | 'a',
  to?: string,
  tooltip?: string,
}
