import Card from "./Card";
import CardSection from "./CardSection";


const CardSet = ({ setItem, setName, setIdx, onAdd }) => {
  return (
    <div id="cardset" className={setName}>
      <CardSection
        title={setItem.setTitle}
        des={setItem.setDescription}
        btn={setItem.setIcon}
        setName={setName}
        setIdx={setIdx}
      />
      <div className="cardwrap">
        {
          setItem.products.map((item, idx) => {
            return (
              <Card
                key={idx}
                products={item}
                onAdd={onAdd}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default CardSet;