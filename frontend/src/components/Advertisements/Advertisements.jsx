import { useEffect, useState } from "react";
import Advertisement from "./Advertisement/Advertisement";
import "./Advertisements.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAds } from "../../features/ads/adsSlice";

const Advertisements = () => {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.ads.ads);
  const filteredAds = useSelector((state) => state.ads.filteredAds);
  const status = useSelector((state) => state.ads.status);
  const error = useSelector((state) => state.ads.error);

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <div className="ads">
      {!filteredAds
        ? ads.map((ad) => {
            return (
              <Advertisement
                key={ad.id}
                id={ad.id}
                price={ad.price}
                title={ad.title}
                phone={ad.phone}
                image={ad.image}
              />
            );
          })
        : filteredAds.map((ad) => {
            return (
              <Advertisement
                key={ad.id}
                id={ad.id}
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
