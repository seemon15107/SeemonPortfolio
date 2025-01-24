import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import java from "../assets/java.png"
import database from "../assets/database.png"
import docker from "../assets/docker.png"
import api from "../assets/api.png"


const Skills=()=>{
    return(
        <div className=" text-white-300 md-h-[150px] max-w-[120] mx-auto grid grid-cols-3 plaxe-items-center md:flex md:justify-between md:items-center">
            <h2 className="font-sans-serif font-bold text-white-300 text-2xl md:text-4xl m-4">
                My <br/> Skill <br/> Set
            </h2>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={html} alt="html" />
                <p className="mt-2">HTML</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={css} alt="html" />
                <p className="mt-2">CSS</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={js} alt="html" />
                <p className="mt-2">JAVASCRIPT</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={tailwind} alt="html" />
                <p className="mt-2">TAILWIND CSS</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={react} alt="html" />
                <p className="mt-2">REACT</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={java} alt="html" />
                <p className="mt-2">JAVA</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={database} alt="html" />
                <p className="mt-2">MySQL</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={docker} alt="html" />
                <p className="mt-2">DOCKER</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={api} alt="html" />
                <p className="mt-2">REST API</p>
            </div>
        </div>
    )
}

export default Skills;
