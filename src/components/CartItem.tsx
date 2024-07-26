import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}


// src/components/CartItem.tsx
// import { Button, Stack } from "react-bootstrap"
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import { formatCurrency } from "../utilities/formatCurrency"
// import { useState, useEffect } from "react"
// import axios from 'axios'

// type CartItemProps = {
//   id: string
//   quantity: number
// }

// type Item = {
//   id: string
//   name: string
//   price: number
//   imgUrl: string
// }

// export function CartItem({ id, quantity }: CartItemProps) {
//   const { removeFromCart } = useShoppingCart()
//   const [item, setItem] = useState<Item | null>(null)

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const response = await axios.get(`/api/items/${id}`)
//         setItem(response.data)
//       } catch (error) {
//         console.error('Error fetching item:', error)
//       }
//     }
//     fetchItem()
//   }, [id])

//   if (item == null) return null

//   return (
//     <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
//       <img
//         src={item.imgUrl}
//         style={{ width: "125px", height: "75px", objectFit: "cover" }}
//       />
//       <div className="me-auto">
//         <div>
//           {item.name}{" "}
//           {quantity > 1 && (
//             <span className="text-muted" style={{ fontSize: ".65rem" }}>
//               x{quantity}
//             </span>
//           )}
//         </div>
//         <div className="text-muted" style={{ fontSize: ".75rem" }}>
//           {formatCurrency(item.price)}
//         </div>
//       </div>
//       <div> {formatCurrency(item.price * quantity)}</div>
//       <Button
//         variant="outline-danger"
//         size="sm"
//         onClick={() => removeFromCart(item.id)}
//       >
//         &times;
//       </Button>
//     </Stack>
//   )
// }
