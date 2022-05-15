import Item from "./Item";

export default function ItemList() {
  const item = {
    name: "Nikon Z30",
    image: "images/001.jpeg",
    date: "2022-01-12",
    description: "details",
    price: "3000 sek",
    category: "photography",
  };

  const itemList = [item, item, item, item, item, item, item];

  return (
    <div>
      <div className="list-group list-group-flush border-bottom scrollarea">
        {itemList.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
