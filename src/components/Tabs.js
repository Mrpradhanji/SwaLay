const Tabs = ({ activeTab, setActiveTab }) => {
    return (
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('basicInfo')}
          className={`py-2 px-4 ${activeTab === 'basicInfo' ? 'bg-blue-500 rounded-md text-white' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          Basic Info
        </button>
        <button
          onClick={() => setActiveTab('aboutMe')}
          className={`py-2 px-4 ${activeTab === 'aboutMe' ? 'bg-blue-500 rounded-md text-white' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab('bankDetails')}
          className={`py-2 px-4 ${activeTab === 'bankDetails' ? 'bg-blue-500 rounded-md text-white' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          Bank Details
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`py-2 px-4 ${activeTab === 'support' ? 'bg-blue-500 rounded-md text-white' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          Support
        </button>
      </div>
    );
  };
  
  export default Tabs;
  