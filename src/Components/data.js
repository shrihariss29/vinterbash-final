const data = [
  {
    position: '1',
    name: 'Sri Akilandeswari Vidyalaya',
    points: '17',
    events: [
      { name: 'Nalamdhana - I', points: '10' },
      { name: 'Aathi Idhu Adhu Illa? - II', points: '07'},
      { name: 'Imitation Game - I', points: '10'},
      { name: 'Imitation Game - II', points: '07'},
      { name: 'Thirai 480 - III' , points: '03'},
      { name: 'Acoustic Nirvana - III', points : '05'}, 
      { name: 'Mozhiyamudham - III', points : '03'}, 
      {name: "Think on your feet! - III", points: "03"},
      {name: "Itihasas Quiz - I", points: "07"},
      {name: "Itihasas Quiz - III", points: "03"},
    ],
  },
  {
    position: '2',
    name: 'Kamala Niketan Montessari School',
    points: '14',
    events: [
      { name: 'Nalamdhana - II', points: '07' },
      { name: 'The Triquizzard tournument - I', points: '07' },
      { name: 'Imitation Game - III', points: '05'},
      { name: 'Mozhiyamudham - I', points : '07'},
      {name:"Cartoon Verse Crossover - I", points:'07'},
      {name: "Think on your feet! - I", points: "07"}, 
      {name: "Mr.Vinterbash", points: "15"},
    {name: "Ms.Vinterbash", points: "15"},
    ],
  },
  
  {
    position: '3',
    name: 'Santhanam Vidyalaya',
    points: '13',
    events: [
      { name: 'Chordially Yours : group music - I', points: '10' },
      { name: 'The Triquizzard tournament - III', points: '03' },
      {name: 'Multimedia Madness - III', points: '05'},
      { name: 'Thirai 480 - II' , points: '05'},
      {name:"Python Prowess Quest - I", points:'07'}, 
      {name:'Five Six Seven Eight - I', points: '10'},
      {name: 'Heels in the sky - II', points: '07'},
      {name:'Turf Football - II', points : '05'}, 
    ],
  },
  

  {
    position: '4',
    name: 'Mahathma Gandhi Centenary Vidhyalaya',
    points: '10',
    events: [
      { name: 'Aathi Idhu Adhu Illa? - I', points: '10' },
      {name: 'Multimedia Madness - III', points: '03'},
      {name:"Cartoon Verse Crossover - II", points:'05'},
    ],
  },
  {
    position: '4',
    name: 'Sri Vageesha Vidhyashram',
    points: '10',
    events: [
      { name: 'The Triquizzard tournament - II', points: '05' },
      {name : 'Aathi Idhu Adhu Illa? - III', points: '05'},
      { name: 'Acoustic Nirvana - I', points : '10'},
      { name: 'Mozhiyamudham - II', points : '05'},
      {name:"Python Prowess Quest - II", points:'05'},
      {name: "Think on your feet! - II", points: "05"}, 
      {name: "Itihasas Quiz - II", points: "05"},
      { name : "Turf Cricket - II", points : '05'},
    ],
  },
  {
    position: '6',
    name: 'Sri Vignesh Vidhyalaya',
    points: '07',
    events: [
      { name: 'Chordially Yours : group music - II', points: '07' },
      {name:"Python Prowess Quest - III", points:'03'}, 
      { name : "Turf Cricket - I", points : '07'},
    ],
  },
  {
    position: '7',
    name: 'Alpha wisdom Vidhyashram',
    points: '05',
    events: [
      { name: 'Chordially Yours : group music - III', points: '05' },
      { name:'Thirai 480 - I', points: '07'},
      { name: 'Acoustic Nirvana - II', points : '07'},
      {name:'Five Six Seven Eight - II', points: '07'},
      {name: 'Heels in the sky - I', points: '10'},
      {name: 'Heels in the sky - III', points: '05'},
      {name:'Turf Football - I', points : '07'}, 
    ],
  },
  {
    position: '7',
    name: 'RSK Higher Secondary School',
    points: '05',
    events: [
      { name: 'Nalamdhana - III', points: '05' },
      {name: 'Multimedia Madness - I', points:'07'},
      { name: 'What If Odessey? - II', points: '05' },
      {name:"Cartoon Verse Crossover - III", points:'03'}
    ],
  },




  {
    position: '-',
    name: 'Alpha Plus Matriculation HS School',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },

  {
    position: '-',
    name: 'St.Joan of Arc International School',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },

  {
    position: '-',
    name: 'Brindavan Vidyalaya',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },

  {
    position: '-',
    name: 'Chinmaya Vidhyalaya',
    points: '00',
    events: [
      { name: 'What If Odessey? - III', points: '03' },
    ],
  },

  {
    position: '-',
    name: 'Sri Vignesh Public School',
    points: '00',
    events: [
      { name: 'Event - I', points: '00' },
    ],
  },

  {
    position: '-',
    name: 'Aurobindo International School',
    points: '00',
    events: [
      { name: 'What If Odessey? - I', points: '07' },
    ],
  },


  {
    position: '-',
    name: 'Alpha Cambridge International',
    points: '00',
    events: [
      {name:'Five Six Seven Eight - III', points: '05'},
    ],
  },
  {
    position: '-',
    name: 'Government boys higher secondary school',
    points: '00',
    events: [
      {name:'Turf Football - III', points : '03'},
    ],
  },
  ]
  data.forEach(school => {
    school.points = school.events.reduce((acc, event) => acc + parseInt(event.points), 0);
  });
  
  data.sort((a, b) => parseInt(b.points) - parseInt(a.points));

  let currentPosition = 1, currentPoints = null;
  data.forEach((school, index) => {
    if (school.points !== currentPoints) {
      currentPosition = index + 1;
      currentPoints = school.points;
    }
    school.position = currentPosition;
  });
export default data;
