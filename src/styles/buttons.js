import { ButtonSpacing } from "./Spacing"
import { SmallFont } from "./Typography"

export const BigButton = {
  width: '40%',
  height: '90%',
  ...ButtonSpacing
}

export const MediumButton = {
  width: '30%',
  height: '90%',
  ...ButtonSpacing
}

export const SmallButton = {
  width: '10%',
  height: '80%',
  ...ButtonSpacing,
  ...SmallFont
}

