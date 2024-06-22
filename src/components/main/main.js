import './main.css'

import Sec1 from './sec1'
import Sec2 from './sec2'
import Sec3 from './sec3'


const main = () =>{

    const Artis = [
        {
            title : '24시간 언제나',
            sub : "한밤중이나 주말에도 스마트폰으로\n시간에 구애받지 않고\n쏘카와 함께 이동하세요.",
            img : './assets/usp_a.jpg'
        },
        {
            title : '원하는 곳에서',
            sub : "내 주변 3분 거리 쏘카존에서\n혹은 내가 있는 곳으로 쏘카를 불러\n어디서나 편하게 출발하세요.",
            img : './assets/usp_b.jpg'
        },
        {
            title : '필요한 시간만큼',
            sub : "간단한 장보기부터 주말여행까지\n10분 단위로 원하는 만큼만 이용하세요.",
            img : './assets/usp_c.jpg'
        },
        {
            title : '다양한 차종을',
            sub : "연인과의 드라이브부터 가족 캠핑까지\n상황에 맞게 50여 종의 차량을\n선택해서 이용하세요.",
            img : './assets/usp_d.jpg'
        }
    
]
    

    return(
        <main>
           <Sec1 />
           <Sec2 Artis={Artis}/>
           <Sec3 />
        </main>
    )
}

export default main