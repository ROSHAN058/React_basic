import './App.css';
import { useState } from 'react';
import { getImageUrl } from './utils.js';
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
const products = [
  { title: 'Tubelight', isFruit: false, id: 1 },
  { title: 'Bulb', isFruit: false, id: 2 },
  { title: 'Electricity', isFruit: true, id: 3 },
];
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

const listItems = products.map(product =>
  <li
  key={product.id}
  style={{
    color: product.isFruit ? 'magenta' : 'darkgreen'
  }}
>
  {product.title}
</li>
);
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}
 


function AboutPage() {
  return (
    <>
    <h1>About</h1>
      <p>Technology inventor.<br /></p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{ 
          width: user.imageSize,
          height: user.imageSize

        }
      }

      />
       <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />

    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
      
      <h1>Listed Items</h1>
      <ul>{listItems}</ul>
      <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
    </>
  );
}
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}
function MyButton({ count, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}


export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <center><h1>Welcome </h1> </center>
      <AboutPage/>
      <div>
      <h1>Counters Will update after click</h1>
      <MyButton count={count} onClick={handleClick} />
    </div>
    <h1>To Do List for inventor {formatDate(today)}</h1> 
    <ul style={{
      backgroundColor: 'blue',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
    </div>
    
    
  );
}