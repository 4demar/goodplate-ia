import { ItemProps } from "../components/Item";

export function foodContains(itens: ItemProps[], foodName: string) {
  for (const item of itens) {
    if (item.name.toLocaleLowerCase() == foodName.toLocaleLowerCase()) {
      return true
    }
  }

  return false
}