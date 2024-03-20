const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        Start adding some groceries to your shopping list 🛒
      </p>
    );

  const numItems = items.length;
  const numChecked = items.filter((item) => item.checked).length;
  const percentage = Math.round((numChecked / numItems) * 100);

  return (
    <footer className="stats">
      <div>
        <p>
          <em>
            {percentage === 100
              ? "You got everything ready to checkout 🛒💸"
              : `You have ${numItems} items on your list and you've already checked ${numChecked} (${percentage}%)`}
          </em>
        </p>
      </div>
    </footer>
  );
};

export default Stats;
