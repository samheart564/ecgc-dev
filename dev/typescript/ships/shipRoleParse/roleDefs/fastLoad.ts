import type { SamvaluationProps } from "dev/typescript/samvaluation/types"

const samvaluationData = (await import(
  "dev/typescript/samvaluation/samvaluationData.json"
).then((module) => module.default)) as Record<string, SamvaluationProps>

export const fastLoadRole = (): Set<string> => {
  const fastLoadSet = new Set<string>()

  for (const key in samvaluationData) {
    const shipProps = samvaluationData[key]
    if (shipProps.preload && shipProps.preload.trim() !== "") {
      fastLoadSet.add(key)
    }
  }

  return fastLoadSet
}
