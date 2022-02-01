import { observable, runInAction } from "mobx"
import { Data } from "./types"

export type DataState = {
  dataList: Data[]
  gettingDataLoading: boolean
}

export const demoStore = observable({
  //* observable state
  state: {
    dataList: [],
    gettingDataLoading: true,
  } as DataState,

  //* actions
  async appendData(data: Data): Promise<void> {
    setTimeout(() => {
      runInAction(() => {
        this.state.dataList.push(data)
      })
    }, 2000)
  },
  popData(): void {
    this.state.dataList.pop()
  },

  //* computed value
  get dataList(): Data[] {
    return this.state.dataList
  },
})
