export const initItems = []

export const initState = {
  items: initItems,
  isEmpty: true,
  bookTotal: 0,
}

// 置於上述items陣列中的每個項目的物件模型
// id, quantity, price為必要屬性
const item = {
  userId: 0,
  id: 0,
  price: 0,
  larpName: 0,
  larpLoc: 0,
  datetime: '',
  contact: '',
  email: '',
  mobile: '',
}

// findOneById(items, id)` 依照某id找出項目。如果沒有找到，則返回空物件。
export const findOneById = (items, id) => {
  return items.find((item) => String(item.id) === String(id)) || {}
}

// updateOne(items, updateItem)` 更新項目 (quantity, color, name, price...)。updateItem會覆蓋原有的item。
export const updateOne = (items, updateItem) => {
  return items.map((item) => {
    if (String(item.id) === String(updateItem.id)) return updateItem
    else return item
  })
}

export const totalPrice = (items) =>
  items.map((item) => ({
    ...item,
    totalprice: item.price * item.people,
  }))

// 最後將更新後的state，與initialState整理成新的state
export const generateBookState = (state, items) => {
  // isEmpty為布林值
  const isEmpty = items.length === 0

  return {
    ...initState,
    ...state,
    totalPrice: totalPrice(items),
    isEmpty,
  }
}

// 初始化用
export const init = (items) => {
  return generateBookState({}, items)
}
