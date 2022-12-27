const skill = document.querySelector("#skill_content");

const options = {
  threshold: 0.5,
};

const animation = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      skill.classList.remove("skill_init");
      skill.classList.add("skill_animate");
    }
  });
};

const observer = new IntersectionObserver(animation, options);

observer.observe(skill);
