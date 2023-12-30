import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

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
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function AboutPage() {
  return (
    <>
     <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{ 
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <h1>About</h1>
      <p>Hedy Lamarr

Hedy Lamarr was an Austro-Hungarian-born American actress and technology inventor.<br /></p>
      <h1>Listed Items</h1>
      <ul>{listItems}</ul>
    </>
  );
}
export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton /> <AboutPage/>
    </div>
    
  );
}