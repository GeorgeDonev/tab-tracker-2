/<template>
  <div>
    <h1> Register </h1>

    <input
    type="email"
    name="email"
    placeholder="email"
    />
    <br>
    <input type="password"
    name="password"
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

    }
  }
}

// everything inside the script tag is the controller
// can bind HTML using special keywords as attributes
// which will link things together
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
