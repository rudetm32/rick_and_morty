import s from "./About.module.css"
export default  function About(){
  return (
    <>
    <div className={s.mensaje}>
    <p>El desarrollo de esta aplicación, es un ejercicio fundamental del avance de mi aprendizaje en el desarrollo Web, el camino es largo y lleno de retos que en momentos se transforman en frustraciones, desde siempre inicié con la convicción de poder entender los fundamentos y de forma posterior la aplicación de la tecnología, en herramientas que faciliten las tareas de personas y empresas. 
Ahora comprende que este mundo maravilloso te atrapa y conlleva a mantenerte actualizado, lo que para decirlo  de otra forma.  "Los conocimientos que he adquirido no son suficientes".<br>
</br>
<br /> Tendré que continuar con el aprendizaje  seguramente durante toda mi vida productiva. 
Sin embargo, y con toda la verdad de esta frase: 
 </p>
 <p className={s.p}>¡Vale la pena el esfuerzo!.</p>
    </div>
    <div className={s.encabezado}>
    <p>Soy Henry: Juan Antonio Ruiz Hernandez</p>
    <p>Cohorte 33-b: Desarrollo Web Full Stack</p>
    </div>
    
    <div className={s.tecnologias}>
      <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="react" />
      <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux"/>
      <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="JS" />
    </div>
    
    </>
  )
}