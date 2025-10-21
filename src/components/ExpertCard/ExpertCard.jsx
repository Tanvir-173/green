const ExpertCard = ({ expert }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
      <img
        src={expert.image}
        alt={expert.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="font-semibold text-lg text-black">{expert.name}</h3>
      <p className="text-black">{expert.specialty}</p>
    </div>
  );
};

export default ExpertCard;