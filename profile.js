const profileData = [
    {
      id: 1,
      name: "Jonas Schmedtmann",
      intro:
        "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
      image: "profiles/jonas.jpeg",
      skills: [
        {
          name: "React",
          color: "light blue",
          level: "Intermediate",
        },
        {
          name: "HTML+CSS",
          color: "blue",
          level: "Advanced",
        },
        {
          name: "JavaScript",
          color: "yellow",
          level: "Intermediate",
        },
        {
          name: "Svelte",
          color: "orangered",
          level: "Beginner",
        },
      ],
    },
    {
      id: 2,
      name: "Sara Vieira",
      intro:
        "Developer Advocate at YLD and Speaker. I enjoy coding, traveling, and sharing knowledge with the community.",
      image: "profiles/sara.png",
      skills: [
        {
          name: "React",
          color: "light blue",
          level: "Intermediate",
        },
        {
          name: "JavaScript",
          color: "yellow",
          level: "Intermediate",
        },
        {
          name: "GraphQL",
          color: "purple",
          level: "Advanced",
        },
        {
          name: "Node.js",
          color: "green",
          level: "Intermediate",
        },
      ],
    },
    {
      id: 3,
      name: "Chris Coyier",
      intro:
        "Web Developer, Writer, and Speaker. I love building things for the web and sharing what I learn through my blog and talks.",
      image: "profiles/chris.jpg",
      skills: [
        {
          name: "HTML+CSS",
          color: "blue",
          level: "Advanced",
        },
        {
          name: "JavaScript",
          color: "yellow",
          level: "Intermediate",
        },
        {
          name: "SVG",
          color: "golish",
          level: "Intermediate",
        },
        {
          name: "WordPress",
          color: "blue",
          level: "Intermediate",
        },
      ],
    },
    {
      id: 4,
      name: "Ari Lerner",
      intro:
        "Software Engineer, Author, and Speaker. I specialize in building scalable web applications and teaching others how to do the same.",
      image: "profiles/Ari.jpg",
      skills: [
        {
          name: "Angular",
          color: "red",
          level: "Intermediate",
        },
        {
          name: "Node.js",
          color: "green",
          level: "Advanced",
        },
        {
          name: "TypeScript",
          color: "blue",
          level: "Intermediate",
        },
        {
          name: "Docker",
          color: "blue",
          level: "Intermediate",
        },
      ],
    },
    {
      id: 5,
      name: "Ali Spittel",
      intro:
        "Senior Developer Advocate at AWS and Blogger. I'm passionate about education, accessibility, and building inclusive communities in tech.",
      image: "profiles/Ali.jpg",
      skills: [
        {
          name: "Python",
          color: "blue",
          level: "Intermediate",
        },
        {
          name: "JavaScript",
          color: "yellow",
          level: "Intermediate",
        },
        {
          name: "React",
          color: "light blue",
          level: "Intermediate",
        },
        {
          name: "AWS",
          color: "orange",
          level: "Advanced",
        },
      ],
    },
  ];
  
const profileContainer = document.querySelector('.main');

profileData.map(profile => {
  const profileCard = document.createElement('div');
  profileCard.className = 'card';

  const profileImage = document.createElement('img');
  profileImage.src = profile.image;
  profileImage.alt = profile.name;

  // const profileContent = document.createElement('div');
  // profileContent.className = 'desc';

  const profileName = document.createElement('div');
  profileName.innerHTML = `<h2>${profile.name}</h2>`
  // profileName.textContent = profile.name;

  const profileIntro = document.createElement('div');
profileIntro.className = 'desc'
  profileIntro.innerHTML = `<p>${profile.intro}</p>`


  const skillsContainer = document.createElement('div');
  skillsContainer.className = 'skills-container';

  profile.skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skills';
    skillDiv.textContent = `${skill.name} (${skill.level})`;
    skillDiv.style.backgroundColor = skill.color;
    skillsContainer.appendChild(skillDiv);
  });

  // profileContent.appendChild(profileIntro);
  
  profileCard.appendChild(profileImage);
  profileCard.appendChild(profileName);
  profileCard.appendChild(profileIntro);
  profileCard.appendChild(skillsContainer);

  profileContainer.appendChild(profileCard);
});
