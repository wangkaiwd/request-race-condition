export type OperationType = 'a' | 'b'

export const service = (type: OperationType): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(type)
    }, type === 'a' ? 4000 : 2000)
  })
}

export const fetchDataCreator = () => {
  const cancel: any = {
    current: null,
  }
  const run = (type: OperationType): Promise<string> => {
    return new Promise((resolve, reject) => {
      cancel.current = () => {
        console.log('cancel promise')
        reject('cancel')
        cancel.current = null
      }
      setTimeout(() => {
        resolve(type)
      }, type === 'a' ? 4000 : 2000)
    })
  }
  return {
    run,
    cancel,
  }
}
