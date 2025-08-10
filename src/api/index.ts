export type OperationType = 'a' | 'b'

export const service = (type: OperationType): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(type)
    }, type === 'a' ? 4000 : 2000)
  })
}
