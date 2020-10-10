import { TestScheduler } from "jest"

export const hashtags = (text) => {
  const arr = text.split(" ")
  return arr.filter(x => x.includes("#"))
}
