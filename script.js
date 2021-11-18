const lessons = [
  {
    name: 'Zumba',
    trainer: 'Simon Tremain',
    image: 'images/trainer-1.png',
    info: 'Zumba is a fitness program that combines Latin and international music with dance moves to help improve cardiovascular fitness.',
  },
  {
    name: 'Dance Dance',
    trainer: 'Lucy Carmicheal',
    image: 'images/trainer-2.png',
    info: 'Dance dance is a fitness program that combines Scottish music with dance moves to help improve arm fitness.',
  },
  {
    name: 'Yoga Power',
    trainer: 'John Pox',
    image: 'images/trainer-3.png',
    info: 'Yoga power is a fitness program that will improve you health and welbeing through use of 7 different poses.',
  },
  {
    name: 'Super Flex',
    trainer: 'Tracy Sloth',
    image: 'images/trainer-4.png',
    info: 'Super flex is a fitness program that uses the power of flexing for your general wellbeing.',
  },
  {
    name: 'Spinning',
    trainer: 'Willian Moreno',
    image: 'images/trainer-5.png',
    info: 'You sit on a bike and you peddle and you do it for an hour at different speeds for maximum health boosting power.',
  },
  {
    name: 'Gymnastics',
    trainer: 'Aleesha Hill',
    image: 'images/trainer-6.png',
    info: 'Try not to break your neck in this thrilling new class by experienced olympic winner Aleesha.',
  },
];

let fitnessClasses = '';
lessons.forEach((lesson) => {
  fitnessClasses += `<article class="class-cards">
  <img src="${lesson.image}" alt="personal trainer">
  <div>
    <h3 class="classes">${lesson.name}</h3>
    <p class="orange">with ${lesson.trainer}</p>
    <hr>
    <p>${lesson.info}</p>
  </div>
</article>`;
});

const lessonContainer = document.querySelector('.lessons');
lessonContainer.innerHTML = fitnessClasses;
