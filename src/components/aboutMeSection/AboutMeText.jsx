import { Link } from 'react-scroll';

function AboutMeText() {
    return (
        <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
            <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
            <p className='text-white'>Hi, I'm Hritik Chauhan, a passionate and dedicated Full-Stack Developer with a strong foundation in Java, Spring Boot, React and MySQL, and a drive to build efficient, user-friendly digital solutions. Over the years, I’ve worked on a variety of projects—from dynamic eCommerce systems, Chat application and Learning platforms with video streaming and secure payment integrations.</p>
            <button className='border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center'>
                <Link
                    to='projects'
                    smooth={true}
                    duration={500}
                    offset={-120}
                    className='cursor-pointer text-white hover:text-black transition-all duration-500'
                >
                    My Projects
                </Link>
            </button>
        </div>
    )
}

export default AboutMeText