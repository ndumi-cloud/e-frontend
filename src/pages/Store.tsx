import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
// src/pages/Store.tsx
// import { useState, useEffect } from "react"
// import { Col, Row } from "react-bootstrap"
// import { StoreItem } from "../components/StoreItem"
// import axios from 'axios'

// type Item = {
//   id: string
//   name: string
//   price: number
//   imgUrl: string
// }

// export function Store() {
//   const [items, setItems] = useState<Item[]>([])

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('/api/items')
//         setItems(response.data)
//       } catch (error) {
//         console.error('Error fetching items:', error)
//       }
//     }
//     fetchItems()
//   }, [])

//   // Fallback data if API call fails
//   const storeItems: Item[] = [
//     {
//       "id": '1',
//       "name": "Book",
//       "price": 10.99,
//       "imgUrl": "/imgs/book.jpg"
//     },
//     {
//       "id": '2',
//       "name": "Computer",
//       "price": 1199,
//       "imgUrl": "/imgs/computer.jpg"
//     },
//     {
//       "id": '3',
//       "name": "Banana",
//       "price": 1.05,
//       "imgUrl": "/imgs/banana.jpg"
//     },
//     {
//       "id": '4',
//       "name": "Car",
//       "price": 14000,
//       "imgUrl": "/imgs/car.jpg"
//     }
//   ]

//   return (
//     <>
//       <h1>Store</h1>
//       <Row md={2} xs={1} lg={3} className="g-3">
//         {(items.length > 0 ? items : storeItems).map(item => (
//           <Col key={item.id}>
//             <StoreItem {...item} />
//           </Col>
//         ))}
//       </Row>
//     </>
//   )
// }