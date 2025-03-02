import { useState } from 'react';
import './App.css'; // ✅ Import styles

function App() {
  return <UserList />;
}

export function UserList() {
  const [userData, setUserData] = useState([
    { id: 1, name: 'Stefanos', age: 55 },
    { id: 2, name: 'George', age: 10 },
    { id: 3, name: 'Bob', age: 20 },
    { id: 4, name: 'aaa', age: 9 },
    { id: 5, name: 'ddd', age: 2 },
    { id: 6, name: 'ccc', age: 4 },
    { id: 7, name: 'ab', age: 20 },
  ]);

  const [isOpen, setIsOpen] = useState(true);

  // ✅ Function to increase age by 20
  const increaseAgeBy20 = (id) =>
    setUserData((users) =>
      users.map((user) =>
        user.id === id ? { ...user, age: user.age + 20 } : user
      )
    );

  // ✅ Filtered list: Only users with age > 20
  const filteredUsers = userData.filter((user) => user.age > 20);

  return (
    <div className="app-container">
      {/* ✅ Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-button">
        {isOpen ? 'Hide Users' : 'Show Users'}
      </button>

      {/* ✅ Render only if there are valid users */}
      {isOpen && filteredUsers.length > 0 && (
        <div className="user-list">
          {filteredUsers.map((user) => (
            <div key={user.id} className="user-box">
              <h2 className="user-name">{user.name}</h2>
              <h2 className="user-age">Age: {user.age}</h2>

              {/* ✅ Button to Increase Age */}
              <button
                className="increase-age-button"
                onClick={() => increaseAgeBy20(user.id)}
              >
                +20 Years
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
