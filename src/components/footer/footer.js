import './footer.css'

const footer = ()=>{

    const custs =['회사소개','인재채용','이용약관','개인정보처리방침','위치정보 이용약관','차량손해면책제도','고객센터','제휴 문의'] 
    
    return(
        <footer>
            <div className='footer_wrap'>
            <ul className='sns_wrap'>
                <li><a href=""><img src="./assets/i-instagram.svg" alt="sns"/></a></li>
                <li><a href=""><img src="./assets/i-facebook.svg" alt="sns"/></a></li>
                <li><a href=""><img src="./assets/i-youtube.svg" alt="sns"/></a></li>
                <li><a href=""><img src="./assets/i-blog.svg" alt="sns"/></a></li>
            </ul>
            <ul className='cust_list'>
                {custs.map((cust)=><li>{cust}</li>)}
            </ul>
            <div className='info'>
                <ul>
                    <li>주소. 제주특별자치도 제주시 연미길 42 (오라삼동)</li>
                    <li>전화. 1661-3315</li>
                    <li>팩스. 02-6969-9333</li>
                </ul>
                <ul>
                    <li>(주)쏘카 통신판매업 <span>사업자정보 확인</span></li>
                    <li>신고: 제 2019-제주오라-3호, 사업자등록번호: 616-81-90529, 대표자: 박재욱</li>
                    <li>© 2024 SOCAR All rights reserved.</li>
                </ul>  
            </div>
            </div>
        </footer>
    )
}

export default footer