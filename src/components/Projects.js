import websiteImg1 from '../assets/Cafe.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/hdd.jpg';
import websiteImg4 from '../assets/faculty.jpg';
import websiteImg5 from '../assets/resume.png';


export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Cafe Website Using HTML,Javascript And Tailwind css',
                link: 'https://github.com/22CSR041/Cafe-site'
            },
            {
                image: websiteImg2,
                description: 'Food Recipe Ecommerce website.Built  using the MERN stack (MongoDB, Express.js, React.js, Node.js) collabrated with Ajay-Muthusamy',
                link: 'https://github.com/Ajay-muthusamy/Food-Recipe-Application'
            },
            {
                image: websiteImg3,
                description: 'HDD Sheduling Simulator',
                link: 'https://github.com/22CSR041/HDD_SHEDULING'
            },
            {
                image: websiteImg4,
                description: 'Faculty Management',
                link: 'https://github.com/deepika-mathivanan/Faculty-Management'
            },
            {
                image: websiteImg5,
                description: 'Built Your Resume Here',
                link: 'https://github.com/deepika-mathivanan/Build-Your-Resume'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with HTML, Javascript and  CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}