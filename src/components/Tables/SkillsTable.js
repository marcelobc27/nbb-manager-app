import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { Preset } from "../../styles";

const SkillsTable = ({contents = []}) => {
  const getHeader = () => (
    contents.map(s => s.name)
  )

  const getSkillValue = () => (
    contents.map(s => s.value)
  )

  return (
    <View style={Preset.TableContainer}>
      <DataTable.Header style={Preset.TableHeader}>
        {
          getHeader().map(title => (
            <DataTable.Title
              style={[Preset.TableTextPosition]}
              textStyle={Preset.TableHeaderTextStyle}
            >
              {title.toUpperCase()}
            </DataTable.Title>
          ))
        }
      </DataTable.Header>
      <DataTable.Row 
        style={Preset.TableRow}
      >
      {
        getSkillValue().map(value => (
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
            >
            {value}
          </DataTable.Cell>
        ))
      }
      </DataTable.Row>
    </View>
  );
};

export default SkillsTable;
