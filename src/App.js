
import './App.css';
import Button from './component/Button';
import Name from './component/Name';

function App() {
  return (
    <div  className="App">
        <h1 style={{color:"red"}}>Hello</h1>
     
      <Button iconClass="fa-solid fa-house" title="Buton 1" type={"primary"} onpress={()=>alert("buton 1 tıklandı Cevabı:react harika bir kütüphane")} message ="react harika bir kütüphane"/>
      <Button iconClass="fa-solid fa-magnifying-glass" title="Buton 2" type="secondary" onpress={()=>alert("buton 2 tıklandı cevabı: iyi ki react derslerine başladım.")} message ="iyi ki react derslerine başladım."/>
      <Button iconClass="fa-solid fa-phone" title="Buton 3" type="danger" onpress={()=>alert("buton 3 tıklandı. cevap:react bir ayrıcalıktır.")} message ="react bir ayrıcalıktır."/>
      <Button iconClass="fa-solid fa-house" title="Buton 4"  onpress={()=>alert("buton 1 tıklandı. bu normal bir buton")} message ="react harika bir kütüphane"/>
        
     <Name  name ="John" message="React'a Hoş Geldiniz?" />
        
     
    </div>
  );
}

export default App;
