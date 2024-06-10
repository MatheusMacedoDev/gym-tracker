import { createContext } from 'react';

const AuthContext = createContext({
    user: {},
    setUser: () => {}
});

export default AuthContext;
