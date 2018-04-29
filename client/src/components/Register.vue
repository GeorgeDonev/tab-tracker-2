/<template>
  <div>
    <h1> Register </h1>

    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="email"
    />
    <br>
    <input type="password"
    name="password"
    v-model="password"
    placeholder="password"
    />
    <br>
    <button>Register</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: 'abc',
      password: '123' // will link and autofill from v-model
    }
  },
  watch: { // demonstrates how two way data binding works: data model is updated
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () { // if the data model changes, the view model changes
    setTimeout(() => {
      this.email = 'hello world!'
    }, 2000)

  }
}

// everything inside the script tag is the controller
// can bind HTML using special keywords as attributes
// which will link things together
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
