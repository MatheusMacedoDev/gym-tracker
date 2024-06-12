import { Text, TouchableOpacity, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View style={{ width: '100%', height: 400, flexDirection: "column", justifyContent: "space-between", alignItems: 'center', marginTop: "10%", alignSelf: "center" }}>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("Eduardo") }}>
        <Text>EDUARDO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("Rubens") }}>
        <Text>RUBENS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("Joao") }}>
        <Text>JOAO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("Main") }}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("RecoverPasswordScreen") }}>
        <Text>Esqueceu a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("LoginScreen") }}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("TrainingRecordScreen") }}>
        <Text>Registro de treino</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("ExerciseRecord") }}>
        <Text>ExerciseRecord</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("DefaultWorkoutExerciseScreen") }}>
        <Text>DefaultWorkoutExerciseScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("DefaultWorkoutsScreen") }}>
        <Text>DefaultWorkoutsScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("SelectGroupMuscle") }}>
        <Text>SelectGroupMuscle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("SelectExercise") }}>
        <Text>SelectExercise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("Presentation") }}>
        <Text>Presentation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("PresentationInitial") }}>
        <Text>PresentationInitial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("TrainingExercisesScreens") }}>
        <Text>TrainingExercisesScreens</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("Profile") }}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("Camera") }}>
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: 'orange', alignItems: "center", justifyContent: "center", marginTop: 5 }} onPress={() => { navigation.navigate("SharedProfile") }}>
        <Text>SharedProfile</Text>
      </TouchableOpacity>
    </View>
  );
};
