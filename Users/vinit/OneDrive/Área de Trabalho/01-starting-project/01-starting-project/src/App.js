import React, {useState} from 'react';

import AddUser from "./component/UserList/AddUser";
import UserList from "./component/UserList/UserList";

function App() {
   const [userList, setUserList] = useState([]);

    const addUserList = (user) =>{
        setUserList((prevUsersList) => {
            return  [
                ...prevUsersList,
                {name: user.username, age: user.userage, id: Math.random().toString()},
            ];
        })
    }

  return (
      <div>
        <AddUser
            onAddUser={(user) => {
                addUserList(user);
        }}
        addList={userList}/>
        <UserList users={userList}/>
      </div>
  );
}
export default App;
