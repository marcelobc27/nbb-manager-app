import { StyleSheet, View } from "react-native"
import { DataTable } from "react-native-paper"
import { Preset } from "../../styles"

export const FinanceTableHeader = ({title}) => {
  return(
    <DataTable.Header style={Preset.TableHeader}>
      <DataTable.Title 
        style={[Preset.TableTextPosition]} 
        textStyle={Preset.TableHeaderTextStyle}>
          {title}
      </DataTable.Title>
    </DataTable.Header>
  )
}

export const FinanceTableRow = ({contents = [], type}) => {
  const result = contents.filter(result => result.type === type)
  
  return(
      result.map(item => {
        return(
          <DataTable.Row style={Preset.TableRow}>
            <DataTable.Cell 
              style={[Preset.TableTextPosition]} 
              textStyle={Preset.TableRowTextStyle}>
                {item.name.toUpperCase()}
            </DataTable.Cell>
            <DataTable.Cell 
              style={[Preset.TableTextPosition]} 
              textStyle={Preset.TableRowTextStyle}>
                {item.value}
            </DataTable.Cell>
          </DataTable.Row>
        )
      })
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  }
})