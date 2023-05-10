import { useEffect, useRef } from 'react';

import { HomePageButtonLeft, HomePageButtonRight } from '../home-button/home-button.styles';

import './home-page.styles.scss'

const HomePage = () => {
    const mainCanvas = useRef();
    useEffect(() => {
        class Particle {
            constructor(x, y, directionX, directionY, size, color, lineColor){
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
                this.lineColor = lineColor;
            }

            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = 'white';
                ctx.fill();
            }

            update(){
                if(this.x > canvas.width || this.x < 0){
                    this.directionX = -this.directionX;
                }
                if(this.y > canvas.height || this.y < 0){
                    this.directionY = -this.directionY;
                }

                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;

                let distance = Math.sqrt(dx*dx + dy*dy);

                if(distance < mouse.radius + this.size){
                    if(mouse.x < this.x && this.x < canvas.width - this.size * 10){
                        this.x += 10;
                        this.directionX *= -1;
                    }
                    if(mouse.x > this.x && this.x > this.size * 10){
                        this.x -= 10;
                        this.directionX*= -1;
                    }
                    if(mouse.y < this.y && this.y < canvas.height - this.y * 10){
                        this.y += 10;
                        this.directionY *= -1;
                    }
                    if(mouse.y > this.y && this.y > this.size * 10){
                        this.y -= 10;
                        this.directionY *= -1;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;

                this.draw();
            }
        }

        const canvas = mainCanvas.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        let mouse = {
            x: null,
            y: null,
            radius: (canvas.height/120) * (canvas.width/120)
        }

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y
        })

        function init(){
            particlesArray = [];
            let colours = ['33, 169, 135,', '255, 50, 10']

            let numberOfParticles = (canvas.width * canvas.height)/20000;
            for(let i = 0; i< numberOfParticles; i++){
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 2) - 1;
                let directionY = (Math.random() * 2) - 1;
                let color = '#8C5523';
                let lineColor = colours[Math.floor(Math.random() * 2)];

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color, lineColor));
            }  
        }

        function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

        for (let i=0; i<particlesArray.length; i++){
            particlesArray[i].update();
        }
        connect();
        }

        function connect() {
            let opacityValue = 1;
            for(let a = 0; a<particlesArray.length; a++){
                for(let b=a; b<particlesArray.length; b++){
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y))

                    if(distance < (canvas.width/7) * (canvas.height/7)){
                        opacityValue = 1 - (distance/20000);
                        ctx.strokeStyle = 'rgba('+ particlesArray[b].lineColor + opacityValue +')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            mouse.radius = (canvas.height/80) * (canvas.width/80)
            init();
        })

        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        })

        init();
        animate();
    }, []);
    return(
        <div className="home-wrapper">
            <canvas id='main-canvas' ref={mainCanvas}>
            </canvas> 
            <div className='home-container'>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                            <h1 className="link">
                                <span className="link--top">Ali Ghosn</span>
                                <span className="link--bottom">Ali Ghosn</span>
                            </h1>
                            </td>
                        </tr>
                        <tr className='homepage-table-buttons'>
                            <td><HomePageButtonLeft to='/projects'>PROJECTS</HomePageButtonLeft></td>
                            <td><HomePageButtonRight to='/about'>ABOUT ME</HomePageButtonRight></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage;