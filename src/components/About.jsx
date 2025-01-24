import aboutimg from "../assets/aboutimg.webp"

const About=()=>{
    return(
        <div className="text-white max-w-[120px] mx-auto my-12 ml-[29px] inline " id="about">
            <h2 className="text-white text-2xl md:text-6xl mb-4 justify-start-center md:justify-start font-bold underline">About me</h2>
            <div className=" text-white-300 md-h-[150px] max-w-[120] mx-auto grid grid-cols-3 plaxe-items-center md:flex md:justify-between md:items-center">
            <img className=" w-70 h-70 rounded-full object-cover" src={aboutimg} width={200} height={200}/>            
            
            <div className="flex space-x-4 ml-[130px]">
                <div className=" p-4 border rounded-lg shadow-md ml-6">
                  <h3 className="font-semibold underline">Basic information:</h3>
                    <p className="text-base lg:text-lg md:text-right-1xl mb-2">
                        I was born in Asansol, West Bengal and lived there for 15 years then moved to Kanpur, UP for my higher education where I developed a passion for technology early on. As an aspiring software engineer I enjoy building innovative application and exploring feilds like mobile dev, Web dev and AI. Outside of work, I love staying active and exploring new things. Driven by curosity, I aim to make a positive impact through technology.
                    </p>
                </div>

               <div className=" p-4 border rounded-lg shadow-md ml-3">
                   <h3 className="font-semibold underline">Education:</h3>
                    <p className="text-base lg:text-lg md:text-right-1xl mb-2">
                        I completed my High school fom St. Mary Goretti Girls High School, Asansol, WB and completed my Higher Secondary from Shivaji Inter College, Kanpur, UP. I graduated with a degree in Computer Science from Dronacharya Group of Institutions, Greater Noida, UP. My studies focuses on development, system design and problem solving which have fueled my passion for creating innovative software sokutions.
                    </p>
                  </div>
            </div>





             </div>
        </div>
        
    )
}

export default About;