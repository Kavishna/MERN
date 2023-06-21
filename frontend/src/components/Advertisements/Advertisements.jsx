import { useEffect, useState } from "react";
import Advertisement from "./Advertisement/Advertisement";
import "./Advertisements.css";
import axios from "axios";

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
  const [ads, setAds] = useState([]);

  console.log(ads);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/ads");
        const fetchedAds = response.data.map((ad) => ({
          id: ad.id,
          title: ad.title,
          price: ad.price,
          phone: ad.phone,
          image: ad.image.toString("base64"),
        }));
        setAds(fetchedAds);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);

  return (
    <div className="ads">
      {ads.map((ad) => {
        return (
          <Advertisement
            key={ad.id}
            price={ad.price}
            title={ad.title}
            phone={ad.phone}
            image={ad.image}
          />
        );
      })}
    </div>
  );
};

export default Advertisements;
