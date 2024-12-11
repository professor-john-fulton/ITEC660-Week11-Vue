// Questions are in the HTML file
const app = Vue.createApp({
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
  })
  
  app.mount('#app')