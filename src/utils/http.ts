export const fetcherCreator = (api: (...args: any[]) => Promise<any>) => {
  const canceller: any = {
    cancel: null,
  }

  const run = (...args: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {
      api(...args).then((res) => {
        resolve(res)
        canceller.cancel = null
      }).catch((error) => {
        reject(error)
        canceller.cancel = null
      })
      canceller.cancel = () => {
        reject('cancel')
        canceller.cancel = null
      }
    })
  }

  return {
    run,
    canceller,
  }
}
