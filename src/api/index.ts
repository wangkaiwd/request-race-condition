// import axios from 'axios'

export type OperationType = 'a' | 'b'

export const service = (type: OperationType): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(type)
    }, type === 'a' ? 4000 : 2000)
  })
}

const fetcherCreator = (api: (...args: any[]) => Promise<any>) => {
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

export const fetchData = fetcherCreator(service)

// const createAxiosFetcher = () => {
//   const controller = new AbortController()
//   const run = () => {
//     return axios.get('/foo/bar', {
//       signal: controller.signal,
//     })
//   }
//   return {
//     run,
//     canceller: controller,
//   }
// }
