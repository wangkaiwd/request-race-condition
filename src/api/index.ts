export type OperationType = 'a' | 'b'

export const service = (type: OperationType): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(type)
    }, type === 'a' ? 4000 : 2000)
  })
}

export const fetchDataInfo = () => {
  let cancel: any = null
  const run = (type: OperationType): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(type)
        cancel = () => {
          reject('cancel')
          cancel = null
        }
      }, type === 'a' ? 4000 : 2000)
    })
  }
  return {
    run,
    cancel,
  }
}
