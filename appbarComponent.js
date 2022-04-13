Vue.component('appbar-component',{
    template : `
    <div>
      <!--min-width를 이용해서 860px로 되면 -->
      <v-app-bar  absolute min-width="1000px"
       dark height="100px" class="d-flex justify-center" style="position: fixed;"
      v-bind:value="show"  
      flat   app  >
                <v-btn  
                color ="white"  
                width="120px" 
                height="98px"  > 
                    <v-img   src="./img/kitchen.png" width="100px" height="90px"></v-img>
                </v-btn>

                <v-toolbar-title >
                     <v-row  height="120px" >
                <v-menu    
                  v-for="([text], index) in btns"
                  :key="text"
                  offset-y 
                  bottom>
                  <template   
                  v-slot:activator="{ attrs, on }" >
                    <v-btn style="color:white"
                     plain 
                      height="100px" 
                      class="ma-5 text-h5 ml-10"
                      v-bind="attrs"
                      v-on="on"
                    >
                     <b> {{ text }} </b> 
                    </v-btn>
                  </template>
            
                  <v-list dark >
                    <v-list-item class="mt-3 mb-3" 
                    v-for="(item,i) in name[index]"
                      :key="item"
                    
                      link
                    >
                      <v-list-item-title class="aline-center text-h6 "  v-text="item">{{item}}</v-list-item-title>
                   
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-row>
                    </v-toolbar-title>
            </v-app-bar>
            

    </div>

    `,
      data : function() {
        return {
          show:true,
            name: [
          {one : "STORY",two:"ABOUT",three:"PRESS CENTER"},
          {one : "DINNER",two:"LUNCH SET",three:"WINE LIST" ,four : "T-BONE Steak",five:"DESSERTS",six:"PASTA & SALADS"},
          {one : "동탄점",two:"서면점",three:"광안리점", four : "대전신세계점" ,five:"대구점" ,six:"광주점",seven :"강남점" },
          {one : "Steake Cooking Class",two:"Dissert Cooking Class",three:"Wine Calss"},
         

       
        ],
          btns: [
                        ['Brand'],
                        ['MENU'],
                        ['STORE'],
                        ['ACADEMY'],
            ],
    
        }

    },
    methods : {
      onResize : function() {
        this.show = window.innerWidth > 1000
        //윈도우화면크기 8 
    },
    },
    mounted() {//덧붙여준다
      this.onResize()
      window.addEventListener('resize', this.onResize)
  },
})

