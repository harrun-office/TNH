// Marriage Hall booking data
export const marriageHallData = {
  chennai: {
    name: "Chennai Marriage Hall",
    capacity: "500-1000 guests",
    address: "Chennai Marriage Hall, Chennai, Tamil Nadu",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.013925834868!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265a4c7c1b8b5%3A0x3b4b5c6d7e8f9a0b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    facilities: [
      "Air-conditioned hall",
      "Stage and sound system",
      "Parking space",
      "Kitchen facilities",
      "Separate dining area",
      "Decoration support",
      "Prayer hall",
      "Luggage storage area",
      "On-site dining & kitchen",
      "Housekeeping support",
      "CCTV & security coverage"
    ],
    rent: {
      base: "₹25,000",
      perDay: true,
      description: "Base rent per day"
    },
    essentials: [
      {
        name: "Electricity/Current",
        charge: "₹5,000",
        description: "Per day electricity charges"
      },
      {
        name: "Water Supply",
        charge: "₹2,000",
        description: "Per day water charges"
      },
      {
        name: "Generator Backup",
        charge: "₹3,000",
        description: "Per day generator charges (optional)"
      },
      {
        name: "Cleaning Service",
        charge: "₹1,500",
        description: "Post-event cleaning charges"
      },
      {
        name: "Security",
        charge: "₹2,000",
        description: "Per day security charges"
      }
    ],
    images: [
      { src: '/images/building-chennai-1.jpg', alt: 'Chennai Marriage Hall' }
    ]
  },
  mumbai: {
    name: "Mumbai Marriage Hall",
    capacity: "300-800 guests",
    address: "Mumbai Marriage Hall, Mumbai, Maharashtra",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.714684416!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8c8c8c8c8d%3A0x3b4b5c6d7e8f9a0b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    facilities: [
      "Air-conditioned hall",
      "Stage and sound system",
      "Parking space",
      "Kitchen facilities",
      "Separate dining area",
      "Decoration support",
      "Prayer hall",
      "Luggage storage area",
      "On-site dining & kitchen",
      "Housekeeping support",
      "CCTV & security coverage"
    ],
    rent: {
      base: "₹30,000",
      perDay: true,
      description: "Base rent per day"
    },
    essentials: [
      {
        name: "Electricity/Current",
        charge: "₹6,000",
        description: "Per day electricity charges"
      },
      {
        name: "Water Supply",
        charge: "₹2,500",
        description: "Per day water charges"
      },
      {
        name: "Generator Backup",
        charge: "₹3,500",
        description: "Per day generator charges (optional)"
      },
      {
        name: "Cleaning Service",
        charge: "₹2,000",
        description: "Post-event cleaning charges"
      },
      {
        name: "Security",
        charge: "₹2,500",
        description: "Per day security charges"
      }
    ],
    images: [
      { src: '/images/building-mumbai-1.jpg', alt: 'Mumbai Marriage Hall' }
    ]
  }
};

