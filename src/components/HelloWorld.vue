<template>
  <div>
    <h1> {{ message }}</h1>

    <button @click="showDetails = showDetails"> Show Details: {{ showDetails }}</button>
    <button @click="edit = !edit"> EDIT: {{ edit }}</button>

    <div>
      <p> use a loop to get the contacts *** {{ contact = contacts[0] }} ***</p>
      <br>

      <p>{{ contact.name }} - {{ contact.email }} </p>
      <div v-show="edit">
        <input v-model="contact.name">
        <input v-model="contact.email">
      </div>

      <div v-show="OK">
        <p> Age: {{ contact.age }} </p>
        <p> {{ contact.link }} </p>

        <button @mouseover="contact.age++">Increase age</button>
        <button @mouseover="contact.age">Decrease age</button>

      </div>

    </div>

    <br>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      showDetails: false,
      edit: false,
      message: 'Their Contacts',
      contacts: [
        {
          name: 'Kemal Aydin',
          email: 'kemal.aydin@franklin.edu',
          age: 44,
          link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
          name: 'Kemal Aydin',
          email: 'kemal.aydin@franklin.edu',
          age: 44,
          link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
          name: 'Kemal Aydin',
          email: 'kemal.aydin@franklin.edu',
          age: 44,
          link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
          name: 'Kemal Aydin',
          email: 'kemal.aydin@franklin.edu',
          age: 44,
          link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
          name: 'Kemal Aydin',
          email: 'kemal.aydin@franklin.edu',
          age: 40,
          link: 'https://www.linkedin.com/in/kaydin/'
        }

      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
