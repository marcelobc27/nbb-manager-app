import { Alignment, Colors, Typography } from "."

export const TableContainer = {
  flex: 1,
  margin: 1
}

export const TableTextPosition = {
  ...Alignment.ColumnCenter,
}

export const TableRow = {
  ...Alignment.RowCenter,
  backgroundColor: Colors.NEUTRALGREYCOLOR
}

export const TableHeader = {
  ...Alignment.RowCenter,
  backgroundColor: Colors.VARIANTDARKPURPLE,
}

export const TableRowTextStyle = {
  ...Alignment.ColumnCenter,
  ...Typography.SmallFontBold,
  color: Colors.SOLIDBLACKCOLOR
}

export const TableHeaderTextStyle = {
  ...Alignment.ColumnCenter,
  ...Typography.SmallFontBold,
  color: Colors.SOLIDWHITECOLOR      
}