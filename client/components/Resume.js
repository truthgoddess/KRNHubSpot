import React from 'react'
import ReactMarkdown from 'react-markdown'

let source = `
## Kate Norton

katernorton@outlook.com  
631.901.7335  
New York, NY  
[Github](https://github.com/truthgoddess) | [LinkedIn](https://linkedin.com/in/katerobinanorton/)

## Skills:

**Proficient:** JavaScript, Node.js, HTML, Sequelize.js, Postgresql, Express.js  
**Knowledgeable:** CSS, React, Redux, React-Redux, Socket.io, SemanticUI, Victory  
**Familiar:** C++, Java  
**Design:** Adobe Creative Suite, Clip Studio Paint, Figma

## Experience:

**Kate Norton**  
New York, NY  
_Sole Proprietor_, 2003 - Present

- Build and run a successful tutoring business leading 38+ students to college and graduate school acceptance.
- Create and manage company website and application for katernorton.com.
- Develop strategy, manage finances, and garner customer relationships with parents and students.

**CATES Tutoring**  
New York, NY  
_Head Tutor_  
_Senior Associate Tutor_  
_Associate Tutor_  
2012 - Present

- Tutored 170+ Math, Physics, Computer Science, and test prep students over months leading them to acceptance at over 170 successful college and graduate schools.
- Promoted from Associate Tutor to Senior Associate Tutor in under 1 year.

**The Coding Space**  
New York, NY  
_Community Manager_  
_GirlCode Camp Director_  
_Curriculum Associate_  
_Coding Instructor_  
2018 - 2019

- Taught coding classes in Scratch, WoofJS (a custom JS library), HTML, CSS, and JavaScript.
- Crafted 50+ web-based coding challenges for students, including concept, coding, and UI.
- Oversaw every aspect of camp for 100+ students and 5 fulltime staff over 8 weeks, including logistics, culture, and curriculum.
- Guided instructors to implement Coding Space’s Socraticmethod teaching philosophy and principles.
- Assessed all classrooms in NYC for their health and effectiveness and mentored staff as needed.
- Planned company direction, classroom policies, and staffing in collaboration with Director of Curriculum and Operations.

## Education:

**Grace Hopper Program**, New York, FullStack Engineer  
_Immersive Software Engineering Bootcamp_

**Roosevelt University**, Chicago, IL  
_Chicago College of Performing Arts_  
MFA Acting

**SUNY Stony Brook**, Stony Brook, NY  
_College of Arts and Sciences_  
Bachelor of Arts, Theatre Arts

## Projects:

**NYPD Force Use** - [Github repo](https://github.com/truthgoddess/nypdforceuse) - [Project Deploy](https://nypd-force-use.herokuapp.com/)

- Data visualization application with dynamic views of NYPD data.
- Fully reimagined and reorganized data presented by the NYPD about Force Use.
- Designed database schema and API routes to present reorganized data.
- Developed Victory and Semantic UI application that displays data in stacked bar format and allows the user to copy data and save chart.
- Used React, React-Redux, Redux, Express.js, Sequelize.js, PostgreSQL, and Victory to deployment in 3 weeks.

**Anony-q** - [Github repo](https://github.com/truthgoddess/anony-q) - [Project Deploy](https://anony-q.herokuapp.com/)

- Live chat application with message tracking and host management.
- Designed and implemented powerful database schema to track questions, rooms, and votes.
- Developed React front end that is visually striking and easy to use.
- Implemented socket.io to create an anonymous user experience that still respect privacy.
- Used React, React-Redux, Redux, Express.js, Socket.io, PostgreSQL, and Mocha to deployment in 5 days.

**Polish'd** - [Github repo](https://github.com/2004GHPTeam8Sogr8/GraceShopper) - [Project Deploy](https://polishd.herokuapp.com/)

- Application is full stack mock storefront selling nailpolish with admin features.
- Led database model implementation.
- Encouraged team to utilize smart team coding pairs that resulted in more team engagement, inclusion, and faster results.
- Developed single product and all product views.
- Used React, React-Redux, Redux, Express.js, Mocha, PostgreSQL to deployment in 10 days.

## Interests:

- Building custom PCs for gaming (4 of my current builds are still working and being used—that is almost a decade worth of my builds working at once).
- Playing every superbly rated game ever made (I read almost every major gaming website looking for what is next like 20 times a day).
- Competitive online multiplayer shooter games like Overwatch are great.
- Ethics and philosophy are awesome and necessary.
- Believer of debate and good conversation and complex and sophisticated discussion.
- Lover of animals and owner of two cats.
- Meditation/Spiritual Philosophy help me and I am always up to chatting about it.

`

function Resume() {
  //   useEffect(() => {
  //     fetch('../documents/resume.md')
  //       .then((res) => res.text())
  //       .then((text) => setMarkdown(text))
  //   }, [])
  return (
    <div className="markdown-container">
      <ReactMarkdown source={source}></ReactMarkdown>
    </div>
  )
}

export default Resume
