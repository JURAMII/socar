import './main.css'


const Sec2 = ({Artis}) =>{
    

    return(
      <section className='sec2'>
        {Artis.map((arti)=><article>
            <div>
            <h2>{arti.title}</h2>
            <h3>{arti.sub}</h3>
            <div><img src={arti.img} alt="이미지" /></div>
            </div>
        </article>)}
      </section>
    )
}

export default Sec2