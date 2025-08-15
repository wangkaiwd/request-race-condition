import axios from 'axios'

export type OperationType = 'a' | 'b'

export const service = (type: OperationType): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(type)
    }, type === 'a' ? 4000 : 2000)
  })
}

export const fetchDataCreator = () => {
  const canceller: any = {
    cancel: null,
  }
  const run = (type: OperationType): Promise<string> => {
    return new Promise((resolve, reject) => {
      canceller.cancel = (reason: any) => {
        reject({
          reason,
          name: 'cancel',
        })
        canceller.cancel = null
      }
      setTimeout(() => {
        resolve(type)
      }, type === 'a' ? 4000 : 2000)
    })
  }
  return {
    run,
    canceller,
  }
}

export const fetchData = fetchDataCreator()

// https://cnodejs.org/api
export const fetchTopics = (config: any) => {
  return axios.get('https://cnodejs.org/api/v1/topics', config)
}
