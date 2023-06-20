import Advertisement from "./Advertisement/Advertisement";
import "./Advertisements.css";

const dummyData = [
  {
    title: "Toyota Corolla",
    price: 15000,
    phone: "123-456-7890",
  },
  {
    title: "Honda Civic",
    price: 18000,
    phone: "234-567-8901",
  },
  {
    title: "Ford Mustang",
    price: 25000,
    phone: "345-678-9012",
  },
  {
    title: "Chevrolet Silverado",
    price: 30000,
    phone: "456-789-0123",
  },
  {
    title: "BMW 3 Series",
    price: 35000,
    phone: "567-890-1234",
  },
  {
    title: "Mercedes-Benz C-Class",
    price: 40000,
    phone: "678-901-2345",
  },
  {
    title: "Audi Q5",
    price: 45000,
    phone: "789-012-3456",
  },
  {
    title: "Lexus RX",
    price: 50000,
    phone: "890-123-4567",
  },
  {
    title: "Tesla Model S",
    price: 60000,
    phone: "901-234-5678",
  },
  {
    title: "Nissan Altima",
    price: 20000,
    phone: "012-345-6789",
  },
];

const Advertisements = () => {
  return (
    <div className="ads">
      {dummyData.map((ad) => {
        return (
          <Advertisement price={ad.price} title={ad.title} phone={ad.phone} />
        );
      })}
    </div>
  );
};

export default Advertisements;
