import axios from 'axios'

const controller = new AbortController()
axios.get(' https://cnodejs.org/api/v1/topics', { signal: controller.signal }).then((res) => {
  console.log('res', res)
}, (reason) => {
  console.log('reason', reason)
})
