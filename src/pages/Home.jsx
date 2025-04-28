import { useEffect } from 'react';
import Header_Home from '../components/Header_Home'
import Footer from '../components/Footer'
import ImageTrack from '../components/ImageTrack';

function Home()
{
    useEffect(() => {
    const logos = document.querySelectorAll('.background_div');
    
    const backgroundColor = [ '#A3B18A', '#8D9F6C', '#5C6E3D', '#8D9F6C', '#94A684'];
    
    
    for (let i = 0; i < logos.length; i++) {
        logos[i].style.setProperty('--i', i);
        logos[i].style.setProperty('--d', Math.random() * 8);
        logos[i].style.setProperty('--a', Math.random() * 8 + 4);
        logos[i].style.setProperty('--y', Math.floor(Math.random() * 100));
    
        const randColor = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
        logos[i].style.setProperty('--color', randColor);
        }
    }, []); 
    
    return(
    <>
    <section className="background">
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>

        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>

        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>

        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
    </section>
    <Header_Home/>
    <ImageTrack/>
    <Footer/>
    </> 
    );
}

export default Home;