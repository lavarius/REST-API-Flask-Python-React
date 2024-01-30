import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Message from './Message';
import './App.css'

// Define a type for the item
type Item = {
  name: string;
};

function App() {
  return <div><Message /></div>

  // Actual Dev component
  // const [items, setItems] = useState<Item[]>([]);
  // const [newItem, setNewItem] = useState<string>('');

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/items')
  //     .then((response) => response.json())
  //     .then((data: Item[]) => setItems(data));
  // }, []);

  // const addItem = () => {
  //   const itemToAdd: Item = { name: newItem };
  //   fetch('http://localhost:5000/api/items', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(itemToAdd),
  //   })
  //     .then((response) => response.json())
  //     .then((item: Item) => {
  //       setItems((currentItems) => [...currentItems, item]);
  //       setNewItem('');
  //     })
  //     .catch((error) => console.error('Error:', error));
  // };

  // return (
  //   <div className="App">
  //     <input
  //       type="text"
  //       value={newItem}
  //       onChange={(e) => setNewItem(e.target.value)}
  //       placeholder="Add a new item"
  //     />
  //     <button onClick={addItem}>Add Item</button>
  //     <ul>
  //       {items.map((item, index) => (
  //         <li key={index}>{item.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
