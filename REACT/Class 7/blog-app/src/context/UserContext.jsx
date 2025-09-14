import { createContext, useState } from "react";


// const [user, setUser] = useState(null)


const UserContext = createContext({
    user: null,
    setUser: ()=>{}
});

export default UserContext;