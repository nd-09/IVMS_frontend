const StatCard = ({ title, value, description,icon}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition duration-300">
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-gray-500 text-sm font-medium"> {description}</p>
      </div>
      <div className="text-indigo-600 text-3xl">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
