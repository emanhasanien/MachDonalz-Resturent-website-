import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// قائمة فروع ماكدونالدز في مصر (مثال)
const mcdoLocations = [
  { lat: 30.033333, lng: 31.233334, name: "ماكدونالدز - ميدان التحرير" },
  { lat: 30.04442, lng: 31.235712, name: "ماكدونالدز - وسط البلد" },
  { lat: 29.97648, lng: 31.134202, name: "ماكدونالدز - القاهرة الجديدة" },
  { lat: 30.603056, lng: 32.265833, name: "ماكدونالدز - سوهاج" },
  { lat: 30.603056, lng: 32.265833, name: "ماكدونالدز - المعادي" },
  { lat: 30.603056, lng: 31.233334, name: "ماكدونالدز - مدينة نصر" },
  { lat: 30.603056, lng: 32.265833, name: "ماكدونالدز - الاسكندرية" },
];

const MacMap = () => {
  return (
    <div className="w-[90%] mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl md:text-4xl py-5 font-medium">موقعنا </h3>

          <h4 className="text-[20px]">المقر الرئيسي</h4>
          <p>شارع التحرير، وسط البلد، القاهرة مصر</p>
        </div>

        <div className="col-span-2">
          <MapContainer
            center={[30.033333, 31.233334]}
            zoom={12}
            style={{ height: "300px", width: "100%" }}
          >
            {/* عنوان الخريطة من OSM */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* علامات الفروع */}
            {mcdoLocations.map((location, index) => (
              <Marker key={index} position={[location.lat, location.lng]}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MacMap;
