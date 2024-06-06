import styled from "styled-components"

export const BoxCamera = styled.View`
flex-direction: row;
padding-left: 15px;
height: 108px;
margin-top: 600px;
background-color: transparent;
gap: 55px;
`

export const BtnCapture = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 75px;
height: 75px;
background-color: transparent;
border: 3px solid white;
border-radius: 40px;
`
export const BtnFlip = styled.TouchableOpacity`
align-items: center;
justify-content: center;
padding: 20px;
border-radius: 15px;
`
export const ConfigBtnCapture = styled.View`
width: 100%;
height: 100%;
background-color: white;
border: 3px solid black;
border-radius: 40px;
`
export const BtnFlash = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 70px;
height: 70px;
border-radius: 10px;
background-color: transparent;
margin-top: 5px;
`

export const LastPhoto = styled.Image`
width: 58px;
height: 58px;
border-radius: 10px;
margin: 28px 16px 0px 10px;
`

export const BoxTop = styled.View`
width: 90%;
height: 70px;
flex-direction: row;
justify-content: space-between;
align-self: center;
margin-top: 50px;
`

export const BtnReturnPhoto = styled.TouchableOpacity`
width: 70px;
height: 70px;
align-items: center;
justify-content: center;
`