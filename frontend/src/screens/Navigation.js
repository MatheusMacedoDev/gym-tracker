import { Text, TouchableOpacity, View } from "react-native"


export const Navigation = ({navigation}) => {
return( 
    <View style={{width: '90%', height: 40, flexDirection: "row", justifyContent:"space-between", marginTop:150, alignSelf:"center"}}>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("Eduardo")}}>
            <Text>EDUARDO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("Rubens")}}>
            <Text>RUBENS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("Joao")}}>
            <Text>JOAO</Text>
        </TouchableOpacity>
    </View>
)
}