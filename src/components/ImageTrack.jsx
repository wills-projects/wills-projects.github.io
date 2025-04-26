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
      let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage * 0.4;
      // nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

      // Subtract the VISIBLE width of the browser window from the TOTAL width of the track, which equals how much content is overflowing (how much we need to scroll)
      // The track.scrollWidth when we divide tells us how much of the total width is hidden, so if we have 2000px of hidden content, we divide that by 3000px of total content and get 66% of hidden track
      const maxMove = (track.scrollWidth - window.innerWidth) / track.scrollWidth * 100;

      // Limit the movement of the image track between 0% and -maxMove%
      nextPercentage = Math.max(Math.min(nextPercentage, 0), -maxMove);
      
      track.dataset.percentage = nextPercentage;

      track.animate({transform: `translate(${nextPercentage}%)`}, 
                    {duration: 300, fill:"forwards"});

      for (const image of track.getElementsByClassName("image")) 
      {
        image.animate({ objectPosition: `${100 + nextPercentage}% center` },
                      { duration: 300, fill: "forwards" });
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
        <img src="/valorant pixel art home.png" class="image" alt="A drawing I created using a system call graphics library." draggable="false" />
        <img src="/tartanhacks.jpg" class="image" alt="My friend and I judging a TartanHacks facial recognition project." draggable="false" />
        <img src="/jazz ensemble.jpg" class="image" alt="The Pitt Jazz Band ensemble rehearsing a song. I'm the vice president!" draggable="false" />
        <img src="/about me.JPG" class="image" alt="A photo of me exploring the Philadelphia Museum of Art!" draggable="false"/>
        <img src="/olympic national park.jpeg" class="image" alt="A photo of me staring out into Olympic National Park." draggable="false"/>
        <img src="/pittsburgh sunset.jpg" class="image" alt="A unique orange and purple sunset in Pittsburgh's Squirrel Hill." draggable="false"/>
        <img src="/avalon exchange thrift store.jpg" class="image" alt="The interior of Avalon Exchange thrift store in Pittsburgh." draggable="false"/>
        <img src="/website HTML progress.jpg" class="image" alt="The progression of my portfolio project's HTML code." draggable="false"/>
      </div>
    </div>
  );
};

export default ImageTrack;
