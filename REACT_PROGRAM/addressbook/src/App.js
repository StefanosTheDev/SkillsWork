import logo from './logo.svg';
import './App.css';

function App() {
  const isOpen = true;

  return (
    // leverage the terenery operator to write some clean code to achive this.
    // an if condition to check the length if it meets the conditon. Do the return below. If not return you suck.

    <div>
      {isOpen ? (
        <div className="flex flex-wrap gap-4 p-4">
          {userData
            .filter((contact) => contact.age > 20)
            .map((contact) => (
              <div
                key={contact.id}
                className="border-2 border-gray-300 p-4 rounded-lg shadow-md w-48 text-center"
              >
                <h2 className="text-xl font-bold">{contact.name}</h2>
                <h2 className="text-gray-600">{contact.age}</h2>
              </div>
            ))}
        </div>
      ) : (
        <h1> You Suck</h1>
      )}
    </div>
  );
}

const userData = [
  {
    name: 'Stefanos',
    age: 55,
  },
  {
    name: 'George',
    age: 30,
  },
  {
    name: 'Bob',
    age: 20,
  },
];

// Step 1: Render the userData list with a respective box around each element ->> Done. (Remember Map.)
// Step 2: Only show and iterate through the userData if the length is greater than 2
export default App;
