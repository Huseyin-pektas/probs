
import { useState } from 'react';
import './App.css';
import Button from './component/Button';
import Name from './component/Name';

function App() {
  const ogrenci = [
    {
      name:"Hüseyin",
      surname:"Pektas",
      sinifi:"6/A",
      yasi:22
    },
    {
      name:"Melih",
      surname:"Dağdelen",
      sinifi:"6/C",
      yasi:19
    },
    {
      name:"Mehmet",
      surname:"Tektaş",
      sinifi:"6/D",
      yasi:30
    },
    {
      name:"Ali",
      surname:"Aktaş",
      sinifi:"6/E",
      yasi:25
    }

  ]
// const [durum, setDurum] = useState(0)

const [ad, setAd] = useState("")
const [soyad, setSoyad] = useState("")

console.log(ad, "<<<<<< ad")

const formuDenetle=(event)=>{
  event.preventDefault();
  if (ad === "") {
    alert("ad alanı boş olamaz")
    return
  }
 
  if (soyad === "") {
    alert("soyad alanı boş geçme")
    return
  }
  alert("form başarıyla gönderildi")
}

// eger map kullanıyorsak return div e bir key probo vermemiz gerekir.
  return (
    <div  className="App">

      {/* <div>
        {ogrenci.map((item, index)=>
         {
          if(item.yasi >= 20 ){
            return(
              <div key={index}>
                <h3>Adı:{item.name} </h3>
                <h3> Soyadı: {item.surname}</h3>
                <p>Sınıfı :{item.sinifi}</p>
                <p> Yaşı: {item.yasi}</p>
              </div>
            )
          }
         }

        )}


        
      </div> */}

      <form onSubmit={formuDenetle} >
        <div>
          <br></br>
          <label>Adı : </label>
        <input placeholder='Alex' value={ad} onChange={(event)=>setAd(event.target.value)}/>
        <br/> <br/>

        <label>Soyadı : </label>
       
       <input placeholder='Ferguson' value={soyad} onChange={(event)=> setSoyad(event.target.value)}/>
      <br/><br/>
      <button type='submit'>Gönder</button>
        </div>
      </form>



        {/* <h3 style={{color:"red"}}>Durum değiştir: {durum}</h3>
        
        <button onClick={()=> {if (durum < 10){  setDurum(durum +1) }}}
        >Artır</button>
        <p>Durum:{durum}</p>
        <button onClick={()=>{if (durum > 0){  setDurum(durum -1) }}}
        
        >Azalt</button>  */}
     
       {/* <Button iconClass="fa-solid fa-house" title="Buton 1" type={"primary"} onpress={()=>alert("buton 1 tıklandı Cevabı:react harika bir kütüphane")} message ="react harika bir kütüphane"/>
      <Button iconClass="fa-solid fa-magnifying-glass" title="Buton 2" type="secondary" onpress={()=>alert("buton 2 tıklandı cevabı: iyi ki react derslerine başladım.")} message ="iyi ki react derslerine başladım."/>
      <Button iconClass="fa-solid fa-phone" title="Buton 3" type="danger" onpress={()=>alert("buton 3 tıklandı. cevap:react bir ayrıcalıktır.")} message ="react bir ayrıcalıktır."/>
      <Button iconClass="fa-solid fa-house" title="Buton 4"  onpress={()=>alert("buton 1 tıklandı. bu normal bir buton")} message ="react harika bir kütüphane"/>
        
     <Name  name ="John" message="React'a Hoş Geldiniz?" /> */}
        
     
    </div>
  );
}

export default App;
