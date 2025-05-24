import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="pep, cheese"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Hawaiin"
        description="pep, cheese"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="Tandoori"
        description="pep, cheese"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
