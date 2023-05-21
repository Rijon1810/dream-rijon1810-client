const SkillCard = ({ name, iconPath }) => {
  return (
    <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 class="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 flex items-center justify-center">
        {name}
      </h5>
    </div>
  );
};

export default SkillCard;
