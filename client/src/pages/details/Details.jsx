import HomeLayout from "../../layout/homeLayout/HomeLayout";

const Details = () => {
  return (
    <HomeLayout>
      <div className="container mx-auto py-10 px-4 lg:px-0 flex flex-col lg:flex-row gap-10 items-start">
        {/* Event Image */}
        <div className="w-full lg:w-1/3">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg"
            alt="Event"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Event Details */}
        <div className="flex-1 space-y-8">
          {/* Event Title and Main Info */}
          <div>
            <h1 className="text-4xl font-bold text-primary-700 mb-4">
              Event Title
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Curabitur quis eros varius, consequat arcu at,
              malesuada urna.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-primary-600 font-semibold border border-primary-600 rounded-lg py-1 px-3">
                Category: Konser
              </span>
              <span className="text-primary-600 font-semibold border border-primary-600 rounded-lg py-1 px-3">
                Date: Dec 15, 2024
              </span>
              <span className="text-primary-600 font-semibold border border-primary-600 rounded-lg py-1 px-3">
                Şehir: New York, NY
              </span>
              <span className="text-primary-600 font-semibold border border-primary-600 rounded-lg py-1 px-3">
                Mekan: Opera Salonu
              </span>
            </div>
          </div>

          {/* Cast Section */}
          <div>
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Cast
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img
                  src="https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg"
                  alt="Cast Member 1"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-gray-600 text-sm">Lead Actor</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src="https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg"
                  alt="Cast Member 2"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-gray-600 text-sm">Supporting Actress</p>
                </div>
              </li>
              {/* Add more cast members as needed */}
            </ul>
          </div>

          {/* Additional Event Information */}
          <div>
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Event Details
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This is where additional information about the event can be added.
              Details about the schedule, any guest speakers, special
              activities, and more can go here.
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Details;
