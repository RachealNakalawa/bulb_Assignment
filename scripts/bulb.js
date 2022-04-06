const appInstance = {
  data(){
      return {
					switchBulb: true
				
      }
  },
  methods: {
      changeSwitchValue:function(){
					console.log(this.switchBulb);
					this.switchBulb = !this.switchBulb;
					console.log('The new value of switch bulb', this.switchBulb); 
      }
  }
}

Vue.createApp(appInstance).mount('#app')