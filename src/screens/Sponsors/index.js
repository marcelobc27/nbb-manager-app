import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import sponsors from "../../data/sponsor"
import { Colors } from "../../styles"

const SponsorSection = ({name, income, years, type }) => {
  const [backgroundColor, setBackgroundColor] = useState('')

  const changeColor = () => {
    {
      type === 'Golden'
      ? setBackgroundColor('#F1C40F')
      : type === 'Silver'
      ? setBackgroundColor('#B7B7B7')
      : setBackgroundColor('#EFEFEF')
    }
  }

  useEffect(() => {
    changeColor()
  }, [backgroundColor])

  return(
    <View style={styles.sponsorWrapper}>
      <View style={[{backgroundColor: backgroundColor}, styles.sponsorInfoWrapper]}>
        <Text style={styles.sponsorNameText}>{name}</Text>
        <Text style={styles.contractYearText}>{`${years} YEARS`}</Text>
      </View>
      <View style={styles.sponsorValueWrapper}>
        <Text style={styles.contractYearText}>{`${income}.000,00`}</Text>
      </View>
    </View>
  )
}

const Sponsors = () => {
  return(
    <View style={styles.sponsorContainer}>
      {sponsors.map((sponsor) => {
        return(
          <SponsorSection key={sponsor.id} name={sponsor.name} type={sponsor.type} years={sponsor.contractYears} income={sponsor.monthlyIncome}/>
        )
      })}
    </View>
  )   
}

const styles = StyleSheet.create({
  sponsorContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  sponsorWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  sponsorInfoWrapper: {
    flex: 0.7,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sponsorValueWrapper: {
    flex: 0.3,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  contractYearText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  sponsorNameText: {
    fontSize: 24
  }
})

export default Sponsors