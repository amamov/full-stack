import { observer } from "mobx-react"
import useStore from "@hooks/useStore"
import { useCallback } from "react"

function Page() {
  const { demoStore } = useStore()

  const handlePushClick = useCallback(async () => {
    await demoStore.appendData({
      id: Math.random(),
      item: "hello mobx",
    })
  }, [demoStore])

  const handlePopClick = useCallback(() => {
    demoStore.popData()
  }, [demoStore])

  return (
    <div>
      <h1>
        MobX Demo : <a href="https://github.com/amamov/mobx-demo">Link</a>
      </h1>
      <h2>
        Current Data :{" "}
        {demoStore.dataList.map((data) => (
          <span key={data.id}>{data.id} </span>
        ))}
      </h2>
      <button type="button" onClick={handlePushClick}>
        push
      </button>
      <button type="button" onClick={handlePopClick}>
        pop
      </button>
    </div>
  )
}

export default observer(Page)
