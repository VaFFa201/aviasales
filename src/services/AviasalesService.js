// export default class AviasalesService {
//   apiBase = 'https://aviasales-test-api.kata.academy'

//   async getRequest(url) {
//     const res = await fetch(`${this.apiBase}${url}`)
//     if (!res.ok) {
//       throw new Error(`${url} Could not fetch, recieved ${res.status}`)
//     }

//     const body = await res.json()

//     return body
//   }

//   // try {
//   //   const response = await fetch(`${this.apiBase}/search`)
//   //   const data = await response.json()

//   //   const newResponse = await fetch(`${this.apiBase}/tickets?searchId=${data.searchId}`)
//   //   const body = await newResponse.json()

//   //   console.log(body.tickets)
//   // } catch (error) {
//   //   console.error(error)
//   // }
//   // }
// }
