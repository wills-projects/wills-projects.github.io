import React, { useRef, useEffect } from 'react';

function ImageTrack() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseDown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleMouseMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;
    
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;
    
      const percentage = (mouseDelta / maxDelta) * -100;
      let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
      nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);
      
      track.dataset.percentage = nextPercentage;

      track.animate({transform: `translate(${nextPercentage}%)`}, 
                    {duration: 1200, fill:"forwards"});

      for (const image of track.getElementsByClassName("image")) 
      {
        image.animate({ objectPosition: `${100 + nextPercentage}% center` },
                      { duration: 1200, fill: "forwards" });
      }
    };

    const handleMouseUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };



    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      // This code was inspired by Camille Mormal, the YouTube video can be found here
      // https://www.youtube.com/watch?v=PkADl0HubMY
    };
  }, []);

  return (
    <div id="image-track-wrapper">
      <div id="image-track" ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0">
        <img src="./src/assets/valorant pixel art home.png" class="image" alt="A drawing I created using a system call graphics library." draggable="false" />
        <img src="./src/assets/tartanhacks.jpg" class="image" alt="My friend and I judging a TartanHacks facial recognition project." draggable="false" />
        <img src="./src/assets/jazz ensemble.jpg" class="image" alt="The Pitt Jazz Band ensemble rehearsing a song. I'm the vice president!" draggable="false" />
        <img src="./src/assets/about me.jpg" class="image" alt="A photo of me exploring the Philadelphia Museum of Art!" draggable="false"/>
        <img src="./src/assets/olympic national park.jpeg" class="image" alt="A photo of me staring out into Olympic National Park." draggable="false"/>
        <img src="./src/assets/pittsburgh sunset.jpg" class="image" alt="A unique orange and purple sunset in Pittsburgh's Squirrel Hill." draggable="false"/>
        <img src="./src/assets/avalon exchange thrift store.jpg" class="image" alt="The interior of Avalon Exchange thrift store in Pittsburgh." draggable="false"/>
        <img src="./src/assets/website HTML progress.jpg" class="image" alt="The progression of my portfolio project's HTML code." draggable="false"/>
      </div>
    </div>
  );
};

export default ImageTrack;
