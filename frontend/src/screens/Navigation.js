import { Text, TouchableOpacity, View } from "react-native"


export const Navigation = ({navigation}) => {
return( 
    <View style={{width: '100%', height: 400, flexDirection: "column", justifyContent:"space-between", alignItems: 'center', marginTop:150, alignSelf:"center"}}>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("Eduardo")}}>
            <Text>EDUARDO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("Rubens")}}>
            <Text>RUBENS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("Joao")}}>
            <Text>JOAO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("Main")}}>
            <Text>BOTTOM TAB</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("RecoverPasswordScreen")}}>
            <Text>Esqueceu a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("LoginScreen")}}>
            <Text>Login</Text>
            </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("GenderRegisterScreen")}}>
            <Text>GENDER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("WeightRecordScreen")}}>
            <Text>Peso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("HeighRecordScreen")}}>
            <Text>Altura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:40, backgroundColor: 'orange', alignItems: "center", justifyContent:"center"}} onPress={() => {navigation.navigate("TrainingRecordScrenn")}}>
            <Text>Registro de treino</Text>
        </TouchableOpacity>
    </View>
)
}