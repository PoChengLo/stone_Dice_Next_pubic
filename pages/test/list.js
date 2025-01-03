import { useState, useEffect } from 'react'

// 有名稱的路由(巢狀路由)
export default function List() {
  // 商品物件陣列狀態
  // 注意1: 初始值至少要空陣列，初次渲染使用的是初始值
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型一致(陣列)
  const [products, setProducts] = useState([])

  // 向伺服器獲取資料(建議寫在useEffect外，用async-await)
  const getProducts = async () => {
    const baseURL =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'

    const res = await fetch(baseURL)
    const resData = await res.json()

    console.log(resData)

    // 設定到狀態中
    // (3.) 設定到狀態後 -> 觸發update(re-render)
    setProducts(resData)
  }

  // 樣式2: didMount
  useEffect(() => {
    // (2.) 初次render之後，執行這裡一次
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {/* (1.)首次render: 使用狀態初始值`[]` */}
        {products.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}
