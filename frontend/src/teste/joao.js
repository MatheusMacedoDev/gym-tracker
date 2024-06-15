import React, { useState } from 'react';
import { View } from 'react-native';
import ParallaxCarousel from '../components/ParallaxCarousel';

const Joao = () => {
    const [imageURIs, setImageURIs] = useState([
        'https://gymtrackerblobstorage.blob.core.windows.net/gymtrackerblobcontainer/f4dada883f5a4e35945875205d353c90.png',
        'https://gymtrackerblobstorage.blob.core.windows.net/gymtrackerblobcontainer/f626ec9f90f841be9f0f329ac8aad635.jpg',
        'https://gymtrackerblobstorage.blob.core.windows.net/gymtrackerblobcontainer/5cbc37bfb0fe4293b85d22ea749e542f.png',
        'https://gymtrackerblobstorage.blob.core.windows.net/gymtrackerblobcontainer/4e0eff2f5e2744a9a737cf2ba6a03f7e.jpg',
        'https://gymtrackerblobstorage.blob.core.windows.net/gymtrackerblobcontainer/c164557ec168482ebb8430e87ce88c25.jpg'
    ]);

    return (
        <View
            style={{
                flex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <ParallaxCarousel marginTop='100px' data={imageURIs} />
        </View>
    );
};

export default Joao;
