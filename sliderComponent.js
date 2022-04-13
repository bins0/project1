Vue.component('slider-component',{
    template : `
    <div>
    <v-main absolute style=" background-size: cover;" >
            <v-card flat  class="">
                <!-- cycle 자동으로 돔 -->
                <v-carousel  height="900px" show-arrows-on-hover hide-delimiter-background cycle >
                    <v-carousel-item   v-for="item in img" :src="item.src" >
                       
                        <v-sheet ></v-sheet>
                        <v-row  class="fill-height" aline-end d-fixed justify="center">
                            <div  class="display-3"></div>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </v-main>
    </div>
    
    `,
    data : function () {
        return {
            img: [
                        {src : './img/s1.jpg'},
                        {src : './img/rest.jpg'},
                        {src : './img/tbone.jpg'},
                        {src : './img/s3.jpg'},
             ]
        }
    },
   

})