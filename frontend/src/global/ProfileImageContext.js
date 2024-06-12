import { createContext } from 'react';

const ProfileImageContext = createContext({
    profileImage: {},
    setProfileImage: () => {}
});

export default ProfileImageContext;
