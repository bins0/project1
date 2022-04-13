Vue.component('menu-component',{
    template : `
    <div>
    <v-main class="d-flex justify-center" style="padding-top:150px;">
    <v-sheet color="white #222 pr-0" >

        <v-row  class="black--text pt-8 px-0" style="
        
        margin: 0 auto;">
            <v-col class="text-center" sm="12" md="12" >
                <h1>MENU</h1><br>
                <v-divider color="gray" ></v-divider>
                <br>
                <h2>가장 인기있는 메뉴입니다</h2>
            </v-col>
    </v-row>
        <v-row   class="mx-md-15 d-flex justify-center" cols="12" sm="12">
            
            <v-col  class="mb-10 d-flex justify-center" max-width="750px"sm="12" md="4" v-for="(p, index) in pictures" :key="index" >
                 <v-hover v-slot="{ hover}">
                <v-card height="800px"  color="#212121--text"  flat>
                    <v-img :src="p.src" aspect-ratio="2.0" height="500px" width="600px" class="up" > 
                        <v-expand-transition>
                            <div
                                v-if="hover"
                                class="text-center px-10 d-flex transition-fast-in-fast-out black v-card--reveal text-h5 white--text"
                                style="height: 100%;"
                            >
                            
                                {{p.count}} <br><br>
                                {{p.made}}
                            </div>
                         </v-expand-transition>
                    </v-img>
                    <v-card-title  class="justify-center" >{{p.title}}</v-card-title>

                        <h5 class="title text-center"  ><b>{{p.price}}</b> <span>원</span></h5> <br>
                   
                </v-card>
                </v-hover>
            </v-col>
        </v-row>
        </v-sheet>
      </v-main>

    `,
    data : function () {
        return {
            pictures : [//메뉴
            {
                count:"부드러운 안심과 풍미가 진한 등심을 함께 즐길 수 있는 스테이크",
                title : "티본 스테이크",
                src : "./img/tb.jpg",
                made : "소고기:미국산",
                price:"46,900"
            
            },
            {
                count:"발사믹 소스에 조리한 마늘이 어우러진 꽃등심 스테이크",
                title : "갈릭 립아이",
                src : "./img/ribeye.jpg",
                made : "소고기:호주산",
                price:"39,900"
               
            },
            {
                count:"부드러운 스테이크와 아웃백 최고의 투움바 소스로 맛을 낸 파스타",
                title : "투움바 스테이크 파스타 ",
                src : "./img/pasta.jpg",
                made : "소고기:호주산",
                price:"30,900"
               
            },
            {
                count:"산뜻한 체리와 산딸기의 향이 가득하며 뒷 여운이 길게 남는 와인",
                title : "카르멘 카베르네 소비뇽",
                src : "./img/wine.jpg",
                made : "원산지:프랑스산",
                price:"49,000"
                
            },
            {
                count:"부드러운 돼지갈비에 특제소스를 덧발라 구워낸 바비큐 요리",
                title : "베이비 백 립",
                src : "./img/ribes.jpg",
                made : "돼지고기:스페인산",
                price:"40,900"
                
            },
            {
                count:"시즈닝으로 바삭하고 특별한 맛을 즐길 수 있는 닭날개 요리",
                title : "크리스피 윙",
                src : "./img/wings.jpg",
                made : "닭고기:국내산",
                price:"19,500"
             
            },        
        ],
        }
    },
   
   
})