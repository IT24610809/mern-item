import { deleteItem } from '../api';

export default function ItemList({ items, onRefresh }) {
  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => {
            deleteItem(item._id);
            onRefresh();
          }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}