import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import { menuItems } from "./data/menuItems";
import CartDrawer from "./components/CartDrawer";


function App() {
  const [cart, setCart] = useState({});
  const [viewCart, setViewCart] = useState(false);

  function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }

  function decrementItem(id) {
    setCart((prev) => {
      const nextQty = (prev[id] || 0) - 1;
      const next = { ...prev };

      if (nextQty <= 0) {
        delete next[id];
      } else {
        next[id] = nextQty;
      }
      return next;
    });
  }

  function onRemove(id) {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  /* item is from cartItems, fooditem is the product from menuItems */
  /*[id ="ola", qty = 24] */
  const cartItems = Object.entries(cart).map(([id, qty]) => ({
    item: menuItems.find(
      (item) => item.id === id,
    ) /*find searches in menuItems for the item with the same ID */,
    qty,
  }));

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const subTotal = cartItems.reduce(
    (sum, fooditem) => sum + fooditem.item.price * fooditem.qty,0);

  return (
    <div className="app">
      <Header cartCount={cartCount} 
       setViewCart={setViewCart} />

      <main>
        <Hero />

        <Menu addToCart={addToCart} 
        decrementItem={decrementItem} 
        cart={cart} />

        <CartDrawer
          viewCart={viewCart}
          setViewCart={setViewCart}
          items={cartItems}
          onAdd={addToCart}
          onDec={decrementItem}
          onRemove={onRemove}
          subTotal={subTotal}
        />
      </main>
    </div>
  );
}

export default App;
