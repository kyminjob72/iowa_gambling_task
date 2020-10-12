import { createStore } from 'vuex'

 const store = createStore({
    state () {
        return {
          history:[],
          point:2000,
          userInfo:{
            name:"default",
            age : 0,
            sex : "女",
          },
          gameTimes:100,
          cardInfo:{
            first:{
              reward:{
                count:50,
                dividend : 100,
              },
              penalty:{
                count:50,
                dividend : -100,
              }
            },
            second:{
              reward:{
                count:50,
                dividend : 100,
              },
              penalty:{
                count:50,
                dividend : -100,
              }
            },
            third:{
              reward:{
                count:50,
                dividend : 100,
              },
              penalty:{
                count:50,
                dividend : -100,
              }
            },
            fourth:{
              reward:{
                count:50,
                dividend : 100,
              },
              penalty:{
                count:50,
                dividend : -100,
              }
            },
          }
        }
      },
      mutations: {
        
      },
  actions: {}
})



export default store