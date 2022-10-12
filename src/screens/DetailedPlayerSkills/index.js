import { Button, ScrollView, StyleSheet, Text, View } from "react-native"
import { Alignment, Colors } from "../../styles"

const SkillsRegion = () => {
  return(
    <View style={styles.skillSectionWrapper}>
      <Text>Teste2</Text>
    </View>
  )
}

const DetailedPlayerSkills = ({navigation}) => {
  return(
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <SkillsRegion/>
      <SkillsRegion/>
      <SkillsRegion/>
      <SkillsRegion/>
      <SkillsRegion/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.SOLIDWHITECOLOR,
    ...Alignment.ColumnTopLeft
  },
  skillSectionWrapper: {
    flex: 1,
    width: '95%',
    borderWidth: 2,
    borderRadius: 1,
    borderStyle: 'solid',
    borderColor: Colors.VARIANTDARKPURPLE,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 10,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  }
})

export default DetailedPlayerSkills