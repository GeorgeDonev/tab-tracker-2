// this is how a  front end service can communicate with the backend
import Api from '@/services/Api'

export default { // exports object with register method
  register (credentials) { // hits the register endpoint
    return Api().post('register', credentials)
    // passes email and pass to post
    // method of  axios that does a post request to an endpoint on the
    // express server to use the credentials
  }
}
// method is called in the app as /register

// this is how to call a method from another (the front end):
// AuthenticationService.register({
//   email: 'tseting@gmail.com',
//   password: '12345'
// })
// or basically this JSON will be posted to the backend from the front endpoint:
// {
// "email": 'tseting@gmail.com',
// "password": '12345'
// }
