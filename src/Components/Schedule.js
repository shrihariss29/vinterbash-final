import React, { useState } from "react";
import art from "../assets/art.jpg";
import dance from "../assets/dance.jpg";
import drama from "../assets/drama.jpg";
import elits from "../assets/elits.jpg";
import music from "../assets/music.jpg";
import quiz from "../assets/quiz.jpg";
import sport from "../assets/sport.jpg";
import tamillits from "../assets/tamillits.jpg";
import tech from "../assets/tech.jpg";
import eventvinterlogo from "../assets/eventvinterlogo.jpg";
const events = [
  {
    title: "தமிழ்",
    subtitle: "கூடு விட்டு கூடு ",
    type: "இரண்டு சுற்றுகளுக்கு மேல் ",
    time: "விரைவில் அறிவிக்கப்படும் ",
    venue: "விரைவில் அறிவிக்கப்படும் ",
    imgSrc: tamillits,
  },
  {
    title: "Tech",
    subtitle: "Ctrl + Alt + Decrypt",
    type: "Has more than two rounds",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: tech,
  },
  {
    title: "Art",
    subtitle: "DOOMSDAY: The Final Frame",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: art,
  },
  {
    title: "Title event",
    subtitle: "Coronation - (Mr And Ms VinterBash)",
    type: "Has prelims and finals",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: eventvinterlogo,
  },
  {
    title: "Sports",
    subtitle: "Vinter Kick-Off: 5-A Side Football",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: sport,
  },
  {
    title: "Dance",
    subtitle: "Unnai Kaanathu..!!",
    type: "Has more than two rounds",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: dance,
  },
  {
    title: "Cubing",
    subtitle: "No time to Solve",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: tech,
  },
  {
    title: "Music",
    subtitle: "Chordially Yours!",
    type: "Has prelims and finals",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: music,
  },
  {
    title: "Sports",
    subtitle: "Vinter Bowl-Out: Turf Cricket",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: sport,
  },
  {
    title: "Art",
    subtitle: "Ar(T)elic!",
    type: "Has prelims and finals",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: art,
  },
  {
    title: "Dramatics",
    subtitle: "Imitation Game",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: drama,
  },
  {
    title: "Dance",
    subtitle: "Drop the Beat",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: dance,
  },
  {
    title: "Quiz",
    subtitle: "The Triquizzard Tournament 5.O",
    type: "Has more than two rounds",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: quiz,
  },
  {
    title: "Music",
    subtitle: "Acoustic Nirvana",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: music,
  },
  {
    title: "English literature",
    subtitle: "Time Traveller's Theatre",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: elits,
  },
  {
    title: "Gaming",
    subtitle: "Vinter Goal-Rush: FIFA '25",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: tech,
  },
  {
    title: "Dramatics",
    subtitle: "Nalla Otrainga da Reel-uh!",
    type: "Only one round",
    time: "To be announced shortly",
    venue: "To be announced shortly",
    imgSrc: drama,
  },
];

function Schedule() {
  const [selectedType, setSelectedType] = useState("All");
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const filteredEvents =
    selectedType === "All"
      ? events
      : events.filter((event) => event.title === selectedType);
  const ScheduleCard = ({ title, subtitle, type, time, venue, imgSrc }) => (
    <div className="schedulecard">
      <img src={imgSrc} alt={title} />
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h4>Type : {type}</h4>
        <h4>Time : {time}</h4>
        <h4>Venue : {venue}</h4>
      </div>
    </div>
  );
  return (
    <div>
      <h1 className="Leaderboard">Schedule</h1>
      <div className="filter">
        <label className="eventType">Filter by event type : </label>
        <select
          id="selectedtype"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="All">All</option>
          <option value="Art">Art</option>
          <option value="Cubing">Cubing</option>
          <option value="Dance">Dance</option>
          <option value="Dramatics">Dramatics</option>
          <option value="English literature">English literature</option>
          <option value="Music">Music</option>
          <option value="Quiz">Quiz</option>
          <option value="Sports">Sports</option>
          <option value="தமிழ் இலக்கியம்">தமிழ் இலக்கியம்</option>
          <option value="Tech">Tech</option>
          <option value="Title event">Title event</option>
        </select>
      </div>
      <div className="scheduleflex">
        {filteredEvents.map((event, index) => (
          <ScheduleCard
            key={index}
            title={event.title}
            subtitle={event.subtitle}
            type={event.type}
            time={event.time}
            venue={event.venue}
            imgSrc={event.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
export default Schedule;






