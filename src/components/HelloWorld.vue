<template>
<div>
   <v-app id="inspire">
    <v-jumbotron :gradient="grad" style="min-height:100%;">
    <v-layout row align-center>
      <v-flex  mt-4 pt-4 sm8 offset-sm4>
        <v-card  width="50%" height="100%" hover>
        
            <v-card-actions >
            <v-layout justify-end>
            <v-btn @click="say()" fab medium>
              <v-icon>cached</v-icon>
            </v-btn>
             </v-layout>
          </v-card-actions>
  
          <v-card-title   primary-title>
            <div>
              <h3  class="headline mb-0">Random quote</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <blockquote>
          &#8220;{{ obj.quote }}&#8221;
          <footer>
            <small>
              <em>&mdash;{{obj.author}}</em>
            </small>
          </footer>
        </blockquote>
          </v-card-text>
            <v-card-actions class="justify-center">
            
            <v-btn fab small>
              <a :href="href" ><font-awesome-icon  :icon="{ prefix: 'fab', iconName: 'twitter' }" /></a>
            </v-btn>

            <v-btn fab small>
              <a :href="href" ><font-awesome-icon  :icon="{ prefix: 'fab', iconName: 'facebook' }" /></a>
            </v-btn>
                        
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    </v-jumbotron>
  </v-app>
</div>

</template>

<script>
import { Twitter,  } from 'vue-socialmedia-share';
import axios from 'axios';
  export default {
    name: "HelloWorld",
    components: {
    Twitter
  },
    data: () => (
    {
    grad: 'to top left, #b4e391, #61c419',
    colors: [],
    obj : "",
    href: ""
    

    }),
  methods : {
  say: function () {
    this.Newquote();
      var item = this.colors[Math.floor(Math.random()*this.colors.length)];
      this.grad = `to right, ${item.colors[0]}, ${item.colors[1]}`;
    },
 Newquote: function () {
   
    return axios.get('https://talaikis.com/api/quotes/random/')
      .then(response => (this.obj=response.data));
    },
   },
  mounted () {
    axios.get('https://talaikis.com/api/quotes/random/')
      .then(response => (this.obj=response.data));
    axios.get('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
      .then(response => (this.colors = response.data));
    //href = "https://twitter.com/intent/tweet?text="+encodeURI(this.obj.quote)
     
  },
    computed: {
    urlQuote: function() {
      return encodeURI(this.obj.quote);
    },
    authorQuote: function() {
      return encodeURI(this.obj.author)
    },
  },
  watch: {
    obj() {
      console.log('The object has changed!')
      console.log(this.obj)
      this.href = "https://twitter.com/intent/tweet?text="+this.urlQuote+"----"+this.authorQuote
      console.log(this.href)
    }

  }
  }
</script>

<style>

</style>
