import { useEffect, useState } from 'react';

import {
    CreateUserLike,
    DeleteUserLike,
    GetUserLike
} from '../../../infra/services/userService';

import { callNetworkErrorOccuredToast } from '../../../utils/toastConfiguration';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../../colors.config';

export default function LikeButton({
    senderUserId,
    receiverUserId,
    updateUserLikesFn = null
}) {
    const [userLikeId, setUserLikeId] = useState(0);

    useEffect(() => {
        console.log(userLikeId);
    }, [userLikeId]);

    async function getIsLikedData() {
        const response = await GetUserLike(senderUserId, receiverUserId);

        if (response.status === 200) {
            setUserLikeId(response.data);
        } else if (response.status === 404) {
            setUserLikeId(null);
        } else {
            callNetworkErrorOccuredToast();
        }
    }

    useEffect(() => {
        getIsLikedData();
    }, []);

    async function handleLikeClick() {
        if (userLikeId === 0) return;

        if (!userLikeId) {
            const response = await CreateUserLike(senderUserId, receiverUserId);

            console.log('Create');
            console.log(response);

            if (response.status === 201) {
                setUserLikeId(response.data.userLikeId);
            } else {
                callNetworkErrorOccuredToast();
            }
        } else {
            const response = await DeleteUserLike(userLikeId);

            if (response.status === 204) {
                setUserLikeId(null);
            } else {
                callNetworkErrorOccuredToast();
            }
        }

        updateUserLikesFn();
    }

    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                top: 50,
                right: 0,
                zIndex: 100,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={handleLikeClick}
            disabled={userLikeId === 0}
        >
            <ActivityIndicator
                animating={userLikeId === 0}
                color='#fff'
                style={{
                    width: 6,
                    height: 6,
                    position: 'absolute',
                    zIndex: 2
                }}
            />
            <AntDesign
                name='heart'
                size={38}
                color={userLikeId ? colors.orangeDarker : '#6F6C73'}
            />
        </TouchableOpacity>
    );
}
